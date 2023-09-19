import { useMutation } from 'react-query';
import queryClient from './queryClient';

import { deleteAlbum } from 'api/api-fetch';

const useDeleteAlbum = token => {
  const mutation = useMutation({
    mutationFn: id => deleteAlbum(id, token),

    onSuccess: () => {
      queryClient.invalidateQueries('user');
    },
  });

  return mutation;
};

export default useDeleteAlbum;
