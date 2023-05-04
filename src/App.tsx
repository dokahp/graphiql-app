import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Layout from './components/Layout/Layout';
import NotFound from './pages/NotFound';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Graphql from './pages/GraphQl';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Welcome />} />
        <Route path="/graphql" element={<Graphql />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
