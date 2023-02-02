import { useMutation } from 'react-query';

import CreateNewUser from 'api/api-fetch';

const useSignupUser = () => {
  const mutation = useMutation(newUser => CreateNewUser(newUser));

  return mutation;
};

export default useSignupUser;
