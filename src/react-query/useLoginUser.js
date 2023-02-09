import { useMutation } from 'react-query';

import { loginUser } from 'api/api-fetch';
// import { notifySuccess, notifyError } from 'helpers/toastNotify';

const useLoginUser = () => {
  const mutation = useMutation('loginUser', {
    mutationFn: user => loginUser(user),

    // onSuccess: response => {
    //   notifySuccess('Successful login');
    // },
    // onError: error => {
    //   notifyError(error.response.data.message);
    // },
  });

  return mutation;
};

export default useLoginUser;
