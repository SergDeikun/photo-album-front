import { useQuery } from 'react-query';

import { getAlbumById } from 'api/api-fetch';

const useGetAlbumById = albumId => {
  const album = useQuery(['album', albumId], () => getAlbumById(albumId));

  return album;
};

export default useGetAlbumById;