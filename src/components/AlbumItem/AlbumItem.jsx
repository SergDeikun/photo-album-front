import useGetCurrentUser from 'react-query/useGetCurrentUser';
import useGetQuery from 'react-query/useGetQuery';

// import defaultCover from 'images/cover.jpg';

import { Item, LinkItem, ImageBox, Image, AlbumName } from './AlbumItem.styled';

const AlbumItem = () => {
  // const { data } = useGetCurrentUser();
  // const data = useGetQuery('user');
  // console.log(data);

  return (
    <>
      {/* {data &&
        data.myAlbums.map(({ name, _id: id, backgroundURL }) => {
          return (
            // Album
            <Item key={id}>
              <LinkItem to={`/album/${id}`}>
                <ImageBox>
                  <Image src={backgroundURL || defaultCover} alt="" />
                </ImageBox>
                <div>
                  <AlbumName>{name}</AlbumName>
                </div>
              </LinkItem>
            </Item>
          );
        })} */}
    </>
  );
};

export default AlbumItem;
