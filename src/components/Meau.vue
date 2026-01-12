<template>
  <div class="meau">
    <div class="content">
      <div class="logo" @click="linkHref('/')"><img src="../assets/logo.png" alt=""></div>
      <div v-if="route.path == '/learn' || route.path == '/helpcenter'" class="text_center">
        <span v-if="route.path == '/learn'">{{ $t("meau.nav6") }}</span>
        <span v-if="route.path == '/helpcenter'">{{ $t("meau.nav7") }}</span>
      </div>
      <div class="meau" v-else>
        <div class="meau_li" :class="{'active': route.path == '/models'}" @click="linkHref('/models')">{{ $t("meau.nav1") }}</div>
        <div class="meau_li" :class="{'active': route.path == '/miners'}" @click="linkHref('/miners')">{{ $t("meau.nav2") }}</div>
        <!-- <div class="meau_li" :class="{'active': route.path == '/learn'}" @click="linkHref('/learn')">{{ $t("meau.nav3") }}</div> -->
        <div class="meau_li" @click="linkHref('/creator')">{{ $t("meau.nav4") }}</div>
        <div class="meau_li" :class="{'active': route.path == '/blog'}" @click="linkHref('/blog')">{{ $t("meau.nav5") }}</div>
      </div>
      <div class="search_cont" v-if="route.path == '/learn' || route.path == '/helpcenter'">
        <div class="search" v-if="!search_show" @click="search_show = true"></div>
        <div class="search_content" v-else>
          <div class="search_icon" @click="search_show = false"></div>
          <div class="search_input"><input type="text" placeholder="Search Documentations etc"></div>
          <div class="search_btn">Submit</div>
        </div>
        <div class="search_btn" v-if="route.path == '/learn'" @click="linkHref('/helpcenter')">{{ $t("meau.nav7") }}</div>
        <div class="search_btn" v-if="route.path == '/helpcenter'" @click="linkHref('/learn')">{{ $t("meau.nav3") }}</div>
        <div class="search_btn btn" @click="linkHref('/creator')">{{ $t("meau.nav9") }}</div>
      </div>
      <div class="connect" v-else>
        <!-- <div class="connect_wallet">Contact</div> -->
        <a class="connect_wallet" href="mailto:creator@hpvideo.io">Contact</a>
        <div class="connect_icon" @click="jump('https://github.com/HPVideoLAB')">
          <div class="icon github"></div>
        </div>
        <!-- <div class="connect_icon" @click="jump()">
          <div class="icon word"></div>
        </div> -->
        <div class="connect_lan">
          <div class="country" @click="showLan = !showLan">
            <span v-if="lan == 'zh'" class="icon zh"></span> 
            <span v-if="lan == 'en'" class="icon en"></span> 
            <span v-if="lan == 'ko'" class="icon ko"></span> 
            <span v-if="lan == 'ja'" class="icon jp"></span> 
            <span v-if="lan == 'fr'" class="icon fr"></span> 
            {{ text }}
          </div>
          <div class="lan_list" v-if="showLan">
            <div class="lan_li" @click="handleCommand('en')"><span class="country_icon en"></span> English</div>
            <div class="lan_li" @click="handleCommand('zh')"><span class="country_icon zh"></span> 简体中文</div>
            <div class="lan_li" @click="handleCommand('ko')"><span class="country_icon kr"></span> 한국어</div>
            <div class="lan_li" @click="handleCommand('ja')"><span class="country_icon jp"></span> 日本語</div>
            <div class="lan_li" @click="handleCommand('fr')"><span class="country_icon fr"></span> Français</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import { defineComponent, ref, onMounted ,computed, watch} from "vue";
  import { useI18n } from "vue-i18n";
  import { useRoute, useRouter } from 'vue-router'
  import { useStore } from "vuex"
  export default defineComponent({
    name: 'PreSale',
    components: {},
    setup() {
      const { t, locale } = useI18n()
      const router = useRouter()
      const route = useRoute()
      const store = useStore()
      let lan = computed(() => store.state.lan)
      const text = ref('EN')
      const lanObj = {
        'en': 'EN',
        'ko': 'KR',
        'zh': 'CN',
        'ja': 'JP',
        'ru': 'RU',
        'vn': 'VN',
        'fr': 'FR',
        'de': 'DE',
        'tr': 'TR'
      }
      const showLan = ref(false)
      const handleCommand = (command) => {
        text.value = lanObj[command]
        locale.value = command
        localStorage.setItem('lan', command)
        store.commit('changeLan', command)
        showLan.value = false
      }
      const linkHref = (el) => {
        if (el == "/creator") {
          window.open('https://www.hpvideo.io/creator/', '_blank')
        } else {
          router.push({ path: el })
          localStorage.setItem('path', el)
          store.commit('changePath', el)
          console.log(el, 'el');
        }
      }
      const jump = (el) => {
        window.open(el, '_blank')
      }
      const search_show = ref(false)
      onMounted(() => {
        text.value = lanObj[lan.value]
      });
      watch(lan, (newValue) => {
        
      })
      return {
        lan,
        text,
        jump,
        route,
        showLan,
        linkHref,
        search_show,
        handleCommand,
      };
    }
  })
</script>

<style scoped lang="scss">
.meau {
  width: 100%;
  height: 114px;
  display: flex;
  font-style: normal;
  align-items: center;
  background: hsla(0,0%,0%, 0);
  backdrop-filter: blur(6px);
  .content {
    margin: auto;
    width: 1440px;
    min-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      width: 213px;
      img {
        width: 213px;
      }
    }
    .text_center {
      flex: 1;
      color: #fff;
      font-size: 16px;
      line-height: 20px;
      padding: 12px 18px;
    }
    .meau {
      flex: 1;
      display: flex;
      margin: 0 30px;
      align-items: center;
      .meau_li {
        cursor: pointer;
        font-size: 16px;
        line-height: 20px;
        padding: 12px 18px;
        color: rgba(255, 255, 255, 0.5);
        &:hover {
          color: #fff;
        }
        &.active {
          color: #fff;
        }
      }
    }
    .search_cont {
      display: flex;
      padding: 10px;
      align-items: center;
      border-radius: 21px;
      box-sizing: border-box;
      transition: all .3s ease;
      background: rgba(255, 255, 255, 0.05);
      .search {
        width: 38px;
        height: 38px;
        cursor: pointer;
        transition: all .3s ease;
        background: url(../assets/helpcenter/search.png) no-repeat 100%/100%;
      }
      .search_content {
        padding: 5px;
        display: flex;
        align-items: center;
        border-radius: 10px;
        transition: all .3s ease;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        .search_icon {
          width: 16px;
          height: 16px;
          cursor: pointer;
          background: url(../assets/helpcenter/search.png) no-repeat 100%/100%;
        }
        .search_input {
          width: 150px;
          height: 18px;
          padding: 2px 10px;
          input {
            font-size: 14px;
            color: #fff;
            width: 100%;
            border: none;
            background: none;
            outline: none;
            box-shadow: none;
            vertical-align: super;
          }
          input:focus {
            outline: none;
            box-shadow: none;
            border: none;
          }
          input::placeholder {
            color: rgba(255, 255, 255, 0.3);
          }
        }
        .search_btn {
          color: #fff;
          font-size: 16px;
          padding: 5px 10px;
          line-height: 16px;
          border-radius: 6px;
          background: #B505EE;
        }
      }
      .search_btn {
        margin: 0 8px;
        cursor: pointer;
        font-size: 18px;
        line-height: 18px;
        padding: 12px 18px;
        border-radius: 12px;
        box-sizing: border-box;
        color: rgba(255, 255, 255, 0.5);
        &:hover {
          color: #fff;
        }
        &.btn {
          color: #fff;
          background: linear-gradient(270deg, #9703E5 0%, #D305F6 100%);
        }
      }
    }
    .connect {
      padding: 10px;
      display: flex;
      border-radius: 21px;
      align-items: center;
      box-sizing: border-box;
      background: rgba(255, 255, 255, 0.05);
      .connect_wallet {
        color: #fff;
        font-size: 16px;
        cursor: pointer;
        line-height: 16px;
        padding: 12px 18px;
        margin-right: 35px;
        border-radius: 12px;
        text-decoration: none;
        background: linear-gradient(90deg, #9703E5 0%, #D305F6 100%);
      }
      .connect_icon {
        padding: 10px;
        margin: 0 8px;
        color: #fff;
        cursor: pointer;
        border-radius: 12px;
        box-sizing: border-box;
        background: rgba(255, 255, 255, 0.1);
        .icon {
          width: 24px;
          height: 24px;
          &.github {
            background: url(../assets/github.png) no-repeat 100%/100%;
          }
          &.word {
            background: url(../assets/word.png) no-repeat 100%/100%;
          }
          
        }
      }
      .connect_lan {
        position: relative;
        padding: 13px;
        color: #fff;
        display: flex;
        cursor: pointer;
        margin-left: 35px;
        align-items: center;
        border-radius: 12px;
        box-sizing: border-box;
        transition: all .5s ease;
        background: rgba(255, 255, 255, 0.1);
        .country {
          display: flex;
          align-items: center;
          .icon {
            display: inline-block;
            width: 18px;
            height: 18px;
            margin-right: 10px;
            &.en {
              background: url(../assets/image/country_en.png) no-repeat 100%/100%;
            }
            &.zh {
              background: url(../assets/image/country_zh.png) no-repeat 100%/100%;
            }
            &.ko {
              background: url(../assets/image/country_ko.png) no-repeat 100%/100%;
            }
            &.jp {
              background: url(../assets/image/country_jp.png) no-repeat 100%/100%;
            }
            &.fr {
              background: url(../assets/image/fr.png) no-repeat 100%/100%;
            }
          }
        }
        .lan_list {
          position: absolute;
          top: 50px;
          right: -25px;
          width: 128px;
          padding: 10px 0;
          border-radius: 12px;
          transition: all .5s ease;
          background: rgba(0, 0, 0, .8);
          .lan_li {
            display: flex;
            width: 128px;
            font-size: 16px;
            line-height: 16px;
            padding: 4px 12px;
            align-items: center;
            color: rgba(255, 255, 255, 0.5);
            &:hover {
              color: #fff;
            }
            .country_icon {
              display: inline-block;
              width: 32px;
              height: 20px;
              margin-right: 10px;
              &.zh {
                background: url(../assets/image/zh.png) no-repeat 100%/100%;
              }
              &.en {
                background: url(../assets/image/en.png) no-repeat 100%/100%;
              }
              &.kr {
                background: url(../assets/image/kr.png) no-repeat 100%/100%;
              }
              &.jp {
                background: url(../assets/image/jp.png) no-repeat 100%/100%;
              }
              &.fr {
                background: url(../assets/image/fr.png) no-repeat 100%/100%;
              }
            }
          }
        }
      }
    }
  }
}
</style>