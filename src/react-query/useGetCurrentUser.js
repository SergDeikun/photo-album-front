import { useQuery } from 'react-query';

import { getCurrentUser } from 'api/api-fetch';

const useGetCurrentUser = () => {
  const currentUser = useQuery('user', () => getCurrentUser());

  return currentUser;
};

export default useGetCurrentUser;
