import Container from 'components/Container/Container';

import useGetCurrentUser from 'react-query/useGetCurrentUser';

import {
  PageTitle,
  AlbumList,
  AlbumItem,
  ImageBox,
  AlbumName,
  LinkItem,
  Image,
} from './AlbumsPage.styled';

const AlbumsPage = () => {
  const { data } = useGetCurrentUser();

  return (
    <Container>
      <PageTitle>My albums</PageTitle>
      <AlbumList>
        {data &&
          data.myAlbums.map(({ name, _id: id, backgroundURL }) => {
            return (
              // Album
              <AlbumItem key={id}>
                <LinkItem to={`/album/${id}`}>
                  <ImageBox>
                    <Image src={backgroundURL} alt="" />
                  </ImageBox>
                  <div>
                    <AlbumName>{name}</AlbumName>
                  </div>
                </LinkItem>
              </AlbumItem>
            );
          })}
      </AlbumList>
    </Container>
  );
};

export default AlbumsPage;
