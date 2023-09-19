import { useMutation } from 'react-query';
import queryClient from './queryClient';

import { addPhoto } from 'api/api-fetch';

const useAddPhoto = token => {
  const mutation = useMutation({
    mutationFn: ({ newPhoto, albumId }) =>
      addPhoto({ newPhoto, albumId }, token),

    onSuccess: () => {
      queryClient.invalidateQueries('album');
    },
  });

  return mutation;
};

export default useAddPhoto;
