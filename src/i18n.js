import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      choose_language: "Choose your language",
      tip_change_later: "Tip: You can change this later",
      confirm: "Confirm",
      "mentor_name": "Thiru G.Thangavelu ayya",
      "mentor_location": "Agaram Iyarkai Vazhi Velanmai Pannai, Irugur, Coimbatore",
      "inspired_title": "Inspired by a True Mentor",
      "inspired_desc1": "Agira's journey began under a mentor recognized by the Prime Minister for his natural farming work.",
      "inspired_desc2": "His guidance connected us to a dedicated community of natural farmers, ensuring every product is fresh and chemical-free.",
      "eat_pure": "Eat pure,\nlive healthy,\nStay medicine-free.",
      "bridge_gap": "We bridge the gap between you and honest farmers.",
      "back_to_roots": "Back to Nature's Roots",
      "roots_desc": "Experience 100% pure food grown with traditional wisdom (Amirtha Karaisal & Panchagavya, etc). We inspect every farm monthly to promise you a chemical-free, healthy life.",
      "next": "Next"
    },
  },
  ta: {
    translation: {
      choose_language: "உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்",
      tip_change_later: "குறிப்பு: நீங்கள் இதை பின்னர் மாற்றலாம்",
      confirm: "உறுதிப்படுத்துக",
      "mentor_name": "திரு ஜி.தங்கவேலு அய்யா",
      "mentor_location": "அகரம் இயற்கை வழி வேளாண்மை பண்ணை, இருகூர், கோயம்புத்தூர்",
      "inspired_title": "ஒரு உண்மையான வழிகாட்டியால் ஈர்க்கப்பட்டது",
      "inspired_desc1": "இயற்கை விவசாயத்திற்காக பிரதமரால் அங்கீகரிக்கப்பட்ட ஒரு வழிகாட்டியின் கீழ் அகிராவின் பயணம் தொடங்கியது.",
      "inspired_desc2": "அவரது வழிகாட்டுதல் எங்களை அர்ப்பணிப்புள்ள இயற்கை விவசாயிகளுடன் இணைத்தது, ஒவ்வொரு பொருளும் புதியதாகவும் ரசாயனமற்றதாகவும் இருப்பதை உறுதி செய்கிறது.",
      "eat_pure": "தூய்மையாக உண்ணுங்கள்,\nஆரோக்கியமாக வாழுங்கள்,\nமருந்தின்றி இருங்கள்.",
      "bridge_gap": "உங்களுக்கும் நேர்மையான விவசாயிகளுக்கும் இடையிலான இடைவெளியை நாங்கள் குறைக்கிறோம்.",
      "back_to_roots": "இயற்கையின் வேர்களுக்குத் திரும்புவோம்",
      "roots_desc": "பாரம்பரிய ஞானத்துடன் (அமிர்த கரைசால் மற்றும் பஞ்சகவ்யம் போன்றவை) விளைவிக்கப்பட்ட 100% தூய உணவை அனுபவியுங்கள். உங்களுக்கு இரசாயனங்களற்ற, ஆரோக்கியமான வாழ்க்கையை உறுதி செய்வதற்காக, நாங்கள் ஒவ்வொரு பண்ணையையும் மாதந்தோறும் ஆய்வு செய்கிறோம்.",
      "next": "அடுத்து"
    },
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: "v4",
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;