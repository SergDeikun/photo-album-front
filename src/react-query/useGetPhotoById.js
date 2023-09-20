import { useQuery } from 'react-query';

import { getPhotoById } from 'api/api-fetch';

const useGetPhotoById = (id, token) => {
  const photo = useQuery(['photo', id], () => getPhotoById(id, token));

  return photo;
};

export default useGetPhotoById;
