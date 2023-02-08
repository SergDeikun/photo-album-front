// import { useState } from 'react';
// import { useQueryClient } from 'react-query';

import Container from 'components/Container/Container';
import UserMenu from 'components/UserMenu/UserMenu';

import useGetCurrentUser from 'react-query/useGetCurrentUser';

const UserPage = () => {
  const { data } = useGetCurrentUser();

  return (
    <>
      {data && (
        <Container>
          <UserMenu data={data} />
        </Container>
      )}
    </>
  );
};

export default UserPage;
