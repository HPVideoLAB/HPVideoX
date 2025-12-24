import { createStore } from 'vuex'

let browserlanguage = (
  (navigator.language ? navigator.language : navigator.userLanguage) || "ko"
).toLowerCase();
let language = browserlanguage.split("-")[0]

if ( language == 'en' || language == 'ko') {
  language = language
} else {
  language = 'ko'
}

export default createStore({
  state: {
    lan: localStorage.getItem('lan') || language || 'ko',
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