import { useMutation } from 'react-query';
import queryClient from './queryClient';

import { addAlbum } from 'api/api-fetch';

const useAddAlbum = () => {
  const mutation = useMutation({
    mutationFn: newAlbum => addAlbum(newAlbum),

    onSuccess: () => {
      queryClient.invalidateQueries('user');
    },
  });

  return mutation;
};

export default useAddAlbum;
