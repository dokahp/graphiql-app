import { Box, CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate } from 'react-router-dom';
import DocContainer from '../components/DocContainer/DocContainer';

interface GraphQlProps {
  isAuthorized: boolean | undefined;
}

function Graphql({ isAuthorized }: GraphQlProps) {
  if (isAuthorized === undefined)
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CircularProgress />
      </Box>
    );
  if (isAuthorized === false) return <Navigate to="/" />;
  return (
    <main>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
      <DocContainer />
      </Box>

    </main>
  );
}

export default Graphql;
