import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import toastOptions from 'helpers/toastOptions';

import SharedLayout from './components/SharedLayout/SharedLayout';
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage.jsx'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage.jsx'));

const UserPage = lazy(() => import('./pages/UserPage/UserPage'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<HomePage />} />

          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/user" element={<UserPage />} />
        </Route>
      </Routes>
      <ToastContainer {...toastOptions} />
    </>
  );
}

export default App;
