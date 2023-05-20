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
  const { historyObjArray } = useAppSelector(
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
            <MainSection history={historyObjArray} />
          </Box>
        </Box>
      </Box>
    </main>
  );
}

export default Graphql;
