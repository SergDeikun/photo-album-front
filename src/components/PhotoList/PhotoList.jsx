import { useParams } from 'react-router-dom';
import useGetAlbumById from 'react-query/useGetAlbumById';

import { AlbumTitle, Box, Thumb, LinkImg, Image } from './PhotoList.styled';

const styles = [
  { marginTop: '30px', width: '400px', height: '532px' },
  { marginTop: '110px', width: '400px', height: '532px' },
  { width: '400px', height: '532px' },
  { width: '524px', height: '391px', marginTop: '60px' },
  { width: '635px', height: '474px', marginTop: '60px', marginBottom: '60px' },
];

const PhotoList = () => {
  const { id } = useParams();
  // console.log(id);
  const { data } = useGetAlbumById(id);

  // if (data) {
  //   console.log(data);
  // }

  return (
    <>
      {data && <AlbumTitle>{data.name}</AlbumTitle>}
      <Box>
        {data &&
          data.photo.map(({ _id: id, photoURL }, index) => {
            return (
              <Thumb key={id} style={styles[index % styles.length]}>
                <LinkImg to={`/photo/${id}`}>
                  <Image src={photoURL} alt="" />
                </LinkImg>
              </Thumb>
            );
          })}
      </Box>
    </>
  );
};

export default PhotoList;
