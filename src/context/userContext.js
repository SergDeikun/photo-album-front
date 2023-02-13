import { createContext, useState, useEffect } from 'react';
import useGetCurrentUser from 'react-query/useGetCurrentUser';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const { data } = useGetCurrentUser();

  //   if (data) {
  //     console.log(data);
  //   }

  useEffect(() => {
    setUser(data);
  }, [data]);
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserProvider;
