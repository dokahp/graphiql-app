import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import { useTranslation } from 'react-i18next';

export default function SwitchLang() {
  const [lang, setLang] = useState('en');
  const { i18n } = useTranslation();

  const changeLanguageHandler = (lang: string) => {
    setLang(lang);
    i18n.changeLanguage(lang);
  };

  const toggleLang = () => {
    const newLang = lang === 'en' ? 'uk' : 'en';
    changeLanguageHandler(newLang);
  };

  return <MaterialUISwitch sx={{ m: 1 }} defaultChecked onClick={toggleLang} />;
}

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        content: '"UK"',
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: '"EN"',
      position: 'absolute',
      right: '50%',
      top: '-10%',
      translate: '50% 50%',
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));
