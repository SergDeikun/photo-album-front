import { useMutation } from 'react-query';
import queryClient from './queryClient';

import { updatePhoto } from 'api/api-fetch';

import { notifySuccess, notifyError } from 'helpers/toastNotify';

const useUpdatePhoto = () => {
  const mutation = useMutation({
    mutationFn: ({ date, comments, place, photoId }) =>
      updatePhoto({ date, comments, place, photoId }),

    onSuccess: () => {
      queryClient.invalidateQueries('photo');
      queryClient.invalidateQueries('album');

      notifySuccess('Photo update');
    },

    onError: error => {
      notifyError(error.response.data.message);
    },
  });

  return mutation;
};

export default useUpdatePhoto;
