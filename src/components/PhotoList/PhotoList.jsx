import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import PhotoLightBox from 'components/PhotoLightBox/PhotoLightBox';

import {
  AlbumTitle,
  List,
  ImageWrapper,
  PhotoItem,
  ImageLazyLoad,
  ModalWindow,
} from './PhotoList.styled';

const individualStylesMobile = [
  // 1
  {
    height: '200px',
    marginTop: '10px',
  },
  // 2
  {
    height: '200px',
    marginTop: '30px',
  },
  // 3
  {
    height: '200px',
  },
  // 4
  {
    flexBasis: '30%',
    height: '180px',
    marginTop: '10px',
  },
  // 5
  {
    flexBasis: '60%',
    height: '200px',
    marginLeft: 'auto',
  },
];
const individualStylesTablet = [
  // 1
  {
    height: '310px',
    marginTop: '30px',
  },
  // 2
  {
    height: '310px',
    marginTop: '70px',
    marginBottom: '10px',
  },
  // 3
  {
    height: '310px',
  },
  // 4
  {
    flexBasis: '40%',
    height: '200px',
  },
  // 5
  {
    flexBasis: '50%',
    height: '245px',
    marginBottom: '10px',
    marginLeft: 'auto',
  },
];
const individualStylesDesktop = [
  // 1
  {
    height: '530px',
    // marginTop: '30px',
    marginTop: '35px',
  },
  // 2
  {
    height: '530px',
    marginTop: '110px',
    marginBottom: '10px',
  },
  // 3
  {
    height: '530px',
  },
  // 4
  {
    flexBasis: '40%',
    width: '525px',
    height: '390px',
  },
  // 5
  {
    flexBasis: '50%',
    width: '635px',
    height: '475px',
    marginBottom: '10px',
    marginLeft: 'auto',
  },
];

const PhotoList = ({ currentAlbumData, isLoading, readOnly }) => {
  const [isLoadedPhoto, setIsLoadedPhoto] = useState([]);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const [isOpenPhoto, setIsOpenPhoto] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  const [currentPhoto, setCurrentPhoto] = useState('');

  const handleOpenPhoto = () => {
    setIsOpenPhoto(!isOpenPhoto);
  };

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

  return (
    <>
      {currentAlbumData && <AlbumTitle>{currentAlbumData.name}</AlbumTitle>}

      <List>
        {currentAlbumData &&
          currentAlbumData.photo.map((photo, index) => {
            const { _id: photoId, photoURL } = photo;
            const individualStyle = getIndividualStyle(index);
            return (
              <PhotoItem
                onClick={() => {
                  handleOpenPhoto();
                  setSelectedPhotoIndex(index);
                  setCurrentPhoto(photo);
                }}
                key={photoId}
                style={individualStyle}
                isLoaded={isLoadedPhoto.includes(index)}
              >
                <ImageWrapper isLoaded={isLoadedPhoto.includes(index)}>
                  <ImageLazyLoad
                    onLoad={() => handleImageLoad(index)}
                    src={photoURL}
                    alt="photo"
                  />
                  {/* </LinkImg> */}
                </ImageWrapper>
              </PhotoItem>
            );
          })}
      </List>

      {isOpenPhoto && (
        <ModalWindow onClose={handleOpenPhoto}>
          <PhotoLightBox
            currentAlbum={currentAlbumData}
            selectedIndex={selectedPhotoIndex}
            currentPhoto={currentPhoto}
            onClose={handleOpenPhoto}
            readOnly={readOnly}
          />
        </ModalWindow>
      )}
    </>
  );
};

export default PhotoList;
