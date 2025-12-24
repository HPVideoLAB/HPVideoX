import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './locales/i18n'
import { createHead } from '@unhead/vue'
import { 
  ElDropdown, 
  ElDropdownMenu, 
  ElDropdownItem, 
  ElBacktop, 
  ElMessage, 
  ElLoading, 
  ElDialog
} from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App);
const head = createHead()
app.use(head)
app.use(i18n)
app.use(router)
app.use(store)
// app.use(VueLazyload, {
//   preLoad: 1.3,
//   error: errorimage,
//   loading: loadimage,
//   attempt: 1
// })

app.directive('animate', {
  mounted: function (el, binding) {
    const debounce = (func, wait) => {
      let timeout
      return function() {
        const context = this
        const args = arguments
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          func.apply(context, args)
        }, wait)
      }
    }

    const scrollHandler = () => {
      const { top } = el.getBoundingClientRect()
      const h = document.documentElement.clientHeight || document.body.clientHeight
      
      if (top < h) {
        if (!el.classList.contains(binding.value.class)) {
          setTimeout(() => {
            el.classList.remove('animation_hide')
          }, binding.value.delay)
          el.classList.add(binding.value.class)
        }
        window.removeEventListener('scroll', binding.debouncedHandler)
      }
    }

    binding.debouncedHandler = debounce(scrollHandler, 100)

    window.addEventListener('scroll', binding.debouncedHandler)
    scrollHandler()
  },
  beforeUnmount: function (el, binding) {
    if (binding.addClass) {
      window.removeEventListener('scroll', binding.addClass)
    }
  }
})

app.component(ElDialog.name, ElDialog)
app.component(ElBacktop.name, ElBacktop)
app.component(ElDropdown.name, ElDropdown)
app.component(ElDropdownMenu.name, ElDropdownMenu)
app.component(ElDropdownItem.name, ElDropdownItem)
app.provide('$message', ElMessage)
app.provide('$loading', ElLoading)
app.mount('#app')