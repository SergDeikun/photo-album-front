import { useMutation } from 'react-query';

import { loginUser } from 'api/api-fetch';
import { notifySuccess, notifyError } from 'helpers/toastNotify';

const useLoginUser = () => {
  const mutation = useMutation({
    mutationFn: user => loginUser(user),
    onSuccess: data => {
      notifySuccess('Successful login');
    },
    onError: error => {
      notifyError(error.response.data.message);
    },
    // onSettled: () => {
    //   queryClient.invalidateQueries('create');
    // },
  });

  return mutation;
};

export default useLoginUser;
