import { createI18n } from 'vue-i18n'
import messages from './index'

// Default to English so US/EU paid traffic doesn't land on a Korean
// homepage. Korean is still respected when the browser explicitly
// asks for it; everything else falls back to English.
let browserlanguage = (
  (navigator.language ? navigator.language : navigator.userLanguage) || 'en'
).toLowerCase();
let language = browserlanguage.split('-')[0];
if (language === 'en' || language === 'ko') {
  language = language;
} else {
  language = 'en';
}
const i18n = createI18n({
  fallbackLocale: 'en',
  globalInjection: true,
  legacy: false,
  locale: localStorage.getItem('lan') || language || 'en',
  messages,
});

export const changeLan = (lan)=>{
  i18n.global.locale = lan
}


export default i18n