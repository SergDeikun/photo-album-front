import { useState } from 'react';

import {
  WrapperAuth,
  BoxQuestion,
  BoxOptions,
  Title,
  Button,
  BoxFormLogin,
  Form,
  FormsTitle,
  Input,
  WrapperFormButtons,
  ButtonForgot,
  ButtonFormSubmit,
  BoxFormSignin,
  ButtonSignup,
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
          <Title>Don't have an account?</Title>
          <Button onClick={handleClickSignup}>Sign up</Button>
        </BoxOptions>

        <BoxOptions>
          <Title>Have an account?</Title>
          <Button onClick={handleClickLogin}>Login</Button>
        </BoxOptions>
      </BoxQuestion>

      {/* Form */}
      {showLogin && (
        <BoxFormLogin id="user_options-forms">
          <Form>
            <FormsTitle>Login</FormsTitle>
            <Input type="email" placeholder="Email" required />
            <Input type="password" placeholder="Password" required />
            <WrapperFormButtons>
              <ButtonForgot type="button">Forgot password?</ButtonForgot>
              <ButtonFormSubmit type="submit">Log In</ButtonFormSubmit>
            </WrapperFormButtons>
          </Form>
        </BoxFormLogin>
      )}

      {showSignup && (
        <BoxFormSignin id="user_options-forms">
          <Form>
            <FormsTitle>Sign Up</FormsTitle>
            <Input type="text" placeholder="Full Name" required />
            <Input type="email" placeholder="Email" required />
            <Input type="password" placeholder="Password" required />
            <ButtonSignup type="submit">Sign up</ButtonSignup>
          </Form>
        </BoxFormSignin>
      )}
    </WrapperAuth>
  );
};

export default AuthMenu;
