import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useSignupUser from 'react-query/useSignupUser';

import {
  BoxFormSignup,
  Form,
  FormsTitle,
  Field,
  ButtonSignup,
} from './Signup.styled';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const signupUser = useSignupUser();

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
      signupUser.mutate({ name, email, password });

      setName('');
      setEmail('');
      setPassword('');

      navigate('/api/auth/login');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <BoxFormSignup>
      <Form onSubmit={handleSubmit}>
        <FormsTitle>Sign Up</FormsTitle>
        <Field
          required
          label="Name"
          name="name"
          type="text"
          value={name}
          onChange={handleChange}
          helperText="(Required)"
          variant="standard"
        />
        <Field
          required
          label="Email"
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          helperText="(example@mail.com)"
          variant="standard"
        />
        <Field
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

export default Signup;
