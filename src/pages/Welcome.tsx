import { Box, Button, CircularProgress } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

interface WelcomeProps {
  isAuthorized: boolean | undefined;
}

function Welcome({ isAuthorized }: WelcomeProps) {
  const auth = getAuth();
  const [user, isLoading] = useAuthState(auth);
  const { t } = useTranslation();
  if (isLoading)
    return (
      <main>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          <CircularProgress />
        </Box>
      </main>
    );

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
