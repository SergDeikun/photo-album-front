import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import Cookies from 'js-cookie';

import UserProfile from 'components/UserProfile/UserProfile';

import queryClient from 'react-query/queryClient';
import useGetCurrentUser from 'react-query/useGetCurrentUser';

import { isValidToken } from 'helpers/isValidToken';
import { notifyError } from 'helpers/toastNotify';

import { BoxContainer } from './UserPage.styled';

const UserPage = () => {
  const token = Cookies.get('token');
  const navigate = useNavigate();

  const { data: currentUser, isLoading } = useGetCurrentUser(token);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    try {
      if (!isValidToken()) {
        navigate('/login');
        notifyError('Token expired or missing. Please login');
        queryClient.clear();
        return;
      }
    } catch (error) {
      console.error(error);
    }

    if (isLoading) {
      setProgress(100);
    }
  }, [isLoading, navigate, token]);

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
