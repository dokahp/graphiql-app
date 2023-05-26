import React from 'react';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import { useTranslation } from 'react-i18next';
import RuLangIcon from '../LangSwitchIcons/RuLangIcon';
import EnLangIcon from '../LangSwitchIcons/EnLangIcon';

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
      '& .MuiSwitch-thumb:before': {},
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor:
          theme.palette.mode === 'dark'
            ? '#8796A5'
            : theme.palette.primary.light,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    width: 32,
    height: 32,
    '&:before': {
      position: 'absolute',
      right: '50%',
      top: '-10%',
      translate: '50% 50%',
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? '#8796A5' : theme.palette.primary.light,
    borderRadius: 20 / 2,
  },
}));

export default function SwitchLang() {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const newSwitchLang = () => {
    const langBeforeChange = i18n.language;
    const langAfterChange = langBeforeChange === 'en' ? 'ru' : 'en';
    localStorage.setItem('graphql_lang', langAfterChange);
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  };

  return (
    <MaterialUISwitch
      icon={<RuLangIcon />}
      checkedIcon={<EnLangIcon />}
      sx={{ m: 1, alignSelf: 'center' }}
      checked={lang === 'en'}
      onClick={newSwitchLang}
    />
  );
}
