import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

interface LayoutProps {
  isAuthorized: boolean | undefined;
}

function Layout({ isAuthorized }: LayoutProps) {
  return (
    <>
      <Header isAuthorized={isAuthorized} />
      <Outlet />
      <ToastContainer
        position="bottom-center"
        autoClose={13}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Footer />
    </>
  );
}

export default Layout;
