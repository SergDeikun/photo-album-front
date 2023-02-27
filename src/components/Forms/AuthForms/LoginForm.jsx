import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useLoginUser from 'react-query/useLoginUser';
import { notifySuccess, notifyError } from 'helpers/toastNotify';
import Button from 'components/Buttons/Button';

import { Form, Input, ButtonForgot } from './AuthForm.styled';

const LoginForm = () => {
  const [email, setEmail] = useState('qwerty@mail.com');

  const [password, setPassword] = useState('qwerty');
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
            notifySuccess('Successful login');
            navigate('/album-list');
            // console.log(response);
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
        <Button type="submit" title={'Log In'} disabled={isLoading} />
        {/* TODO кнопка чи посилання??? */}

        <ButtonForgot type="button">Forgot password?</ButtonForgot>
      </Form>
    </>
  );
};

export default LoginForm;
