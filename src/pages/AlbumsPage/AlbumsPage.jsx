import { useEffect } from 'react';
// import Cookies from 'js-cookie';

import useGetCurrentUser from 'react-query/useGetCurrentUser';

import Container from 'components/Container/Container';
import AlbumList from 'components/AlbumList/AlbumList';

import { useState } from 'react';
import { WelcomeText, PageTitle } from './AlbumsPage.styled';
import LoadingBar from 'react-top-loading-bar';

const AlbumsPage = () => {
  // const token = Cookies.get('token');

  const { data, isLoading } = useGetCurrentUser();
  const [progress, setProgress] = useState(0);

  const showWelcomeText =
    !isLoading && data && data.myAlbums && data.myAlbums.length === 0;

  useEffect(() => {
    if (isLoading) {
      setProgress(100);
    }
  }, [data, isLoading]);

  return (
    <Container>
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
          <AlbumList myAlbums={data ? data.myAlbums : []} />
        </>
      )}
    </Container>
  );
};

export default AlbumsPage;
