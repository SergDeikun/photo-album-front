import { useMutation } from 'react-query';

import { createNewUser } from 'api/api-fetch';
import { notifySuccess, notifyError } from 'helpers/toastNotify';

const useRegisterUser = () => {
  const mutation = useMutation({
    mutationFn: newUser => createNewUser(newUser),

    onSuccess: data => {
      notifySuccess('User register');
    },

    onError: error => {
      notifyError(error.response.data.message);
    },
  });

  return mutation;
};

export default useRegisterUser;
