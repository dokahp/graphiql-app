import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';
import { Stack, Typography } from '@mui/material';
import './footer.css';
import { useTranslation } from 'react-i18next';
import rsslogo from '../../assets/rss-logo.svg';

const linkStyles = {
  display: 'flex',
  width: '90px',
  justifyContent: 'space-between',
  alignItems: 'center',
  variant: 'body1',
  target: 'a_blank',
  underline: 'hover',
  margin: '5px 10px',
};

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <Link
        sx={{ order: { xs: 2, sm: 1 }, marginY: { xs: '20px' } }}
        variant="body1"
        target="a_blank"
        href="https://rs.school/react/"
      >
        <img src={rsslogo} width={80} alt="school logo" />
      </Link>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          flexWrap: 'wrap',
          order: { xs: 1, sm: 1 },
        }}
      >
        <Link
          sx={linkStyles}
          href="https://github.com/dokahp"
          target="_blank"
          rel="noopener"
        >
          <GitHubIcon sx={{ margin: '5px' }} />
          <Typography sx={{ marginTop: '3px' }}>{t('Vitaliy')}</Typography>
        </Link>
        <Link
          sx={linkStyles}
          href="https://github.com/galinavikst"
          target="_blank"
          rel="noopener"
        >
          <GitHubIcon sx={{ margin: '5px' }} />
          <Typography sx={{ marginTop: '3px' }}>{t('Halyna')}</Typography>
        </Link>
        <Link
          sx={linkStyles}
          href="https://github.com/ermakovev"
          target="_blank"
          rel="noopener"
        >
          <GitHubIcon sx={{ margin: '5px' }} />
          <Typography sx={{ marginTop: '3px' }}>{t('Eugene')}</Typography>
        </Link>
      </Stack>

      <Typography sx={{ order: { xs: 3, sm: 2 } }} variant="body1">
        © 2023 React
      </Typography>
    </footer>
  );
}
