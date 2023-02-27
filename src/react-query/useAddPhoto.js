import { useMutation } from 'react-query';
import queryClient from './queryClient';

import { addPhoto } from 'api/api-fetch';

const useAddPhoto = () => {
  const mutation = useMutation({
    mutationFn: (id, newPhoto) => addPhoto(id, newPhoto),

    onSuccess: () => {
      queryClient.invalidateQueries('user');
    },
  });

  return mutation;
};

export default useAddPhoto;
