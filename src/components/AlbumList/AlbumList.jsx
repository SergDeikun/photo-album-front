import { List } from './AlbumList.styled';

import DefaultAlbumCover from 'components/DefaultAlbumCover/DefaultAlbumCover';
import { Item, LinkItem, Image, AlbumName } from './AlbumList.styled';

const AlbumList = ({ myAlbums }) => {
  return (
    <>
      <List>
        {myAlbums &&
          myAlbums.map(({ name, _id: id, backgroundURL }) => {
            return (
              // Album
              <Item key={id}>
                <LinkItem to={`/album/${id}`}>
                  {backgroundURL ? (
                    <div style={{ height: '509px' }}>
                      <Image src={backgroundURL} alt="cover" />
                    </div>
                  ) : (
                    <DefaultAlbumCover />
                  )}
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
