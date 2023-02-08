import { useState } from 'react';

import Container from 'components/Container/Container';
// import AuthMenu from 'components/AuthMenu/AuthMenu';
import SignupForm from 'components/Forms/AuthForms/SignupForm';
import LoginForm from 'components/Forms/AuthForms/LoginForm';
// import Login from 'components/Login/Login';
// import Signup from 'components/Signup/Signup';

import { Section } from './AuthPage.styled';

import {
  WrapperAuth,
  BoxQuestion,
  BoxOptions,
  Title,
  AuthLink,
} from 'components/AuthMenu/AuthMenu.styled';

const AuthPage = () => {
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
    <Section>
      <Container>
        <WrapperAuth>
          <BoxQuestion>
            <BoxOptions>
              <Title>Don't have an account ?</Title>
              <AuthLink to={'/register'} onClick={handleClickSignup}>
                Sign up
              </AuthLink>
            </BoxOptions>

            <BoxOptions>
              <Title>Have an account ?</Title>
              <AuthLink to={'/login'} onClick={handleClickLogin}>
                Login
              </AuthLink>
            </BoxOptions>
          </BoxQuestion>

          {showLogin && <LoginForm />}
          {showSignup && <SignupForm />}
        </WrapperAuth>
      </Container>
    </Section>
  );
};

export default AuthPage;
