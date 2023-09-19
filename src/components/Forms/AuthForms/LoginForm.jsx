import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

import useLoginUser from 'react-query/useLoginUser';
import { notifySuccess, notifyError } from 'helpers/toastNotify';

import Button from 'components/Buttons/Button';

import queryClient from '../../../react-query/queryClient';

import { Form, InputrWrapper, Input, ButtonForgot } from './AuthForm.styled';

const LoginForm = () => {
  // const [email, setEmail] = useState('qwerty@mail.com');
  // const [password, setPassword] = useState('qwerty');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const { mutateAsync: loginUser, isLoading } = useLoginUser();

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

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await loginUser(
        { email, password },
        {
          onSuccess: response => {
            Cookies.set('token', response.token, {
              expires: 7,
              secure: true,
              sameSite: 'strict',
              // httpOnly: true,
            });
            notifySuccess('Successful login');
            navigate('/album-list');
            queryClient.invalidateQueries();

            return response;
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
        <InputrWrapper>
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
        </InputrWrapper>

        <InputrWrapper>
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
        </InputrWrapper>
        <Button type="submit" title="Log In" disabled={isLoading} />
        {/* TODO кнопка чи посилання??? */}

        <ButtonForgot type="button">Forgot password?</ButtonForgot>
      </Form>
    </>
  );
};

export default LoginForm;
