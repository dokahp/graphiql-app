import React from 'react';
import { useTranslation } from 'react-i18next';

export default function SwitchLang() {
  // const [lang, setLang] = useState('en');
  const { i18n } = useTranslation();

  const changeLanguageHandler = (language: string) => {
    // setLang(language);
    i18n.changeLanguage(language);
  };

  const toggleLang = () => {
    // const newLang = lang === 'en' ? 'uk' : 'en';
    // changeLanguageHandler(newLang);
  };

  const newSwitchLang = () => {
    const langBeforeChange = i18n.language;
    const langAfterChange = langBeforeChange === 'en' ? 'ru' : 'en';
    localStorage.setItem('graphql_lang', langAfterChange);
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  };

  return (
    <div>
      CURRENT LANG: {i18n.language}{' '}
      <button type="button" onClick={newSwitchLang}>
        SWITCH TO {i18n.language === 'en' ? 'RU' : 'EN'}
      </button>
    </div>
  );
}
