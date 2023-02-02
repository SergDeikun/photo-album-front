import axios from 'axios';

const API_URL = 'https://photo-album-back.vercel.app';

const CreateNewUser = async ({ name, email, password }) => {
  const response = await axios.post(`${API_URL}/api/auth/register`, {
    name,
    email,
    password,
  });
  console.log(response.data);

  return response.data;
};

export default CreateNewUser;
