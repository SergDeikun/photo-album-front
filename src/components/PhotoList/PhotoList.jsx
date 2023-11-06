import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import LoadingBar from 'react-top-loading-bar';

import useGetAlbumById from 'react-query/useGetAlbumById';

import {
  AlbumTitle,
  List,
  ImageWrapper,
  LinkImg,
  PhotoItem,
  ImageLazyLoad,
} from './PhotoList.styled';

const individualStylesMobile = [
  // 1
  {
    width: '100px',
    height: '120px',
    marginTop: '10px',
  },
  // 2
  {
    width: '100px',
    height: '120px',
    marginTop: '30px',
    marginBottom: '10px',
  },
  // 3
  { width: '100px', height: '120px' },
  // 4
  {
    width: '120px',
    height: '100px',
  },
  // 5
  {
    width: '180px',
    height: '130px',
    marginBottom: '10px',
    marginLeft: 'auto',
  },
];
const individualStylesTablet = [
  // 1
  {
    width: '240px',
    height: '310px',
    marginTop: '30px',
  },
  // 2
  {
    width: '240px',
    height: '310px',
    marginTop: '70px',
    marginBottom: '40px',
  },
  // 3
  { width: '240px', height: '310px' },
  // 4
  {
    width: '270px',
    height: '200px',
  },
  // 5
  {
    width: '430px',
    height: '245px',
    marginBottom: '40px',
    marginLeft: 'auto',
  },
];
const individualStylesDesktop = [
  // 1
  {
    width: '400px',
    height: '530px',
    marginTop: '30px',
  },
  // 2
  {
    width: '400px',
    height: '530px',
    marginTop: '110px',
    marginBottom: '60px',
  },
  // 3
  { width: '400px', height: '530px' },
  // 4
  {
    width: '525px',
    height: '390px',
  },
  // 5
  {
    width: '635px',
    height: '475px',
    marginBottom: '60px',
  },
];

const PhotoList = () => {
  const { albumId } = useParams();
  const { data: currentAlbumData, isLoading } = useGetAlbumById(albumId);
  const [isLoadedPhoto, setIsLoadedPhoto] = useState([]);
  const [progress, setProgress] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  const handleImageLoad = index => {
    setIsLoadedPhoto(prevLoadedPhotos => [...prevLoadedPhotos, index]);
  };

  const getIndividualStyle = index => {
    if (isMobile) {
      return individualStylesMobile[index % individualStylesMobile.length];
    } else if (isTablet) {
      return individualStylesTablet[index % individualStylesTablet.length];
    } else if (isDesktop) {
      return individualStylesDesktop[index % individualStylesDesktop.length];
    }
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

      <List>
        {currentAlbumData &&
          currentAlbumData.photo.map((photo, index) => {
            const { _id: photoId, photoURL } = photo;
            const individualStyle = getIndividualStyle(index);
            return (
              <PhotoItem
                key={photoId}
                style={individualStyle}
                isLoaded={isLoadedPhoto.includes(index)}
              >
                <ImageWrapper isLoaded={isLoadedPhoto.includes(index)}>
                  <LinkImg
                    to={`/album/${albumId}/photo/${photoId}?index=${index}`}
                  >
                    <ImageLazyLoad
                      onLoad={() => handleImageLoad(index)}
                      src={photoURL}
                      alt="photo"
                    />
                  </LinkImg>
                </ImageWrapper>
              </PhotoItem>
            );
          })}
      </List>
    </>
  );
};

export default PhotoList;
