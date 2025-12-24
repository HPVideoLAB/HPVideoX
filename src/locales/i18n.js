import { createI18n } from 'vue-i18n' 
import messages from './index'
let browserlanguage = (
  (navigator.language ? navigator.language : navigator.userLanguage) || "ko"
).toLowerCase();
let language = browserlanguage.split("-")[0]
if ( language == 'en'|| language == 'ko') {
  language = language
} else {
  language = 'ko'
}
console.log(language, 'language');
const i18n = createI18n({
  fallbackLocale: 'ko',
  globalInjection: true,
  legacy: false, // you must specify 'legacy: false' option
  locale: localStorage.getItem('lan') || language || "ko",
  messages
});

export const changeLan = (lan)=>{
  i18n.global.locale = lan
}


export default i18n