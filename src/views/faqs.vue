<template>
  <div class="faqs">
    <header>
      <div class="content faqs_page">
        <div class="bg"></div>
        <div class="title">{{ $t("faqs.title") }}</div>
        <div class="text">{{ $t("faqs.text") }}</div>
      </div>
    </header>
    <article>
      <div class="content faqs_cont">
        <div class="faq_li" v-for="(item, index) in qs_cont" :key="index" :class="{'active': show_qs == index}">
          <div class="li_top" @click="clickShow(index)">
            <div class="qa_img"></div>
            <div class="qa_title">{{ item.title }}</div>
            <div class="arrow_img" :class="{'active': show_qs == index}"></div>
          </div>
          <div class="li_text" v-show="show_qs == index">{{ item.text }}</div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
  // @ is an alias to /src
  import { defineComponent, ref, watch, onMounted, onUnmounted, computed, inject, nextTick } from "vue";
  import { useStore } from "vuex"
  import { useI18n } from "vue-i18n";
  import { useRoute, useRouter } from 'vue-router'
  export default defineComponent({
    name: 'faqs',
    components: {},
    setup() {
      const { t, locale } = useI18n()
      const message = inject( '$message')
      const store = useStore()
      const loading = inject( '$loading')
      let lan = computed(() => store.state.lan)
      const router = useRouter()
      const route = useRoute()
      
      const show_qs = ref(null)
      const qs_cont = ref([
        {
          title: t("faqs.qs1.title"),
          text: t("faqs.qs1.text")
        },
        {
          title: t("faqs.qs2.title"),
          text: t("faqs.qs2.text")
        },
        {
          title: t("faqs.qs3.title"),
          text: t("faqs.qs3.text")
        },
        {
          title: t("faqs.qs4.title"),
          text: t("faqs.qs4.text")
        },
        {
          title: t("faqs.qs5.title"),
          text: t("faqs.qs5.text")
        },
        {
          title: t("faqs.qs6.title"),
          text: t("faqs.qs6.text")
        },
        {
          title: t("faqs.qs7.title"),
          text: t("faqs.qs7.text")
        },
        {
          title: t("faqs.qs8.title"),
          text: t("faqs.qs8.text")
        },
        {
          title: t("faqs.qs9.title"),
          text: t("faqs.qs9.text")
        },
        {
          title: t("faqs.qs10.title"),
          text: t("faqs.qs10.text")
        }
      ])
      const clickShow = (index) => {
        if (index == show_qs.value && show_qs.value != null) {
          show_qs.value = null
        } else {
          show_qs.value = index
        }
      }

      watch(() => locale.value, () => {
        qs_cont.value = [
          {
            title: t("faqs.qs1.title"),
            text: t("faqs.qs1.text")
          },
          {
            title: t("faqs.qs2.title"),
            text: t("faqs.qs2.text")
          },
          {
            title: t("faqs.qs3.title"),
            text: t("faqs.qs3.text")
          },
          {
            title: t("faqs.qs4.title"),
            text: t("faqs.qs4.text")
          },
          {
            title: t("faqs.qs5.title"),
            text: t("faqs.qs5.text")
          },
          {
            title: t("faqs.qs6.title"),
            text: t("faqs.qs6.text")
          },
          {
            title: t("faqs.qs7.title"),
            text: t("faqs.qs7.text")
          },
          {
            title: t("faqs.qs8.title"),
            text: t("faqs.qs8.text")
          },
          {
            title: t("faqs.qs9.title"),
            text: t("faqs.qs9.text")
          },
          {
            title: t("faqs.qs10.title"),
            text: t("faqs.qs10.text")
          }
        ]
      })

      const linkHref = (el) => {
        window.open(`https://www.hpvideo.io/`, '_blank')
      }
      
      onMounted(async () => {
        
      });
      onUnmounted(() => {
        
      });
      return {
        lan,
        qs_cont,
        show_qs,
        clickShow
      };
    }
  })
</script>

<style lang="scss" scoped>
.faqs {
  width: 100%;
  font-style: normal;
  .content {
    min-width: 1200px;
    width: 100%;
    font-size: 0;
    line-height: 0;
    &.faqs_page {
      position: relative;
      width: 90%;
      z-index: 5;
      margin: auto;
      max-width: 1440px;
      min-width: 1200px;
      padding: 214px 0 50px;
      box-sizing: border-box;
      .bg {
        position: absolute;
        z-index: 1;
        top: -400px;
        right: -1000px;
        width: 2539px;
        height: 2174px;
        background: url(../assets/faq/faq_bg.png) no-repeat 100%/100%;
      }
      .title {
        width: 100%;
        color: #fff;
        font-size: 60px;
        text-align: left;
        font-weight: 800;
        line-height: 100%;
        letter-spacing: 0%;
        vertical-align: middle;
      }
      .text {
        width: 100%;
        color: #fff;
        font-size: 24px;
        margin-top: 20px;
        line-height: 30px;
        font-family: "Outfit";
        vertical-align: middle;
      }
    }
    &.faqs_cont {
      position: relative;
      width: 90%;
      z-index: 5;
      margin: auto;
      max-width: 1440px;
      min-width: 1200px;
      .faq_li {
        width: 100%;
        padding: 20px 36px;
        border-radius: 34px;
        margin: 0 auto 20px;
        box-sizing: border-box;
        transition: all .3s ease-in-out;
        background: rgba($color: #fff, $alpha: .05);
        border: 4px solid rgba($color: #fff, $alpha: .1);
        &.active {
          border-color: #DCA9FF;
        }
        .li_top {
          display: flex;
          cursor: pointer;
          align-items: center;
          justify-content: space-between;
          .qa_img {
            width: 46px;
            height: 46px;
            background: url(../assets/faq/faq_img1.png) no-repeat 100%/100%;
          }
          .qa_title {
            flex: 1;
            color: #fff;
            margin: 0 24px;
            font-size: 24px;
            font-weight: 600;
          }
          .arrow_img {
            width: 44px;
            height: 44px;
            transition: transform .3s ease-in-out;
            background: url(../assets/faq/faq_arrow.png) no-repeat 100%/100%;
            &.active {
              transform: rotate(180deg);
            }
          }
        }
        .li_text {
          font-size: 16px;
          margin-top: 8px;
          line-height: 24px;
          font-family: "Outfit";
          vertical-align: middle;
          color: rgba($color: #fff, $alpha: .5);
        }
      }
    }
  }
}

</style>
