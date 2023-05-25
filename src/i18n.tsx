import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      'Log Out': 'Log Out',
      'Sign Up': 'Sign Up',
      'Sign In': 'Sign In',
      Email: 'Email',
      Password: 'Password',
      'Password Confirmation': 'Password Confirmation',
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
      'You have successfully logged in': 'You have successfully logged in',
      "Don't have an account?": `Don't have an account?`,
      'Email or password incorrect': 'Email or password incorrect',
      Login: 'Login',
      'You have successfully logout': 'You have successfully logout',
      'Something went wrong': 'Something went wrong',
      'Open settings': 'Open settings',
      Vitaliy: 'Vitaliy',
      Halyna: 'Halyna',
      Eugene: 'Eugene',
      'Hide Documentation Explorer': 'Hide Documentation Explorer',
      'Show Documentation Explorer': 'Show Documentation Explorer',
      'Hide History': 'Hide History',
      'Show History': 'Show History',
      'there was an error': 'there was an error',
      'Lazy loading Documentation...': 'Lazy loading Documentation...',
      History: 'History',
      'Open Short Keys Dialog': 'Open Short Keys Dialog',
      'Oops!': 'Oops!',
      'Page not found!': 'Page not found!',
      'Return to Home': 'Return to Home',
      'Request successfully copied to clipboard':
        'Request successfully copied to clipboard',
      'Query successfully prettified': 'Query successfully prettified',
      'Execute query': 'Execute query',
      'Prettify query': 'Prettify query',
      'Copy query': 'Copy query',
      Variables: 'Variables',
      'Show/Hide Variable Editor': 'Show/Hide Variable Editor',
    },
  },
  ru: {
    translation: {
      'Log Out': 'Выйти',
      'Sign Up': 'Регистрация',
      'Sign In': 'Авторизация',
      Email: 'Электронная почта',
      Password: 'Пароль',
      'Password Confirmation': 'Подтверждение пароля',
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
      'You have successfully logged in': 'Вы успешно вошли в систему',
      "Don't have an account?": 'У вас нет учетной записи?',
      'Email or password incorrect': 'Электронная почта или пароль неверны',
      Login: 'Войти',
      'You have successfully logout': 'Вы успешно вышли из системы',
      'Something went wrong': 'Что-то пошло не так',
      'Open settings': 'Открыть настройки',
      Vitaliy: 'Виталий',
      Halyna: 'Галина',
      Eugene: 'Евгений',
      'Hide Documentation Explorer': 'Скрыть Документацию',
      'Show Documentation Explorer': 'Показать Документацию',
      'Hide History': 'Скрыть Историю',
      'Show History': 'Показать Историю',
      'there was an error': 'Произошла ошибка',
      'Lazy loading Documentation...': 'Ленивая загрузка документации...',
      History: 'История',
      'Open Short Keys Dialog': 'Открыть окно горячих клавиш',
      'Oops!': 'Упс',
      'Page not found!': 'Страница не найдена!',
      'Return to Home': 'Вернуться на главную',
      'Request successfully copied to clipboard':
        'Запрос успешно скопирован в буфер обмена',
      'Query successfully prettified': 'Запрос успешно отформатирован',
      'Execute query': 'Выполнить запрос',
      'Prettify query': 'Отформатировать запрос',
      'Copy query': 'Копировать запрос',
      Variables: 'Переменные',
      'Show/Hide Variable Editor': 'Показать/скрыть редактор переменных',
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
