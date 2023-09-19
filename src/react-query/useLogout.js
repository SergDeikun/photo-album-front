import { useMutation } from 'react-query';
import queryClient from './queryClient';

import { logout } from 'api/api-fetch';

// const useLogout = () => {
//   const quite = () => {
//     logout();
//     queryClient.clear();
//   };
//   return quite;
// };

const useLogout = token => {
  const mutation = useMutation({
    mutationFn: () => logout(token),

    onSuccess: () => {
      queryClient.clear();
    },
  });

  return mutation;
};

export default useLogout;
