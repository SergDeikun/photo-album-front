import { Link } from 'react-router-dom';

import Container from 'components/Container/Container';

import useGetCurrentUser from 'react-query/useGetCurrentUser';

import {
  AlbumList,
  AlbumItem,
  AlbumName,
  LinkItem,
  Image,
} from './AlbumPage.styled';

const AlbumPage = () => {
  const { data } = useGetCurrentUser();

  if (data) {
    // console.log(data);
  }

  return (
    <Container>
      <AlbumList>
        {data &&
          data.myAlbums.map(({ name, _id: id, backgroundURL }) => {
            return (
              <AlbumItem key={id}>
                <LinkItem>
                  <Image src={backgroundURL} alt="" />
                  <AlbumName>{name}</AlbumName>
                </LinkItem>
              </AlbumItem>
            );
          })}
      </AlbumList>
    </Container>
  );
};

export default AlbumPage;
