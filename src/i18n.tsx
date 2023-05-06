import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      Project: 'Project',
      Course: 'Course',
      Developers: 'Developers',
      'Sign Out': 'Sign Out',
      'Sign Up': 'Sign Up',
      'Sign In': 'Sign In',
    },
  },
  uk: {
    translation: {
      Project: 'Проект',
      Course: 'Курс',
      Developers: 'Розробники',
      'Sign Out': 'Вийти',
      'Sign Up': 'Реєстрація',
      'Sign In': 'Увійти',
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en', // language to use
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
