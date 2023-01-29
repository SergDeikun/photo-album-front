import { useMutation } from 'react-query';

import axios from 'axios';

const API_URL = 'https://photo-album-back.vercel.app';
const REGISTER = '/api/auth/register';

const useSignupUser = () => {
  const mutation = useMutation(newUser => {
    axios.post(`${API_URL}${REGISTER}`, newUser);
  });

  return mutation;
};

export default useSignupUser;
