import { useState } from 'react';
import { useParams } from 'react-router-dom';
// import Cookies from 'js-cookie';

import useGetAlbumById from 'react-query/useGetAlbumById';

import {
  AlbumTitle,
  Box,
  ImageWrapper,
  LinkImg,
  Thumb,
  ImageLazyLoad,
} from './PhotoList.styled';

const styles = [
  { marginTop: '30px', width: '400px', height: '532px' },
  { marginTop: '110px', width: '400px', height: '532px' },
  { width: '400px', height: '532px' },
  { width: '524px', height: '391px', marginTop: '60px' },
  { width: '635px', height: '474px', marginTop: '60px', marginBottom: '60px' },
];

const PhotoList = () => {
  // const token = Cookies.get('token');

  const { albumId } = useParams();
  const { data: currentAlbumData } = useGetAlbumById(albumId);
  const [isLoadedPhoto, setIsLoadedPhoto] = useState([]);

  const handleImageLoad = index => {
    setIsLoadedPhoto(prevLoadedPhotos => [...prevLoadedPhotos, index]);
  };

  return (
    <>
      {currentAlbumData && <AlbumTitle>{currentAlbumData.name}</AlbumTitle>}

      <Box>
        {currentAlbumData &&
          currentAlbumData.photo.map((photo, index) => {
            const { _id: photoId, photoURL } = photo;
            return (
              <Thumb
                key={photoId}
                style={styles[index % styles.length]}
                isLoaded={isLoadedPhoto.includes(index)}
              >
                <ImageWrapper isLoaded={isLoadedPhoto.includes(index)}>
                  <LinkImg
                    to={`/album/${albumId}/photo/${photoId}?index=${index}`}
                  >
                    <ImageLazyLoad
                      afterLoad={() => handleImageLoad(index)}
                      src={photoURL}
                      alt="photo"
                    />
                  </LinkImg>
                </ImageWrapper>
              </Thumb>
            );
          })}
      </Box>
    </>
  );
};

export default PhotoList;
