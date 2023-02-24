import { Link } from 'react-router-dom';

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

const AlbumPage = () => {
  const { data } = useGetCurrentUser();

  if (data) {
    // console.log(data);
  }

  return (
    <Container>
      <PageTitle>My albums</PageTitle>
      <AlbumList>
        {data &&
          data.myAlbums.map(({ name, _id: id, backgroundURL }) => {
            return (
              // Album
              <AlbumItem key={id}>
                <LinkItem>
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

export default AlbumPage;
