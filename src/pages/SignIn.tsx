import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Navigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm/LoginForm';

function SignIn() {
  const [isLogging, setLogging] = useState(false);
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLogging(() => true);
    }
  });

  if (isLogging) {
    return <Navigate to="/graphql" />;
  }

  return (
    <main>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Box
          bgcolor="#fff"
          maxWidth="420px"
          boxShadow="6"
          borderRadius="6px"
          margin="5px"
          sx={{ paddingX: { xs: '20px', sm: '30px', xl: '40px' } }}
          paddingY="40px"
        >
          <LoginForm />
        </Box>
      </Box>
    </main>
  );
}

export default SignIn;
