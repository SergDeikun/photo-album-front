import { useMutation } from 'react-query';
import queryClient from './queryClient';

import { deleteViwer } from 'api/api-fetch';

import { notifySuccess, notifyError } from 'helpers/toastNotify';

const useDeleteViwer = () => {
  const mutation = useMutation({
    mutationFn: ({ albumId, viwerId }) => deleteViwer({ albumId, viwerId }),

    onSuccess: () => {
      queryClient.invalidateQueries('album');
      notifySuccess('Viwer deleted');
    },
    onError: error => {
      notifyError(error.response.data.message);
    },
  });

  return mutation;
};

export default useDeleteViwer;
