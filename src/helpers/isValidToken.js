import axios from 'axios';
import Cookies from 'js-cookie';

export const isValidToken = () => {
  const token = Cookies.get('token');
  const expires = Cookies.get('expires');

  if (!token || Date.now() > new Date(expires).getTime()) {
    // throw new Error('Token is missing or expired');
    return false;
  }

  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  return true;

  // if (token) {
  //   axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  // } else {
  //   delete axios.defaults.headers.common['Authorization'];
  // }
};
