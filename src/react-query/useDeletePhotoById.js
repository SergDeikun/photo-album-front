import { useMutation } from 'react-query';
import queryClient from './queryClient';

import { deletePhoto } from 'api/api-fetch';

import { notifySuccess, notifyError } from 'helpers/toastNotify';

const useDeletePhoto = token => {
  const mutation = useMutation({
    mutationFn: id => deletePhoto(id, token),

    onSuccess: () => {
      queryClient.invalidateQueries('album');
      notifySuccess('photo deleted');
    },
    onError: error => {
      notifyError(error.response.data.message);
    },
  });

  return mutation;
};

export default useDeletePhoto;
