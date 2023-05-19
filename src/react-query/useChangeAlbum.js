import { useMutation } from 'react-query';
import queryClient from './queryClient';

import { changeAlbum } from 'api/api-fetch';

const useChangeAlbum = () => {
  const mutation = useMutation({
    mutationFn: ({ updateAlbum, id }) => changeAlbum({ updateAlbum, id }),

    onSuccess: () => {
      queryClient.invalidateQueries('user');
    },
  });

  return mutation;
};

export default useChangeAlbum;
