import { useMutation } from 'react-query';
import queryClient from './queryClient';

import { addAlbum } from 'api/api-fetch';

const useAddAlbum = token => {
  const mutation = useMutation({
    mutationFn: newAlbum => addAlbum(newAlbum, token),

    onSuccess: () => {
      queryClient.invalidateQueries('user');
    },
  });

  return mutation;
};

export default useAddAlbum;
