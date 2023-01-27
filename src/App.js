import { Routes, Route } from 'react-router-dom';

import SharedLayout from './components/SharedLayout/SharedLayout';
import AuthPage from 'pages/AuthPage/AuthPage';
import Signup from 'components/Signup/Signup';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<AuthPage />}>
            <Route path="/api/auth/register" element={<Signup />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
