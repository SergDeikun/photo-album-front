import Container from 'components/Container/Container';

import AlbumList from 'components/AlbumList/AlbumList';

import { PageTitle } from './AlbumsPage.styled';

const AlbumsPage = () => {
  return (
    <Container>
      {/* TODO:зробити привітання для першого входу, коли немає альбомів */}
      <PageTitle>My albums</PageTitle>
      <AlbumList />
    </Container>
  );
};

export default AlbumsPage;
