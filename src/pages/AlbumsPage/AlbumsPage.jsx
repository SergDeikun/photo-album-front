import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import Cookies from 'js-cookie';

import AlbumList from 'components/AlbumList/AlbumList';

import useGetCurrentUser from 'react-query/useGetCurrentUser';

import { BoxContainer, WelcomeText, PageTitle } from './AlbumsPage.styled';

const AlbumsPage = () => {
  const token = Cookies.get('token');
  const navigate = useNavigate();

  const { data: currentUser, isLoading } = useGetCurrentUser(token);
  const [progress, setProgress] = useState(0);

  const showWelcomeText =
    !isLoading &&
    currentUser &&
    currentUser.myAlbums &&
    currentUser.myAlbums.length === 0;

  useEffect(() => {
    if (
      !token ||
      new Date().getTime() > new Date(Cookies.get('expires')).getTime()
    ) {
      navigate('/login');
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

      {showWelcomeText ? (
        <WelcomeText>
          Hello! It's time to save your moments. Add your first album
        </WelcomeText>
      ) : (
        <>
          {token && currentUser && (
            <>
              <PageTitle>My albums</PageTitle>
              <AlbumList myAlbums={currentUser ? currentUser.myAlbums : []} />
            </>
          )}
        </>
      )}
    </BoxContainer>
  );
};

export default AlbumsPage;
