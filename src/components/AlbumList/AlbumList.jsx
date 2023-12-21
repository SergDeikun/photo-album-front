import { List } from './AlbumList.styled';

import defaultCover from '../../images/bg-cover1.jpg';

import { Item, LinkItem, ImgWrapper, AlbumName } from './AlbumList.styled';

const AlbumList = ({ myAlbums }) => {
  return (
    <>
      <List>
        {myAlbums &&
          myAlbums.map(({ name, _id: id, backgroundURL }) => {
            return (
              <Item key={id}>
                <LinkItem to={`/album/${id}`}>
                  <ImgWrapper backgroundImg={backgroundURL || defaultCover} />
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
