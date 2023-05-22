import { Box, Button, Typography } from '@mui/material';
import React from 'react';

function NotFound() {
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
          Oops!
        </Typography>
        <Typography
          variant="h3"
          sx={{ color: '#fa8900', textAlign: 'center', m: 2 }}
        >
          Page not found!
        </Typography>
        <Button variant="contained" href="/" sx={{ m: 3 }}>
          Return to Home
        </Button>
      </Box>
    </main>
  );
}

export default NotFound;
