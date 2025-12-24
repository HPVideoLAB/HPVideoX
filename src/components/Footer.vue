<template>
  <div class="footer">
    <div class="footer_cont">
      <div class="cont_left">
        <img class="footer_logo" src="../assets/footer_logo.png" alt="">
        <div class="footer_link">
          <div class="link_title">{{ $t("footer.title") }}</div>
          <div class="link_meau">
            <p @click="linkHref('https://github.com/HPVideoLAB')">{{ $t("footer.meau1") }}</p>
            <p @click="linkHref1('miners')">{{ $t("footer.meau2") }}</p>
            <p @click="linkHref('https://www.hpvideo.io/HPVIDEO-WhitePaper.pdf')">{{ $t("footer.meau3") }}</p>
            <p @click="linkHref1('faqs')">{{ $t("footer.meau4") }}</p>
            <p>{{ $t("footer.meau5") }}</p>
          </div>
        </div>
      </div>
      <div class="cont_right">
        <div class="right_title">{{ $t("footer.title1") }}</div>
        <div class="right_btn">
          <div class="btn" @click="linkHref('https://www.hpvideo.io/creator')">{{ $t("footer.btn1") }}</div>
          <div class="btn" @click="dialogVisible = true">{{ $t("footer.btn2") }}</div>
        </div>
      </div>
    </div>
    <div class="footer_bottom">
      <div class="bottom_left">
        <span class="icon"></span>
        <p>{{ $t("footer.footer_bottom") }}</p>
      </div>
      <div class="bottom_right">
        <div class="bottom_btn" @click="linkHref('https://x.com/HPVideoAI')">
          <span class="icon icon1"></span> x
        </div>
        <div class="bottom_btn" @click="linkHref('https://t.me/HPVideoAI')">
          <span class="icon icon2"></span> Telegram
        </div>
        <div class="bottom_btn" @click="linkHref('https://medium.com/@HPVideoAI')">
          <span class="icon icon3"></span> Medium
        </div>
      </div>
    </div>
  </div>
  <el-dialog v-model="dialogVisible" class="footer-dialog" align-center width="70%" :lock-scroll="true" :show-close="false">
    <div class="show_model">
      <video 
          ref="videoPlayer"
          class="video-player" 
          loop="loop" 
          muted="muted" 
          controls="controls"
          controlsList="noplaybackrate, nopip"
          src="https://static1.deeplink.cloud/hpvideo_assets/hpvideo_demo.mp4" 
      >
          Your browser does not support video playback
      </video>
    </div>
  </el-dialog>
</template>

<script>
  // @ is an alias to /src
  import { defineComponent, ref, onMounted, computed } from "vue";
  import { useI18n } from "vue-i18n";
  import { useRouter } from 'vue-router'
  import { useStore } from "vuex"
  
  export default defineComponent({
    name: 'footer',
    setup() {
      const router = useRouter()
      // const lan = ref(localStorage.getItem('lan') || 'en')
      const store = useStore()
      let lan = computed(() => store.state.lan)
      const href = computed(() => store.state.path )
      const { locale } = useI18n()
      const dialogVisible = ref(false);
      const linkHref = (el) => {
        window.open(el, '_blank')
      }
      const linkHref1 = (el) => {
        router.push({ path: el })
        localStorage.setItem('path', el)
        store.commit('changePath', el)
      }
      onMounted(() => {
        
      });
      return {
        lan,
        href,
        linkHref,
        linkHref1,
        dialogVisible,
      };
    }
  })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer {
  width: 100%;
  z-index: 100;
  margin-top: 100px;
  overflow: hidden;
  min-width: 1200px;
  position: relative;
  border-bottom: 8px solid #9903E6;
  .footer_cont {
    width: 90%;
    margin: auto;
    display: flex;
    min-width: 1200px;
    max-width: 1440px;
    align-items: center;
    padding-bottom: 50px;
    justify-content: space-between;
    border-bottom: 1px solid rgba(255, 255, 255, 0.16);
    .cont_left {
      .footer_logo {
        width: 140px;
        height: 91px;
        margin-bottom: 20px;
      }
      .footer_link {
        .link_title {
          font-size: 14px;
          line-height: 20px;
          margin-bottom: 8px;
          color: rgba(255, 255, 255, 0.5);
        }
        .link_meau {
          gap: 40px;
          display: flex;
          color: #fff;
          font-size: 20px;
          align-items: center;
          p {
            cursor: pointer;
            &:hover {
              color: #9903E6;
            }
          }
        }
      }
    }
    .cont_right {
      .right_title {
        color: #fff;
        font-size: 24px;
        font-weight: 600;
        line-height: 36px;
        margin-bottom: 24px;
      }
      .right_btn {
        gap: 12px;
        display: flex;
        .btn {
          color: #fff;
          font-size: 16px;
          cursor: pointer;
          padding: 12px 22px;
          border-radius: 17px;
          box-sizing: border-box;
          transition: all .3s ease;
          border: 1px solid rgba(255, 255, 255, 0.24);
          &:hover {
            background: #9903E6;
          }
        }
      }
    }
  }
  .footer_bottom {
    width: 90%;
    margin: auto;
    display: flex;
    padding: 20px 0;
    min-width: 1200px;
    max-width: 1440px;
    align-items: center;
    justify-content: space-between;
    .bottom_left {
      display: flex;
      color: #fff;
      font-size: 14px;
      line-height: 20px;
      align-items: center;
      .icon {
        width: 20px;
        height: 20px;
        margin-right: 8px;
        display: inline-block;
        background: url(../assets/bottom_icon1.png) no-repeat 100%/100%;
      }
    }
    .bottom_right {
      gap: 12px;
      display: flex;
      align-items: center;
      .bottom_btn {
        display: flex;
        color: #fff;
        font-size: 14px;
        cursor: pointer;
        line-height: 20px;
        padding: 10px 16px;
        border-radius: 13px;
        align-items: center;
        box-sizing: border-box;
        transition: all .3s ease;
        border: 1px solid rgba(255, 255, 255, 0.24);
        &:hover {
          background: #9903E6;
        }
        .icon {
          display: inline-block;
          width: 18px;
          height: 18px;
          margin-right: 6px;
          &.icon1 {
            background: url(../assets/bottom_icon2.png) no-repeat 100%/100%;
          }
          &.icon2 {
            background: url(../assets/bottom_icon3.png) no-repeat 100%/100%;
          }
          &.icon3 {
            width: 20x;
            height: 12px;
            background: url(../assets/bottom_icon4.png) no-repeat 100%/100%;
          }
        }
      }
    }
  }
}


.show_model {
  width: 100%;
  display: flex;
  justify-content: space-between;
  .video-player {
    width: 100%;
    height: 400px;
    // background: url(../assets/dialog_img.png) no-repeat 100%/100%;
  }
}
</style>

<style>
.footer-dialog {
  max-width: 900px !important;
}
</style>
