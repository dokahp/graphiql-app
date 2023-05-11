import React from 'react';
import Box from '@mui/material/Box';
import LoginForm from '../components/LoginForm/LoginForm';

function SignIn() {
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
