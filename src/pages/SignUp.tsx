import { Box } from '@mui/material';
import React from 'react';
import SignupForm from '../components/SignupForm/SignupForm';

function SignUp() {
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
          <SignupForm />
        </Box>
      </Box>
    </main>
  );
}

export default SignUp;
