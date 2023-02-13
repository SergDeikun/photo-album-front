// import { useState } from 'react';
// import { useQueryClient } from 'react-query';

import Container from 'components/Container/Container';
import UserMenu from 'components/UserMenu/UserMenu';
import { createContext, useState } from 'react';

import useGetCurrentUser from 'react-query/useGetCurrentUser';

export const UserContext = createContext();

const UserPage = () => {
  const { data } = useGetCurrentUser();
  // const { data } = queryClient.getQueryState();
  // console.log(data);

  if (data) {
    // console.log(data.token);
  }

  // return (
  // <UserContext.Provider value={{ data }}>
  //   <div>succes</div>
  // </UserContext.Provider>;
  // );

  // <>{user && <Container>{/* <UserMenu data={data} /> */}</Container>}</>;
};

export default UserPage;
