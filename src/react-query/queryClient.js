import { QueryClient } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      refetchOnWindowFocus: false,
      // refetchOnMount: true,
      refetchOnMount: false,

      refetchInactive: true,
    },
  },
});

export default queryClient;
