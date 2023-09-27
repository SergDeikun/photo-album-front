import { useQuery } from 'react-query';

import { getCurrentUser } from 'api/api-fetch';

const useGetCurrentUser = () => {
  const currentUser = useQuery('user', () => getCurrentUser(), {
    retry: false,
  });

  return currentUser;
};

export default useGetCurrentUser;
