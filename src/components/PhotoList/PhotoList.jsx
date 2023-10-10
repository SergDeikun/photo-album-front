import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

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
  const { albumId } = useParams();
  const { data: currentAlbumData, isLoading } = useGetAlbumById(albumId);
  const [isLoadedPhoto, setIsLoadedPhoto] = useState([]);
  const [progress, setProgress] = useState(0);

  const handleImageLoad = index => {
    setIsLoadedPhoto(prevLoadedPhotos => [...prevLoadedPhotos, index]);
  };

  useEffect(() => {
    if (isLoading) {
      setProgress(100);
    }
  }, [isLoading]);

  return (
    <>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
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
