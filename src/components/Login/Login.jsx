import { useState } from 'react';

import {
  BoxFormLogin,
  Form,
  FormsTitle,
  Input,
  WrapperFormButtons,
  ButtonForgot,
  ButtonLogin,
} from './Login.styled';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };

  return (
    <BoxFormLogin id="user_options-forms">
      <Form>
        <FormsTitle>Login</FormsTitle>
        <label htmlFor="">
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </label>
        <label htmlFor="">
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
        </label>

        <WrapperFormButtons>
          {/* TODO кнопка чи посилання??? */}
          <ButtonForgot type="button">Forgot password?</ButtonForgot>
          <ButtonLogin type="submit">Log In</ButtonLogin>
        </WrapperFormButtons>
      </Form>
    </BoxFormLogin>
  );
};

export default Login;
