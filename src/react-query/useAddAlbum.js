import { useMutation } from 'react-query';
import queryClient from './queryClient';

import { addAlbum } from 'api/api-fetch';

const useAddAlbum = () => {
  const mutation = useMutation('addAlbum', {
    mutationFn: album => addAlbum(album),

    onSuccess: () => {
      queryClient.invalidateQueries('user');
    },
  });

  return mutation;
};

export default useAddAlbum;
