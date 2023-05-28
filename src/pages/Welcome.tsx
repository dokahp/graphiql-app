import { Box } from '@mui/material';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import Banner from '../components/Banner/Banner';

interface WelcomeProps {
  isAuthorized: boolean | undefined;
}

function Welcome({ isAuthorized }: WelcomeProps) {
  const auth = getAuth();
  const [, isLoading] = useAuthState(auth);

  return (
    <main>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        sx={{ background: 'rgb(245, 247, 248)' }}
      >
        {!isLoading && <Banner isAuthorized={isAuthorized} />}
      </Box>
    </main>
  );
}

export default Welcome;
