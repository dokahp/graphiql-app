import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

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
        <Button variant="contained" href="/" sx={{ m: 3 }}>
          {t('Return to Home')}
        </Button>
      </Box>
    </main>
  );
}

export default NotFound;
