import { createStore } from 'vuex'

// Auto-detect display language. Default is English (was Korean) — paid
// ads from Meta/Google bring US/EU traffic and Korean default was
// reading as a non-English brand they bounce off of.
let browserlanguage = (
  (navigator.language ? navigator.language : navigator.userLanguage) || "en"
).toLowerCase();
let language = browserlanguage.split("-")[0]

if (language === 'en' || language === 'ko') {
  language = language
} else if (language === 'zh' || language === 'ja') {
  // Hint locales for CJK — full localization will follow in Phase 2;
  // until then, fall back to en so paid traffic always sees a complete
  // English page rather than a half-translated experience.
  language = 'en'
} else {
  language = 'en'
}

export default createStore({
  state: {
    lan: localStorage.getItem('lan') || language || 'en',
    path: localStorage.getItem('path') || '/',
    config: null,
    connectWallet: '',
    inviteInfo: {},
    userinfo: {},
  },
  mutations: {
    changeLan(state, data) {
      state.lan = data
    },
    changePath(state, data) {
      state.path = data
    },
    setConfig(state, data) {
      state.config = data
    },
    setConnectWallet(state, data) {
      state.connectWallet = data
    },
    setUserInfo(state, data) {
      state.userinfo = data
    },
    setInviteCode(state, data) {
      state.inviteInfo = data
    }
  }
})