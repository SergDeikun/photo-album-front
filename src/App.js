import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import toastOptions from 'helpers/toastOptions';

import SharedLayout from './components/SharedLayout/SharedLayout';
import AuthPage from 'pages/AuthPage/AuthPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import SignupPage from 'pages/SignupPage/SignupPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<AuthPage />}>
            <Route path="/api/auth/register" element={<SignupPage />} />
            <Route path="/api/auth/login" element={<LoginPage />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer {...toastOptions} />
    </>
  );
}

export default App;
