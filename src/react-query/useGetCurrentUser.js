import { useQuery } from 'react-query';

import { getCurrentUser } from 'api/api-fetch';

const useGetCurrentUser = token => {
  const currentUser = useQuery('user', () => getCurrentUser(token), {
    retry: false,
    refetchInterval: 3600000,
  });

  return currentUser;
};

export default useGetCurrentUser;
