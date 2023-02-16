import { Link } from 'react-router-dom';

import Container from 'components/Container/Container';

import useGetCurrentUser from 'react-query/useGetCurrentUser';

import { AlbumList, AlbumItem, AlbumName } from './AlbumPage.styled';

const AlbumPage = () => {
  const { data } = useGetCurrentUser();

  if (data) {
    // console.log(data);
  }

  return (
    <Container>
      <AlbumList>
        {data &&
          data.myAlbums.map(({ name, _id: id }) => {
            return (
              <AlbumItem key={id}>
                <Link>
                  <AlbumName>{name}</AlbumName>
                </Link>
              </AlbumItem>
            );
          })}
      </AlbumList>
    </Container>
  );
};

export default AlbumPage;
