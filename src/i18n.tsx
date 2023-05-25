import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      'Sign Out': 'Sign Out',
      'Sign Up': 'Sign Up',
      'Sign In': 'Sign In',
      'You have successfully registered': 'You have successfully registered',
      'Already have an account?': 'Already have an account?',
      'User with such email already registered':
        'User with such email already registered',
      'Email is required': 'Email is required',
      'Email not valid': 'Email not valid',
      'Password is required': 'Password is required',
      'Minimum eight characters, at least one letter, one number, one special character':
        'Minimum eight characters, at least one letter, one number, one special character',
      'Password confirmation is required': 'Password confirmation is required',
      'Your passwords do no match': 'Your passwords do no match',
    },
  },
  ru: {
    translation: {
      'Sign Out': 'Выйти',
      'Sign Up': 'Регистрация',
      'Sign In': 'Авторизация',
      'You have successfully registered': 'Вы успешно зарегистрированы',
      'Already have an account?': 'У вас уже есть аккаунт?',
      'User with such email already registered':
        'Пользователь с таким емейлом уже зарегистрирован',
      'Email is required': 'Электронная почта обязательна',
      'Email not valid': 'Электронная почта недействительна',
      'Password is required': 'Необходим пароль',
      'Minimum 8 characters, at least one letter, one number, one special character':
        'Минимум 8 символов, по крайней мере, одна буква, одна цифра, один специальный символ',
      'Password confirmation is required': 'Требуется подтверждение пароля',
      'Your passwords do no match': 'Ваши пароли не совпадают',
    },
  },
};

const language = localStorage.getItem('graphql_lang') || 'en';

i18n.use(initReactI18next).init({
  resources,
  lng: language,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
