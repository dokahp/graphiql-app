import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Welcome from './pages/Welcome';
import Layout from './components/Layout/Layout';
import NotFound from './pages/NotFound';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Graphql from './pages/GraphQl';

function onAuthStateChange(
  callback: React.Dispatch<React.SetStateAction<boolean | undefined>>
) {
  const auth = getAuth();
  return onAuthStateChanged(auth, (user) => {
    if (user) {
      callback(true);
    } else {
      callback(false);
    }
  });
}

function App() {
  const [isAuthorized, setIsAuthirized] = useState<boolean>();

  useEffect(() => {
    const unsubscribe = onAuthStateChange(setIsAuthirized);
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Welcome isAuthorized={isAuthorized} />} />
        <Route
          path="/graphql"
          element={<Graphql isAuthorized={isAuthorized} />}
        />
        <Route
          path="/signUp"
          element={
            !isAuthorized ? <SignUp /> : <Navigate to="/graphql" replace />
          }
        />
        <Route
          path="/signIn"
          element={
            !isAuthorized ? <SignIn /> : <Navigate to="/graphql" replace />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
