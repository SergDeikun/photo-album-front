import { useQuery } from 'react-query';

import { getAlbumById } from 'api/api-fetch';

const useGetAlbumById = (albumId, token) => {
  const album = useQuery(['album', albumId], () =>
    getAlbumById(albumId, token)
  );

  return album;
};

export default useGetAlbumById;
