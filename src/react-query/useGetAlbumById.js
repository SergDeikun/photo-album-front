import { useQuery } from 'react-query';

import { getAlbumById } from 'api/api-fetch';

const useGetAlbumById = (albumId, token) => {
  const album = useQuery(
    ['album', albumId],
    () => getAlbumById(albumId, token),

    {
      refetchInterval: 3600000,
    }
  );

  return album;
};

export default useGetAlbumById;
