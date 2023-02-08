import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useSignupUser from 'react-query/useSignupUser';
import { notifySuccess, notifyError } from 'helpers/toastNotify';

import {
  BoxFormSignup,
  Form,
  FormsTitle,
  Input,
  ButtonSignup,
} from './AuthForm.styled';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { mutate: signupUser } = useSignupUser();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

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
      signupUser(
        { name, email, password },
        {
          onSuccess: () => {
            notifySuccess('User register');
            navigate('/login');
          },
          onError: error => {
            notifyError(error.response.data.message);
          },
        }
      );

      setName('');
      setEmail('');
      setPassword('');

      // navigate('/api/auth/login');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <BoxFormSignup>
      <Form onSubmit={handleSubmit}>
        <FormsTitle>Sign Up</FormsTitle>
        <Input
          required
          label="Name"
          name="name"
          type="text"
          value={name}
          onChange={handleChange}
          helperText="(Required)"
          variant="standard"
        />
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

        <ButtonSignup type="submit">Sign up</ButtonSignup>
      </Form>
    </BoxFormSignup>
  );
};

export default SignupForm;
