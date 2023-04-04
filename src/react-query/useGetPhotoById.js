import { useQuery } from 'react-query';

import { getPhotoById } from 'api/api-fetch';

const useGetPhotoById = id => {
  const photo = useQuery(['photo', id], () => getPhotoById(id));

  return photo;
};

export default useGetPhotoById;
