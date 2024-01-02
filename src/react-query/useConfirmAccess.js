import { useMutation } from 'react-query';
import queryClient from './queryClient';

import { confirmAccess } from 'api/api-fetch';
import { notifySuccess, notifyError } from 'helpers/toastNotify';

const useConfirmAccess = () => {
  const mutation = useMutation({
    mutationFn: ({ email, password, albumId }) =>
      confirmAccess({ email, password, albumId }),

    onSuccess: response => {
      queryClient.invalidateQueries('user');
      notifySuccess('Successful');
    },
    onError: error => {
      //   notifyError(error.response.data.message);
    },
  });

  return mutation;
};

export default useConfirmAccess;
