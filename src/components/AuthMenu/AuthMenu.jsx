import { useState } from 'react';

import Login from 'components/Login/Login';
import Signup from 'components/Signup/Signup';

import {
  WrapperAuth,
  BoxQuestion,
  BoxOptions,
  Title,
  AuthLink,
} from './AuthMenu.styled';

const AuthMenu = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [showSignup, setShowSignup] = useState(false);

  const handleClickSignup = () => {
    setShowSignup(true);
    setShowLogin(false);
  };

  const handleClickLogin = () => {
    setShowLogin(true);
    setShowSignup(false);
  };

  return (
    <WrapperAuth>
      <BoxQuestion>
        <BoxOptions>
          <Title>Don't have an account ?</Title>
          <AuthLink onClick={handleClickSignup}>Sign up</AuthLink>
        </BoxOptions>

        <BoxOptions>
          <Title>Have an account ?</Title>
          <AuthLink onClick={handleClickLogin}>Login</AuthLink>
        </BoxOptions>
      </BoxQuestion>
      {/* Form */}
      {showLogin && <Login />}
      {showSignup && <Signup />}
    </WrapperAuth>
  );
};

export default AuthMenu;
