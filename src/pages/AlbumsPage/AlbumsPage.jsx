import { useEffect } from 'react';

import useGetCurrentUser from 'react-query/useGetCurrentUser';

import Container from 'components/Container/Container';
import AlbumList from 'components/AlbumList/AlbumList';

import { WelcomeText, PageTitle } from './AlbumsPage.styled';

const AlbumsPage = () => {
  // const { data } = useGetCurrentUser();

  // useEffect(() => {
  //   // Відобразити контент тільки після того, як компонент отримає дані про поточний користувача
  //   if (data && data.myAlbums && data.myAlbums.length > 0) {
  //     return (
  //       <>
  //         <PageTitle>My albums</PageTitle>
  //         <AlbumList />
  //       </>
  //     );
  //   }
  //   return (
  //     <WelcomeText>
  //       Hello! It's time to save your moments. Add your first album
  //     </WelcomeText>
  //   );
  // }, [data]);

  return (
    <Container>
      <PageTitle>My albums</PageTitle>
      <AlbumList />
      {/* {data && data.myAlbums && data.myAlbums.length > 0 && (
        <>
          <PageTitle>My albums</PageTitle>
          <AlbumList />
        </>
      )} */}
      {/* {data && data.myAlbums && data.myAlbums.length > 0 ? (
        <>
          <PageTitle>My albums</PageTitle>
          <AlbumList />
        </>
      ) : (
        <WelcomeText>
          Hello! It's time to save your moments. Add your first album
        </WelcomeText>
      )} */}
    </Container>
  );
};

export default AlbumsPage;
