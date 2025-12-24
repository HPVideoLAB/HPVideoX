<template>
  <div class="blogInfo">
    <header>
      <div class="content info_page" :style="{backgroundImage: `url(https://www.hpvideo.io/uploads/${blogData.img_file})`}">
        <div class="bg"></div>
        <div class="page_cont">
          <div class="title">{{ blogData.title }}</div>
        </div>
      </div>
    </header>
    <div class="page_cont">
      <div class="page_text text"><p class="page_title1">{{ blogData.category }}</p> {{ new Date(blogData.date).toLocaleString() }}</div>
      <div class="page_img"><img :src="`https://www.hpvideo.io/uploads/${blogData.img_file}`" :alt="blogData.img_alt ? blogData.img_alt : ''"/></div>
      <div class="page_text" v-html="blogData.editor_content"></div>
    </div>
  </div>
</template>

<script>
  import { defineComponent, ref, computed, watch, onMounted, inject } from "vue";
  import { useRoute, useRouter } from 'vue-router'
  import { getBlogInfo } from "@/api/index.js"
  import { useI18n } from "vue-i18n";
  import { useStore } from "vuex"
  export default defineComponent({
    name: 'BlogInfo',
    setup() {
      const { t, locale } = useI18n();
      const store = useStore()
      let lan = computed(() => {
        return store.state.lan
      })
      const loading = inject('$loading')
      const router = useRouter()
      const route = useRoute()
      const blogData = ref('')
      const getImageUrl = () => {
        const num = 2;
        return require(`@/assets/learn/learn_img${num}.png`);
      }
      const getData = async () => {
        const loadingInstance = loading.service({
          target: '.blogInfo',
          text: 'Loading...',
          background: 'rgba(0, 0, 0, 0.7)'
        })
        try {
          console.log(route, 'route');
          let res_data = {}
          if (route.params.keyword) {
            res_data.link_url = route.params.keyword
          }
          const data = await getBlogInfo(res_data)
          if (data.success) {
            blogData.value = data.data
          }
          loadingInstance.close()
        } catch (error) {
          loadingInstance.close() 
        }
      }
      onMounted(async() => {
        await getData()
      })
      return {
        lan,
        blogData,
      };
    }
  })
</script>

<style>
.blogInfo p {
  margin: revert;
}
.blogInfo span {
  margin: revert;
}
.blogInfo div {
  margin: revert;
}
.blogInfo li {
  margin: revert;
}
</style>

<style lang="scss" scoped>
.blogInfo {
  margin: auto;
  width: 100%;
  overflow: hidden;
  font-style: normal;
  position: relative;
  .content {
    min-width: 1200px;
    width: 100%;
    font-size: 0;
    line-height: 0;
    &.info_page {
      position: relative;
      width: 100%;
      z-index: 5;
      min-height: 880px;
      margin: 114px auto 0;
      box-sizing: border-box;
      height: calc(100vh - 114px);
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      .bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.96) 57%, #000 77%, #000 100%);
      }
      .page_cont {
        position: relative;
        z-index: 11;
        width: 90%;
        margin: auto;
        height: 100%;
        max-width: 1200px;
        min-width: 1200px;
        .title {
          position: absolute;
          left: 0;
          width: 1200px;
          bottom: 50px;
          color: #fff;
          font-size: 64px;
          font-weight: 600;
          line-height: 64px;
        }
      }
    }
  }
  .page_title {
    color: #fff;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    font-family: Monda;
  }
  .page_title1 {
    font-size: 24px;
    line-height: 1.1;
    font-weight: 600;
    font-family: Outfit;
    color: rgba(255, 255, 255, .8);
  }
  .page_text {
    font-size: 16px;
    line-height: 1.1;
    font-family: Outfit;
    color: rgba(255, 255, 255, .5);
  }
  .page_cont {
    position: relative;
    z-index: 2;
    width: 90%;
    min-width: 600px;
    overflow: hidden;
    max-width: 1100px;
    margin: 0 auto 100px;
    position: relative;
    .text {
      display: flex;
      margin-top: 20px;
      align-items: baseline;
      .page_title1 {
        margin-right: 10px;
      }
    }
    .page_img {
      width: 100%;
      margin: 30px 0;
      overflow: hidden;
      img {
        width: 100%;
        margin: auto;
        border-radius: 50px;
      }
    }
    .page_text {
      width: 100%;
    }
  }
}

</style>

