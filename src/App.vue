<template>
  <div class="top_fixed">
    <Meau></Meau>
  </div>
  <div class="home_cont">
    <router-view/>
  </div>
  <Footer></Footer>
  <el-backtop :right="50" :bottom="100" />
</template>

<script>
  // @ is an alias to /src
  import { defineComponent, ref } from "vue";
  import Meau from "@/components/Meau.vue";
  import Footer from "@/components/Footer.vue";
  export default defineComponent({
    name: 'App',
    components: {
      Meau,
      Footer
    }
  })
</script>

<style lang="scss">
@font-face {
  font-family: "Outfit";
  src: local("Hellix-Regular"), url('assets/fonts/outfit/Outfit-Regular.ttf') format('truetype');
  font-display: fallback;
}

@font-face {
  font-family: "Monda";
  src: local("Hellix-Regular"), url('assets/fonts/monda/Monda-Regular.ttf') format('truetype');
  font-display: fallback;
}

#app {
  width: 100%;
  overflow: hidden;
  min-width: 1200px;
  background: #000000; 
  font-family: "Outfit";
}
body, p, div, span, li {
  margin: 0;
}

.top_fixed {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}
.home_cont {
  width: 100%;
  min-height: calc(100vh - 413px);
}


.animation_hide {
  visibility: hidden;
}
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translate3d(0,100%,0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translate3d(0,-100%,0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translate3d(-100%,0,0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translate3d(100%,0,0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
@keyframes amplify {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
.fadeInUp {
  animation-name: fadeInUp;
  animation-duration: 1.5s;
}
.fadeInDown {
  animation-name: fadeInDown;
  animation-duration: 1.5s;
}
.fadeInLeft {
  animation-name: fadeInLeft;
  animation-duration: 1.5s;
}
.fadeInRight {
  animation-name: fadeInRight;
  animation-duration: 1.5s;
}
.amplify {
  animation-name: amplify;
  animation-duration: 2s;
}
.delay100 {
  animation-delay: 100ms; 
}
.delay200 {
  animation-delay: 200ms; 
}
.delay300 {
  animation-delay: 300ms; 
}
.delay400 {
  animation-delay: 400ms; 
}
.delay500 {
  animation-delay: 500ms; 
}
.delay600 {
  animation-delay: 600ms; 
}
.delay700 {
  animation-delay: 700ms; 
}
.delay800 {
  animation-delay: 800ms; 
}
.delay900 {
  animation-delay: 900ms; 
}

</style>



<style>

@media screen and (max-width: 1200px) {
  .dialog-content {
    padding: 0 20px 20px;
  }
  .dialog-footer .cancel, .dialog-footer .confirm{
    padding: 10px 50px;
  }
}

:root {
  --el-bg-color: #2d2d2d !important;
  --el-text-color-primary: #fff !important;
  --el-fill-color-blank: #2d2d2d !important;
  --el-color-primary: #9903E6 !important;
  --el-fill-color: rgba(255, 255, 255, 0.1) !important;
  --el-text-color-secondary: #fff !important;
  --el-text-color-regular: #f0f0f0 !important;
  --el-fill-color-light: #4d4d4d !important;
  --el-bg-color-overlay: #2d2d2d !important;
}
</style>