import { useEffect } from 'react';
import { useState } from 'react';
import LoadingBar from 'react-top-loading-bar';

import useGetCurrentUser from 'react-query/useGetCurrentUser';

import AlbumList from 'components/AlbumList/AlbumList';

import { BoxContainer, WelcomeText, PageTitle } from './AlbumsPage.styled';

const AlbumsPage = () => {
  const { data: currentUser, isLoading } = useGetCurrentUser();
  const [progress, setProgress] = useState(0);

  const showWelcomeText =
    !isLoading &&
    currentUser &&
    currentUser.myAlbums &&
    currentUser.myAlbums.length === 0;

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

      {showWelcomeText ? (
        <WelcomeText>
          Hello! It's time to save your moments. Add your first album
        </WelcomeText>
      ) : (
        <>
          <PageTitle>My albums</PageTitle>
          <AlbumList myAlbums={currentUser ? currentUser.myAlbums : []} />
        </>
      )}
    </BoxContainer>
  );
};

export default AlbumsPage;
