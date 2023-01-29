import { useState } from 'react';
import useSignupUser from 'react-query/useSignupUser';
import TextField from '@mui/material/TextField';

import {
  BoxFormSignup,
  Form,
  FormsTitle,
  Input,
  ButtonSignup,
} from './Signup.styled';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
    } catch (error) {
      console.log(error);
    }

    // setName('');
    // setEmail('');
    // setPassword('');
  };
  return (
    <BoxFormSignup id="user_options-forms">
      <Form onSubmit={handleSubmit}>
        <FormsTitle>Sign Up</FormsTitle>
        <Input
          margin="dense"
          required
          // id="standard-password-input"
          label="Name"
          name="name"
          type="text"
          value={name}
          onChange={handleChange}
          variant="standard"
        />
        <Input
          margin="dense"
          required
          // id="standard-password-input"
          label="Email"
          name="email"
          type="email"
          variant="standard"
        />
        <Input
          margin="dense"
          required
          id="standard-password-input"
          label="Password"
          name="password"
          type="password"
          // autoComplete="current-password"
          variant="standard"
        />
        <ButtonSignup type="submit">Sign up</ButtonSignup>
      </Form>
    </BoxFormSignup>
  );
};

export default Signup;
