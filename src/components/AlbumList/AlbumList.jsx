import { List } from './AlbumList.styled';

// import defaultCover from '../../images/cover2.png';
import DefaultCover from 'components/DefaultCover/DefaultCover';

import { Item, LinkItem, ImgWrapper, AlbumName } from './AlbumList.styled';

const AlbumList = ({ myAlbums }) => {
  console.log(myAlbums);
  return (
    <>
      <List>
        {myAlbums &&
          myAlbums.map(({ name, _id: id, backgroundURL }) => {
            return (
              <Item key={id}>
                <LinkItem to={`/album/${id}`}>
                  {backgroundURL ? (
                    <ImgWrapper backgroundImg={backgroundURL} />
                  ) : (
                    <DefaultCover />
                  )}
                  {/* <ImgWrapper backgroundImg={backgroundURL || defaultCover} /> */}
                  <AlbumName>{name}</AlbumName>
                </LinkItem>
              </Item>
            );
          })}
      </List>
    </>
  );
};

export default AlbumList;
