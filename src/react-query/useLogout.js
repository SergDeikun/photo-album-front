import queryClient from './queryClient';

import { logout } from 'api/api-fetch';

const useLogout = () => {
  const quite = () => {
    logout();
    queryClient.clear();
  };
  return quite;
};

export default useLogout;
