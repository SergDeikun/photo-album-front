import { useMutation } from 'react-query';
import queryClient from './queryClient';

import { updateUser } from 'api/api-fetch';

import { notifySuccess, notifyError } from 'helpers/toastNotify';

const useUpdateUser = () => {
  const mutation = useMutation({
    mutationFn: ({ name, email }) => updateUser({ name, email }),

    //TODO: При оновленні name, notifySuccess('${name} update');
    //TODO: При оновленні email, notifySuccess('${email} update');

    onSuccess: () => {
      queryClient.invalidateQueries('user');
      notifySuccess(`user update`);
    },

    onError: error => {
      notifyError(error.response.data.message);
    },
  });

  return mutation;
};

export default useUpdateUser;
