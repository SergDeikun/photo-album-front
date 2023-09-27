import axios from 'axios';
import Cookies from 'js-cookie';

export const setAuthorizationHeader = () => {
  const token = Cookies.get('token');
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};
