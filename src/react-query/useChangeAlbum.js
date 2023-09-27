import { useMutation } from 'react-query';
import queryClient from './queryClient';

import { changeAlbum } from 'api/api-fetch';

import { notifySuccess, notifyError } from 'helpers/toastNotify';

const useChangeAlbum = () => {
  const mutation = useMutation({
    mutationFn: ({ updateAlbum, id }) => changeAlbum({ updateAlbum, id }),

    onSuccess: () => {
      queryClient.invalidateQueries('user');
      notifySuccess('album update');
    },

    onError: error => {
      notifyError(error.response.data.message);
    },
  });

  return mutation;
};

export default useChangeAlbum;
