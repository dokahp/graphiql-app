import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Footer from '../Footer';
import Header from '../Header';

function Layout() {
  return (
    <>
      <Header />
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
