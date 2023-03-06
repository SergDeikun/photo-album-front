import Container from 'components/Container/Container';

import useGetCurrentUser from 'react-query/useGetCurrentUser';
import defaultCover from 'images/cover.jpg';

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
                    <Image src={backgroundURL || defaultCover} alt="" />
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
