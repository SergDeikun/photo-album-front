import { useMutation } from 'react-query';
import queryClient from './queryClient';

import { addPhoto } from 'api/api-fetch';

const useAddPhoto = () => {
  const mutation = useMutation({
    mutationFn: ({ newPhoto, id }) => addPhoto({ newPhoto, id }),

    onSuccess: () => {
      queryClient.invalidateQueries('album');
    },
  });

  return mutation;
};

export default useAddPhoto;
