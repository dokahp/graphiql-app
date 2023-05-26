import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

function NotFound() {
  const { t } = useTranslation();
  return (
    <main>
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        minHeight="100vh"
      >
        <Typography variant="h1" sx={{ color: '#ff5792', fontWeight: 'bold' }}>
          {t('Oops!')}
        </Typography>
        <Typography
          variant="h3"
          sx={{ color: '#fa8900', textAlign: 'center', m: 2 }}
        >
          {t('Page not found!')}
        </Typography>
        <NavLink to="/">
          <Button variant="contained" sx={{ m: 3 }}>
            {t('Return to Home')}
          </Button>
        </NavLink>
      </Box>
    </main>
  );
}

export default NotFound;
