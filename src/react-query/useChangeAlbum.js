import { useMutation } from 'react-query';
import queryClient from './queryClient';

import { changeAlbum } from 'api/api-fetch';

const useChangeAlbum = () => {
  const mutation = useMutation({
    mutationFn: id => changeAlbum(id),

    onSuccess: () => {
      queryClient.invalidateQueries('user');
    },
  });

  return mutation;
};

export default useChangeAlbum;
