import { useQuery } from 'react-query';

import { getPhotoById } from 'api/api-fetch';

const useGetPhotoById = albumId => {
  const photo = useQuery(['photo', albumId], () => getPhotoById(albumId));

  return photo;
};

export default useGetPhotoById;
