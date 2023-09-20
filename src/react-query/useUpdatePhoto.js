import { useMutation } from 'react-query';
import queryClient from './queryClient';

import { updatePhoto } from 'api/api-fetch';

import { notifySuccess, notifyError } from 'helpers/toastNotify';

const useUpdatePhoto = token => {
  const mutation = useMutation({
    mutationFn: ({ date, comments, place, photoId }) =>
      updatePhoto({ date, comments, place, photoId }, token),

    onSuccess: () => {
      queryClient.invalidateQueries('photo');
      queryClient.invalidateQueries('album');

      notifySuccess('photo update');
    },

    onError: error => {
      notifyError(error.response.data.message);
    },
  });

  return mutation;
};

export default useUpdatePhoto;
