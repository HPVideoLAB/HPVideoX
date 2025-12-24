<template>
  <div class="miner">
    <header>
      <div class="content miner_page">
        <div class="bg"></div>
        <div class="miner_left">
          <div class="text">{{ $t("miners.text1") }}</div>
          <div class="text">{{ $t("miners.text2") }}</div>
          <div class="text">{{ $t("miners.text3") }}</div>
          <div class="miner_btn">
            <div class="btn btn1">{{ $t("miners.btn1") }}</div>
            <div class="btn">{{ $t("miners.btn2") }}</div>
          </div>
        </div>
      </div>
    </header>
    <article>
      <div class="content miner_cont">
        <div class="cont_bg1"></div>
        <div class="cont_bg2"></div>
        <div class="cont_bg3"></div>
        <div class="miner_left"><div class="title">{{ $t("miners.title") }}</div></div>
        <div class="miner_right">
          <div class="right_cont">
            <div class="title">{{ $t("miners.title1") }}</div>
            <div class="text">{{ $t("miners.text1_1") }}</div>
          </div>
          <div class="right_cont">
            <div class="title">{{ $t("miners.title2") }}</div>
            <div class="text">{{ $t("miners.text2_1") }}</div>
          </div>
          <div class="right_cont">
            <div class="title">{{ $t("miners.title3") }}</div>
            <div class="text">{{ $t("miners.text3_1") }}</div>
          </div>
          <div class="right_cont">
            <div class="title">{{ $t("miners.title4") }}</div>
            <div class="text">{{ $t("miners.text4_1") }}</div>
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
    name: 'miner',
    components: {},
    setup() {
      const { t, locale } = useI18n()
      const message = inject( '$message')
      const store = useStore()
      const loading = inject( '$loading')
      let lan = computed(() => store.state.lan)
      const router = useRouter()
      const route = useRoute()
      

      const linkHref = (el) => {
        window.open(`https://www.hpvideo.io/`, '_blank')
      }
      
      onMounted(async () => {
        
      });
      onUnmounted(() => {
        
      });
      return {
        lan,

        
      };
    }
  })
</script>

<style lang="scss" scoped>
.miner {
  width: 100%;
  font-style: normal;
  .content {
    min-width: 1200px;
    width: 100%;
    font-size: 0;
    line-height: 0;
    &.miner_page {
      position: relative;
      width: 90%;
      z-index: 5;
      margin: auto;
      display: flex;
      max-width: 1440px;
      min-width: 1200px;
      height: 880px;
      // height: calc(100vh);
      align-items: center;
      padding: 114px 0 80px;
      box-sizing: border-box;
      .bg {
        position: absolute;
        z-index: 1;
        top: -300px;
        right: -500px;
        width: 1512px;
        height: 1863px;
        background: url(../assets/miner/miner_bg1.png) no-repeat 100%/100%;
      }
      .miner_left {
        width: 600px;
        position: relative;
        z-index: 5;
        .title {
          color: #fff;
          font-size: 40px;
          text-align: left;
          font-weight: 800;
          line-height: 100%;
          letter-spacing: 0%;
          vertical-align: middle;
        }
        .text {
          font-size: 20px;
          font-weight: 400;
          margin-top: 20px;
          line-height: 30px;
          font-family: "Outfit";
          vertical-align: middle;
          color: rgba(255, 255, 255, 0.5);
        }
        .miner_btn {
          gap: 30px;
          display: flex;
          margin-top: 100px;
          align-items: center;
          .btn {
            color: #fff;
            cursor: pointer;
            font-size: 20px;
            line-height: 20px;
            padding: 16px 32px;
            border-radius: 12px;
            background: rgba(255, 255, 255, 0.1);
            &.btn1 {
              background: linear-gradient(270deg, #9703E5 0%, #D305F6 100%);
            }
          }
        }
      }
    }
    &.miner_cont {
      position: relative;
      gap: 40px;
      width: 90%;
      height: 800px;
      z-index: 5;
      margin: auto;
      padding: 80px;
      display: flex;
      flex-wrap: wrap;
      max-width: 1440px;
      min-width: 1200px;
      border-radius: 46px;
      margin-bottom: 180px;
      box-sizing: border-box;
      backdrop-filter: blur(6px);
      justify-content: space-between;
      background: rgba(0, 0, 0, 0.1);
      .cont_bg1 {
        position: absolute;
        top: 0;
        left: 0;
        opacity: .8;
        width: 100%;
        height: 100%;
        background: url(../assets/cont1_bg1.png) no-repeat 100%/100%;
      }
      .cont_bg2 {
        position: absolute;
        left: 0;
        bottom: 0;
        opacity: .8;
        width: 752px;
        height: 582px;
        filter: grayscale(100%);
        background: url(../assets/miner/miner_img.png) no-repeat 100%/100%;
      }
      .cont_bg3 {
        position: absolute;
        left: 0;
        bottom: 0;
        opacity: .8;
        width: 752px;
        height: 582px;
        background: url(../assets/miner/miner_img1.png) no-repeat 100%/100%;
      }
      .miner_left {
        position: relative;
        z-index: 5;
        width: 320px;
        .title {
          color: #fff;
          font-size: 48px;
          font-weight: 600;
          line-height: 56px;
        }
      }
      .miner_right {
        position: relative;
        z-index: 5;
        width: 578px;
        .right_cont {
          padding: 30px;
          background: #000;
          margin-bottom: 17px;
          border-radius: 37px;
          box-sizing: border-box;
          .title {
            width: 100%;
            color: #fff;
            line-height: 1;
            font-size: 36px;
            font-weight: 600;
            font-family: "Monda";
            margin-bottom: 13px;
          }
          .text {
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            font-family: "Outfit";
            color: rgba(255, 255, 255, 0.5);
          }
        }
      }
    }
  }
}

</style>
