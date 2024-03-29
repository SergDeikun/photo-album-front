import { useMutation } from 'react-query';
import queryClient from './queryClient';

import { deletePhoto } from 'api/api-fetch';

import { notifySuccess, notifyError } from 'helpers/toastNotify';

const useDeletePhoto = () => {
  const mutation = useMutation({
    mutationFn: id => deletePhoto(id),

    onSuccess: () => {
      queryClient.invalidateQueries('album');
      notifySuccess('Photo deleted');
    },
    onError: error => {
      notifyError(error.response.data.message);
    },
  });

  return mutation;
};

export default useDeletePhoto;
