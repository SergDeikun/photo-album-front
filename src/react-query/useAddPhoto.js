import { useMutation } from 'react-query';
import queryClient from './queryClient';

import { addPhoto } from 'api/api-fetch';

import { notifyError } from 'helpers/toastNotify';

const useAddPhoto = () => {
  const mutation = useMutation({
    mutationFn: ({ newPhoto, albumId }) => addPhoto({ newPhoto, albumId }),

    onSuccess: () => {
      queryClient.invalidateQueries('album');
    },
    onError: error => {
      notifyError(error.response.data.message);
    },
  });

  return mutation;
};

export default useAddPhoto;
