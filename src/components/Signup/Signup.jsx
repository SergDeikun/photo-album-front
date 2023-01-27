import { useState } from 'react';
// import useCreateUser from 'react-query/useCreateUser';
import CreateNewUser from 'api/api-fetch';
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
  // const createUser = useCreateUser();

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

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await CreateNewUser(name, email, password);
      console.log('ok');
    } catch (error) {
      console.log(error);
    }

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <BoxFormSignup id="user_options-forms">
      <Form onSubmit={handleSubmit}>
        <FormsTitle>Sign Up</FormsTitle>
        <label htmlFor="">
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
        </label>
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

        <ButtonSignup type="submit">Sign up</ButtonSignup>
      </Form>
    </BoxFormSignup>
  );
};

export default Signup;
