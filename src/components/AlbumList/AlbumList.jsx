import { List } from './AlbumList.styled';

import useGetCurrentUser from 'react-query/useGetCurrentUser';

import DefaultAlbumCover from 'components/DefaultAlbumCover/DefaultAlbumCover';
import { Item, LinkItem, Image, AlbumName } from './AlbumList.styled';

const AlbumList = () => {
  const { data } = useGetCurrentUser();

  // if (data) {
  //   console.log(data);
  // }

  return (
    <>
      <List>
        {data &&
          data.myAlbums.map(({ name, _id: id, backgroundURL }) => {
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
