import { Box, Button } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface WelcomeProps {
  isAuthorized: boolean | undefined;
}

function Welcome({ isAuthorized }: WelcomeProps) {
  const { t } = useTranslation();
  return (
    <main>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <h1>Welcome Page</h1>
        {isAuthorized ? (
          <Button sx={{ m: 2 }} variant="contained" href="/graphql">
            Main Page
          </Button>
        ) : (
          <>
            <Button sx={{ m: 2 }} variant="contained" href="/signup">
              {t('Sign Up')}
            </Button>
            <Button sx={{ m: 2 }} variant="contained" href="signin">
              {t('Sign In')}
            </Button>{' '}
          </>
        )}
      </Box>
    </main>
  );
}

export default Welcome;
