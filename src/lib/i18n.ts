import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      latestNews: 'Latest News',
      loading: 'Loading...',
      errorLoading: 'Error loading news.',
      contactUs: 'Contact Us',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send',
      selectCategory: 'Select Category',
      newsWebsite: 'FastNews',
      footerCopyright: 'FastNews. All rights reserved.',
      feedback: 'Feedback',
      feedbackPlaceholder: 'Your feedback...',
      rating: 'Rating',
      // ...add more keys as needed
    },
  },
  hi: {
    translation: {
      latestNews: 'ताज़ा खबर',
      loading: 'लोड हो रहा है...',
      errorLoading: 'समाचार लोड करने में त्रुटि।',
      contactUs: 'संपर्क करें',
      name: 'नाम',
      email: 'ईमेल',
      message: 'संदेश',
      send: 'भेजें',
      selectCategory: 'श्रेणी चुनें',
      newsWebsite: 'FastNews',
      footerCopyright: 'FastNews। सर्वाधिकार सुरक्षित।',
      feedback: 'प्रतिक्रिया',
      feedbackPlaceholder: 'आपकी प्रतिक्रिया...',
      rating: 'रेटिंग',
    },
  },
  pa: {
    translation: {
      latestNews: 'ਤਾਜ਼ਾ ਖ਼ਬਰਾਂ',
      loading: 'ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ...',
      errorLoading: 'ਖ਼ਬਰਾਂ ਲੋਡ ਕਰਨ ਵਿੱਚ ਗਲਤੀ।',
      contactUs: 'ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ',
      name: 'ਨਾਮ',
      email: 'ਈਮੇਲ',
      message: 'ਸੁਨੇਹਾ',
      send: 'ਭੇਜੋ',
      selectCategory: 'ਸ਼੍ਰੇਣੀ ਚੁਣੋ',
      newsWebsite: 'FastNews',
      footerCopyright: 'FastNews। ਸਾਰੇ ਹੱਕ ਰਾਖਵੇਂ ਹਨ।',
      feedback: 'ਫੀਡਬੈਕ',
      feedbackPlaceholder: 'ਤੁਹਾਡਾ ਫੀਡਬੈਕ...',
      rating: 'ਰੇਟਿੰਗ',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
