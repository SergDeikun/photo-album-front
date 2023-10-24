import { List } from './AlbumList.styled';

import DefaultAlbumCover from 'components/DefaultAlbumCover/DefaultAlbumCover';
import {
  Item,
  LinkItem,
  ImgWrapper,
  Image,
  AlbumName,
} from './AlbumList.styled';

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
                  <ImgWrapper>
                    <Image src={backgroundURL} alt="cover" />
                  </ImgWrapper>
                  {/* {backgroundURL ? (
                    <ImgWrapper>
                      <Image src={backgroundURL} alt="cover" />
                    </ImgWrapper>
                  ) : (
                    <DefaultAlbumCover />
                  )} */}
                </LinkItem>
                {/* <AlbumName>{name}</AlbumName> */}
              </Item>
            );
          })}
      </List>
    </>
  );
};

export default AlbumList;
