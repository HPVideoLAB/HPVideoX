<template>
  <div class="page404">
    <div class="clip"></div>
    <div class="page_cont">
      <div class="img404"><img src="../assets/page_404.png" alt=""></div>
      <div class="cont">
        <div class="title">Page Not Found</div>
        <div class="text">Sorry, we couldn’t find the page you ‘re looking for</div>
        <div class="btn" @click="link_index"><span class="icon">→</span> Back to home</div>
      </div>
    </div>
  </div>
</template>
<script>
  // @ is an alias to /src
  import { defineComponent, ref, computed, watch } from "vue"
  import { useRoute, useRouter } from 'vue-router'
  import { useI18n } from "vue-i18n";
  export default defineComponent({
    name: 'page404',
    setup() {
      const { t, locale } = useI18n();
      const router = useRouter()
      const link_index = () => {
        router.push({ path: '/' })
      }
      return {
        link_index
      };
    }
  })

</script>

<style lang="scss" scoped>
.page404 {
  position: relative;
  width: 100%;
  display: flex;
  color: #fff;
  min-height: 700px;
  min-width: 1200px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - 460px);
  margin-bottom: 100px;
  .clip {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 60%;
    background: rgba(152, 56, 217, 0.25);
    clip-path: polygon(100% 0, 100% 100%, 0 100%);
  }
  .img404 {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 700px;
    img {
      width: 100%;
    }
  }
  .page_cont {
    position: relative;
    width: 90%;
    max-width: 1440px;
    min-width: 1200px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .cont {
      width: 500px;
      .title {
        color: #fff;
        font-size: 64px;
        font-weight: 600;
        margin-bottom: 20px;
      }
      .text {
        font-size: 24px;
        font-weight: 400;
        line-height: 30px;
        margin-bottom: 20px;
        font-family: "Outfit";
        color: rgba(255, 255, 255, 0.5);
      }
      .btn {
        display: inline-flex;
        cursor: pointer;
        color: #CA7BFF;
        padding: 18px 30px;
        border-radius: 18px;
        align-items: center;
        background: rgba(202, 123, 255, 0.1);
        .icon {
          margin-right: 10px;
          display: inline-block;
          transform: rotate(180deg)
        }
      }
    }
  }
}
</style>
