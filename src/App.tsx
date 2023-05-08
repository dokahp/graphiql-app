import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Layout from './components/Layout/Layout';
import NotFound from './pages/NotFound';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Graphql from './pages/GraphQl';
import { useAppSelector } from './hooks/redux';

function App() {
  const { isAuthorized } = useAppSelector((state) => state.authSlice);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Welcome />} />
        <Route
          path="/graphql"
          element={isAuthorized ? <Graphql /> : <Navigate to="/" />}
        />
        <Route
          path="/signUp"
          element={!isAuthorized ? <SignUp /> : <Navigate to="/graphql" />}
        />
        <Route
          path="/signIn"
          element={!isAuthorized ? <SignIn /> : <Navigate to="/graphql" />}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
