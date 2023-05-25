import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
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
