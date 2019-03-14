import i18next from 'i18next';
import en from './locales/en.json';
import ch from './locales/ch.json';

i18next.init({
  lng: 'ch',
  debug: false,
  resources: {
    en: {
      translation: en
    },
    ch: {
      translation: ch
    }
  },
  fallbackLng: ["ch", "en"]
}, function (err, t) {
  // init set content
  if (err) {
    console.log('i18n init', t, err);
  }
});

export default i18next;

