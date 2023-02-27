import { useQuery } from 'react-query';

import { getAlbumById } from 'api/api-fetch';

const useGetAlbumById = id => {
  const album = useQuery(['album', id], () => getAlbumById(id));

  return album;
};

export default useGetAlbumById;
