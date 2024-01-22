import { useMutation } from 'react-query';
import queryClient from './queryClient';

import { changeAlbum } from 'api/api-fetch';

import { notifySuccess, notifyError } from 'helpers/toastNotify';

const useChangeAlbum = () => {
  const mutation = useMutation({
    mutationFn: ({ updateAlbum, albumId }) =>
      changeAlbum({ updateAlbum, albumId }),

    onSuccess: () => {
      queryClient.invalidateQueries('user');
      notifySuccess('Album update');
    },

    onError: error => {
      notifyError(error.response.data.message);
    },
  });

  return mutation;
};

export default useChangeAlbum;
