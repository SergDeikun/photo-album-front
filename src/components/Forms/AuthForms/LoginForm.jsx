import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import useLoginUser from 'react-query/useLoginUser';
import { notifySuccess, notifyError } from 'helpers/toastNotify';

import { Form, Input, ButtonForgot, ButtonLogin } from './AuthForm.styled';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { mutate: loginUser } = useLoginUser();

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

    try {
      loginUser(
        { email, password },
        {
          onSuccess: () => {
            notifySuccess('Successful login');
            navigate('/user');
          },
          onError: error => {
            notifyError(error.response.data.message);
          },
        }
      );

      // setEmail('');
      // setPassword('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
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

        <ButtonLogin type="submit">Log In</ButtonLogin>
        {/* TODO кнопка чи посилання??? */}

        <ButtonForgot type="button">Forgot password?</ButtonForgot>
      </Form>
    </>
  );
};

export default LoginForm;
