import { Button } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

function Welcome() {
  const { t } = useTranslation();

  return (
    <main>
      <h1>Welcome Page</h1>
      <Button sx={{ m: 2 }} variant="contained" href="/signup">
        {t('Sign Up')}
      </Button>
      <Button sx={{ m: 2 }} variant="contained" href="signin">
        {t('Sign In')}
      </Button>
    </main>
  );
}

export default Welcome;
