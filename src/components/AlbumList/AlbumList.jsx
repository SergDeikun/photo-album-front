import { List } from './AlbumList.styled';

import useGetCurrentUser from 'react-query/useGetCurrentUser';
import defaultCover from 'images/cover21.png';

import { Item, LinkItem, ImageBox, Image, AlbumName } from './AlbumList.styled';

const AlbumList = () => {
  const { data } = useGetCurrentUser();

  // if (data) {
  //   console.log(data);
  // }

  return (
    <>
      {!data && <h1>Hello! You don't have albums yet, create the first one</h1>}
      <List>
        {data &&
          data.myAlbums.map(({ name, _id: id, backgroundURL }) => {
            return (
              // Album
              <Item key={id}>
                <LinkItem to={`/album/${id}`}>
                  <ImageBox>
                    <Image src={backgroundURL || defaultCover} alt="cover" />
                  </ImageBox>
                  {/* <AlbumName>{name}</AlbumName> */}
                </LinkItem>
                <AlbumName>{name}</AlbumName>
              </Item>
            );
          })}
      </List>
    </>
  );
};

export default AlbumList;
