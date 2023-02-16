import { createContext, useState, useEffect } from 'react';
// import useGetCurrentUser from 'react-query/useGetCurrentUser';

import useGetQuery from 'react-query/useGetQuery';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  // const { data } = useGetCurrentUser();
  const data = useGetQuery('user');

  useEffect(() => {
    setUser(data);
  }, [data]);
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
