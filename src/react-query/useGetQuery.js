import { useQueryClient } from 'react-query';

export const useGetQuery = name => {
  const queryClient = useQueryClient();

  return queryClient.getQueryData(name);
};

export default useGetQuery;
