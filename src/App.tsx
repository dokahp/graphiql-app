import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import Welcome from './pages/Welcome';
import Layout from './components/Layout/Layout';
import NotFound from './pages/NotFound';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Graphql from './pages/GraphQl';
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch } from './hooks/redux';
import { authSlice } from './store/reducers/authSlice';

function onAuthStateChange(
  isAuthCallback: React.Dispatch<React.SetStateAction<boolean | undefined>>,
  setEmailCallback: React.Dispatch<React.SetStateAction<string>>
) {
  const auth = getAuth();
  return onAuthStateChanged(auth, (user) => {
    if (user) {
      isAuthCallback(true);
      if (user.email) {
        setEmailCallback(user.email);
      }
    } else {
      isAuthCallback(false);
    }
  });
}

function App() {
  const [isAuthorized, setIsAuthirized] = useState<boolean>();
  const [userEmail, setAuthUserEmail] = useState<string>('');
  const dispatch = useAppDispatch();
  const { setUserEmail } = authSlice.actions;
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChange(setIsAuthirized, setAuthUserEmail);
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    dispatch(setUserEmail(userEmail));
  });

  const [user, isLoading] = useAuthState(auth);

  return isLoading ? (
    <h1>loading...</h1>
  ) : (
    <Routes>
      <Route element={<Layout isAuthorized={isAuthorized} />}>
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
