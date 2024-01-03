import { useQuery } from 'react-query';

import { getAlbumById } from 'api/api-fetch';

const useGetAlbumById = albumId => {
  return useQuery(['album', albumId], () => getAlbumById(albumId));

  // return album;
};

export default useGetAlbumById;
