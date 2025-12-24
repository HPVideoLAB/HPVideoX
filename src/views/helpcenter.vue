<template>
  <div class="help">
    <header>
      <div class="content help_page">
        <div class="page_cont">
          <div class="title">{{ $t("help.title") }}</div>
          <div class="text">{{ $t("help.text") }}</div>
          <div class="btns">
            <div class="btn btn1" @click="linkHref('/creator')">{{ $t("help.btn1") }}</div>
            <div class="btn">{{ $t("help.btn2") }}</div>
          </div>
        </div>
      </div>
    </header>
    <article>
      <div class="content help_intro">
        <div class="title">{{ $t("help.title1") }}</div>
        <div class="text">{{ $t("help.text1") }}</div>
        <div class="help_list">
          <div class="help_li">
            <div class="li_title">{{ $t("help.desc1.title") }}</div>
            <div class="li_text">{{ $t("help.desc1.text") }}</div>
            <div class="li_desc">
              <div class="li_btn">{{ $t("help.desc1.btn1") }}</div>
              <div class="li_btn">{{ $t("help.desc1.btn2") }}</div>
              <div class="li_btn">{{ $t("help.desc1.btn3") }}</div>
              <div class="li_btn">{{ $t("help.desc1.btn4") }}</div>
            </div>
          </div>
          <div class="help_li">
            <div class="li_title">{{ $t("help.desc2.title") }}</div>
            <div class="li_text">{{ $t("help.desc2.text") }}</div>
            <div class="li_desc">
              <div class="li_btn">{{ $t("help.desc2.btn1") }}</div>
              <div class="li_btn">{{ $t("help.desc2.btn2") }}</div>
              <div class="li_btn">{{ $t("help.desc2.btn3") }}</div>
              <div class="li_btn">{{ $t("help.desc2.btn4") }}</div>
            </div>
          </div>
          <div class="help_li">
            <div class="li_title">{{ $t("help.desc3.title") }}</div>
            <div class="li_text">{{ $t("help.desc3.text") }}</div>
            <div class="li_desc">
              <div class="li_btn">{{ $t("help.desc3.btn1") }}</div>
              <div class="li_btn">{{ $t("help.desc3.btn2") }}</div>
            </div>
          </div>
          <div class="help_li">
            <div class="li_title">{{ $t("help.desc4.title") }}</div>
            <div class="li_text">{{ $t("help.desc4.text") }}</div>
            <div class="li_desc">
              <div class="li_btn">{{ $t("help.desc4.btn1") }}</div>
              <div class="li_btn">{{ $t("help.desc4.btn2") }}</div>
              <div class="li_btn">{{ $t("help.desc4.btn3") }}</div>
            </div>
          </div>
          <div class="help_li">
            <div class="li_title">{{ $t("help.desc5.title") }}</div>
            <div class="li_text">{{ $t("help.desc5.text") }}</div>
            <div class="li_desc">
              <div class="li_btn">{{ $t("help.desc5.btn1") }}</div>
              <div class="li_btn">{{ $t("help.desc5.btn2") }}</div>
              <div class="li_btn">{{ $t("help.desc5.btn3") }}</div>
            </div>
          </div>
          <div class="help_li">
            <div class="li_title">{{ $t("help.desc6.title") }}</div>
            <div class="li_text">{{ $t("help.desc6.text") }}</div>
            <div class="li_desc">
              <div class="li_btn">{{ $t("help.desc6.btn1") }}</div>
              <div class="li_btn">{{ $t("help.desc6.btn2") }}</div>
              <div class="li_btn">{{ $t("help.desc6.btn3") }}</div>
            </div>
          </div>
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
    name: 'help',
    components: {},
    setup() {
      const { t, locale } = useI18n()
      const message = inject( '$message')
      const store = useStore()
      const loading = inject( '$loading')
      let lan = computed(() => store.state.lan)
      const router = useRouter()
      const route = useRoute()
      
      const choose_index = ref(0)
      const choose_filter = async (index) => {
        choose_index.value = index
      }
      const linkHref = (el) => {
        window.open('https://www.hpvideo.io/creator/', '_blank')
      }
      
      onMounted(async () => {
        
      });
      onUnmounted(() => {
        
      });
      return {
        lan,
        choose_index,
        choose_filter,
        linkHref
        
      };
    }
  })
</script>

<style lang="scss" scoped>
.help {
  width: 100%;
  font-style: normal;
  .content {
    min-width: 1200px;
    width: 100%;
    font-size: 0;
    line-height: 0;
    &.help_page {
      position: relative;
      width: 100%;
      z-index: 5;
      min-height: 880px;
      margin: 114px auto 0;
      box-sizing: border-box;
      height: calc(100vh - 114px);
      background-image: url(../assets/helpcenter/help_img.png);
      background-size: cover; 
      background-position: center;
      background-repeat: no-repeat; 
      .page_cont {
        position: relative;
        z-index: 11;
        width: 90%;
        margin: auto;
        height: 100%;
        max-width: 1440px;
        min-width: 1200px;
        .title {
          position: absolute;
          left: 0;
          width: 800px;
          bottom: 300px;
          color: #fff;
          font-size: 64px;
          font-weight: 600;
          line-height: 64px;
        }
        .text {
          position: absolute;
          left: 0;
          width: 800px;
          bottom: 220px;
          color: #fff;
          font-size: 24px;
          line-height: 30px;
        }
        .btns {
          position: absolute;
          left: 0;
          gap: 20px;
          bottom: 140px;
          display: flex;
          align-items: center;
          .btn {
            color: #fff;
            cursor: pointer;
            font-size: 16px;
            line-height: 16px;
            padding: 12px 18px;
            border-radius: 12px;
            box-sizing: border-box;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            &.btn1 {
              border: none;
              background: linear-gradient(270deg, #9703E5 0%, #D305F6 100%);
            }
          }
        }
      }
    }
    &.help_intro {
      width: 90%;
      max-width: 1440px;
      min-width: 1200px;
      margin: 88px auto 160px;
      .title {
        width: 800px;
        color: #fff;
        font-size: 48px;
        font-weight: 600;
        line-height: 1.32;
        margin-bottom: 20px;
      }
      .text {
        width: 800px;
        font-size: 24px;
        line-height: 30px;
        margin-bottom: 100px;
        color: rgba(255, 255, 255, 0.5);
      }
      .help_list {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        .help_li {
          position: relative;
          width: 580px;
          height: 452px;
          padding: 54px 60px;
          margin-bottom: 60px;
          box-sizing: border-box;
          background: url(../assets/helpcenter/help_bg.png) no-repeat 100%/100%;
          .li_title {
            color: #fff;
            line-height: 1;
            font-size: 40px;
            font-weight: 600;
            margin-bottom: 20px;
          }
          .li_text {
            height: 150px;
            font-size: 20px;
            line-height: 30px;
            color: rgba(255, 255, 255, 0.5);
          }
          .li_desc {
            position: absolute;
            left: 60px;
            bottom: 80px;
            width: 460px;
            gap: 10px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            .li_btn {
              color: #fff;
              cursor: pointer;
              font-size: 16px;
              line-height: 16px;
              padding: 12px 18px;
              border-radius: 8px;
              box-sizing: border-box;
              background: rgba(255, 255, 255, 0.1);
              border: 1px solid rgba(255, 255, 255, 0.1);
            }
          }
        }
      }
    }
  }
}

</style>
