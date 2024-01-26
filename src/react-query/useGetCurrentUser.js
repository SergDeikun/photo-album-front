import { useQuery } from 'react-query';

import { getCurrentUser } from 'api/api-fetch';

const useGetCurrentUser = token => {
  const currentUser = useQuery('user', () => getCurrentUser(token), {
    retry: false,
    // staleTime: 5000,
    // refetchInterval: 10000,
  });

  return currentUser;
};

export default useGetCurrentUser;
