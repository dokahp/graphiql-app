import { Box, CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate } from 'react-router-dom';
import Aside from '../components/Aside/Aside';
import Request from '../components/Request/Request';
import Response from '../components/Response/Response';

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
        bgcolor="#fff"
      >
        <Aside />

        <Box display="flex" padding="16px" height="100vh" width="100%">
          <Box
            display="flex"
            justifyContent="space-between"
            bgcolor="rgba(59, 76, 104, 0.07)"
            borderRadius="20px"
            height="100%"
            width="100%"
            boxSizing="border-box"
            padding="8px"
          >
            <Box bgcolor="#fff" borderRadius="12px" width="55%" height="100%">
              <Request />
            </Box>
            <Response />
          </Box>
        </Box>
      </Box>
    </main>
  );
}

export default Graphql;
