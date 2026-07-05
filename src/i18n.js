import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      choose_language: "Choose your language",
      tip_change_later: "Tip: You can change this later",
      confirm: "Confirm",
    },
  },
  ta: {
    translation: {
      choose_language: "உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்",
      tip_change_later: "குறிப்பு: நீங்கள் இதை பின்னர் மாற்றலாம்",
      confirm: "உறுதிப்படுத்துக",
    },
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: "v4",
  resources,
  lng: "en",
  fallbackLng: "ta",
  interpolation: { escapeValue: false },
});

export default i18next;