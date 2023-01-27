import { useQuery } from 'react-query';
import CreateNewUser from 'api/api-fetch';

const useCreateUser = (name, email, password) => {
  const query = useQuery('user', CreateNewUser(name, email, password));

  return query;
};

export default useCreateUser;
