import { useState, useEffect } from 'react';
import LoadingBar from 'react-top-loading-bar';

import UserProfile from 'components/UserProfile/UserProfile';

import useGetCurrentUser from 'react-query/useGetCurrentUser';

import { BoxContainer } from './UserPage.styled';

const UserPage = () => {
  const { data: currentUser, isLoading } = useGetCurrentUser();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isLoading) {
      setProgress(100);
    }
  }, [isLoading]);

  return (
    <BoxContainer>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      {currentUser && <UserProfile currentUser={currentUser} />}
    </BoxContainer>
  );
};

export default UserPage;
