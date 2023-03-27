import { useParams } from 'react-router-dom';

import useGetAlbumById from 'react-query/useGetAlbumById';

import { AlbumTitle, Box, Image } from './PhotoList.styled';

const styles = [
  { marginTop: '30px', width: '400px', height: '532px' },
  { marginTop: '110px', width: '400px', height: '532px' },
  { marginTop: '0px', width: '400px', height: '532px' },
  { width: '524px', height: '391px', marginTop: '60px' },
  { width: '635px', height: '474px', marginTop: '60px' },
];

const PhotoList = () => {
  const { id } = useParams();
  const { data } = useGetAlbumById(id);

  // if (data) {
  //   console.log(data);
  // }

  return (
    <>
      {data && <AlbumTitle>{data.name}</AlbumTitle>}
      <Box>
        {data &&
          data.photo.map((item, index, id) => {
            return (
              <div key={index} style={styles[index % styles.length]}>
                <Image src={item.photoURL} alt="" />
              </div>
            );
          })}
      </Box>
    </>
  );
};

export default PhotoList;
