import { Box, CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate } from 'react-router-dom';
import Aside from '../components/Aside/Aside';
import MainSection from '../components/MainSection/MainSection';
import { useAppSelector } from '../hooks/redux';

interface GraphQlProps {
  isAuthorized: boolean | undefined;
}

function Graphql({ isAuthorized }: GraphQlProps) {
  const { currentRequest } = useAppSelector(
    (state) => state.historySliceReducer
  );

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
    <main style={{ flex: '1 0 auto' }}>
      <Box
        display="flex"
        bgcolor="#fff"
        flex="1 0 auto"
        sx={{
          height: { xs: '100%', md: '100vh' },
        }}
      >
        {/* <Aside /> */}

        <Box
          display="flex"
          height="100vh"
          position="relative"
          width="100%"
          sx={{
            padding: { xs: '4px', md: '16px' },
            height: { xs: '100%', md: '100vh' },
          }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            bgcolor="rgba(59, 76, 104, 0.07)"
            borderRadius="20px"
            height="100%"
            width="100%"
            boxSizing="border-box"
            padding="8px"
            sx={{ flexDirection: { xs: 'column', md: 'row' } }}
          >
            <MainSection currentRequest={currentRequest} />
          </Box>
        </Box>
      </Box>
    </main>
  );
}

export default Graphql;
