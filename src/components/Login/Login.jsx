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

  const handleSubmit = e => {
    e.preventDefault();

    // try {
    //   signupUser.mutate({ name, email, password });
    // } catch (error) {
    //   console.log(error);
    // }

    // setName('');
    // setEmail('');
    // setPassword('');
  };

  return (
    <BoxFormLogin>
      <Form onSubmit={handleSubmit}>
        <FormsTitle>Login</FormsTitle>
        <Input
          required
          label="Email"
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          helperText="(example@mail.com)"
          variant="standard"
        />
        <Input
          required
          label="Password"
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          helperText="
          (Passwords must be at least 6 characters)"
          variant="standard"
        />

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
