import { useQuery } from 'react-query';

import { getCurrentUser } from 'api/api-fetch';

const useGetCurrentUser = token => {
  const currentUser = useQuery('user', () => getCurrentUser(token), {
    retry: false,
  });

  return currentUser;
};

export default useGetCurrentUser;
