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
      Docs: 'Docs',
      'A GraphQL schema provides a root type for each kind of operation.':
        'A GraphQL schema provides a root type for each kind of operation.',
      'The project was developed as part of the best':
        'The project was developed as part of the best',
      'course offered by': 'course offered by',
      'It showcases the practical application of React concepts and skills':
        'It showcases the practical application of React concepts and skills',
      'learned during the course.': 'learned during the course.',
      'GraphQL playground': 'GraphQL playground',
      'Vitaliy Dreko': 'Vitaliy Dreko',
      'Halyna Stepanenko': 'Halyna Stepanenko',
      'Evgeny Ermakov': 'Evgeny Ermakov',
      'Task Description:': 'Task Description:',
      'The task involved creating a playground for making GraphQL query requests to the countries API provided by github.com/trevorblades/countries. The application allows users to explore and retrieve country data using GraphQL queries. Authentication and registration functionalities were implemented using Firebase for secure access to the playground.':
        'The task involved creating a playground for making GraphQL query requests to the countries API provided by github.com/trevorblades/countries. The application allows users to explore and retrieve country data using GraphQL queries. Authentication and registration functionalities were implemented using Firebase for secure access to the playground.',
      'The application consists of authentication and registration pages, a welcome page, and a query editor page. Seamless navigation between pages, localization support, and the utilization of the latest React technologies and external libraries enhance usability and ensure a modern user experience.':
        'The application consists of authentication and registration pages, a welcome page, and a query editor page. Seamless navigation between pages, localization support, and the utilization of the latest React technologies and external libraries enhance usability and ensure a modern user experience.',
      'The development team prioritized delivering a high-quality application, focusing on user-friendliness, adherence to best practices, and meeting project requirements. Their work demonstrates their dedication and proficiency in React application development.':
        'The development team prioritized delivering a high-quality application, focusing on user-friendliness, adherence to best practices, and meeting project requirements. Their work demonstrates their dedication and proficiency in React application development.',
      'Sincerely,': 'Sincerely,',
      'The Development Team': 'The Development Team',
      'Hello, we are\n': 'Hello, we are\n',
      'Students of RSS': 'Students of RSS',
      'Web Developers': 'Web Developers',
      'Web Disigners': 'Web Disigners',
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
      Docs: 'Документация',
      'A GraphQL schema provides a root type for each kind of operation.':
        'Схема GraphQL предоставляет корневой тип для каждого вида операций',
      'The project was developed as part of the best':
        'Проект был разработан в рамках лучшего',
      'course offered by': 'курса предлагаемого',
      'It showcases the practical application of React concepts and skills':
        'Он демонстрирует практическое применение концепций и навыков React',
      'learned during the course.': 'полученных в ходе курса.',
      'GraphQL playground': 'GraphQL песочница',
      'Vitaliy Dreko': 'Виталий Дреко',
      'Halyna Stepanenko': 'Галина Степаненко',
      'Evgeny Ermakov': 'Евгений Ермаков',
      'Task Description:': 'Описание задания:',
      'The task involved creating a playground for making GraphQL query requests to the countries API provided by github.com/trevorblades/countries. The application allows users to explore and retrieve country data using GraphQL queries. Authentication and registration functionalities were implemented using Firebase for secure access to the playground.':
        'Задача заключалась в создании игровой площадки для выполнения запросов запросов GraphQL к API стран, предоставленному github.com/trevorblades/countries. Приложение позволяет пользователям исследовать и извлекать данные о стране с помощью запросов GraphQL. Функции аутентификации и регистрации были реализованы с использованием Firebase для безопасного доступа к песочнице',
      'The application consists of authentication and registration pages, a welcome page, and a query editor page. Seamless navigation between pages, localization support, and the utilization of the latest React technologies and external libraries enhance usability and ensure a modern user experience.':
        'Приложение состоит из страниц аутентификации и регистрации, страницы приветствия и страницы редактора запросов. Бесшовная навигация между страницами, поддержка локализации и использование новейших технологий React и внешних библиотек повышают удобство использования и обеспечивают современный пользовательский опыт',
      'The development team prioritized delivering a high-quality application, focusing on user-friendliness, adherence to best practices, and meeting project requirements. Their work demonstrates their dedication and proficiency in React application development.':
        'Команда разработчиков уделяла первостепенное внимание созданию высококачественного приложения, уделяя особое внимание удобству использования, следованию передовым методам и требованиям проекта. Их работа демонстрирует их самоотверженность и мастерство в разработке приложений React',
      'Sincerely,': 'С уважением,',
      'The Development Team': 'Команда разработки',
      'Hello, we are\n': 'Привет, мы\n',
      'Students of RSS': 'Студенты RSS',
      'Web Developers': 'Веб Разработчики',
      'Web Disigners': 'Веб Дизайнеры',
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
