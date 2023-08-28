import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

// import TextField from '@mui/material/TextField';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

// import dayjs from 'dayjs';

import useGetAlbumById from 'react-query/useGetAlbumById';
// import useUpdatePhoto from 'react-query/useUpdatePhoto';
// import useDeletePhoto from 'react-query/useDeletePhotoById';

// import { showAlert } from 'helpers/showAlert';

// import PhotoLightBox from 'components/PhotoLightBox/PhotoLightBox';
// import InformationButton from 'components/Buttons/InformationButton/Information';

import {
  AlbumTitle,
  Box,
  ImageWrapper,
  Thumb,
  ImageLazyLoad,
  // Modal,
  // ButtonWrapper,
  // PhotoLightBoxImg,
  // DeleteBtn,
  // PrevBtnWrap,
  // PrevButton,
  // PrevButtonIcon,
  // NextBtnWrap,
  // NextButton,
  // NextButtonIcon,
  // InfoWrapper,
  // CloseBtn,
  // Form,
  // FieldWrapper,
  // Place,
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
  const { data: currentAlbumData } = useGetAlbumById(albumId);
  const [isLoadedPhoto, setIsLoadedPhoto] = useState([]);

  const handleImageLoad = index => {
    setIsLoadedPhoto(prevLoadedPhotos => [...prevLoadedPhotos, index]);
  };

  // const { name, photo, _id: albumId } = currentAlbumData;
  // const { id: albumId } = useParams();
  // const { data: currentAlbumData } = useGetAlbumById(albumId);
  // if (currentAlbumData) {
  //   console.log(currentAlbumData);
  // }
  // const [selectedPhoto, setSelectedPhoto] = useState(null);
  // const [photoURLs, setPhotoURLs] = useState([]);
  // const [photoIndex, setPhotoIndex] = useState(null);
  // const [photoId, setPhotoId] = useState('');
  // const { mutateAsync: deletePhoto } = useDeletePhoto();
  // const { mutateAsync: updatePhoto } = useUpdatePhoto();
  // const [isOpenInfo, setIsOpenInfo] = useState(false);
  // const [isLoadedPhoto, setIsLoadedPhoto] = useState([]);
  // const [place, setPlace] = useState('');
  // const [comments, setComments] = useState('');
  // const [date, setDate] = useState('');

  // const handleImageLoad = index => {
  //   setIsLoadedPhoto(prevLoadedPhotos => [...prevLoadedPhotos, index]);
  // };

  // const handleOpenPhoto = (photo, index) => {
  //   setSelectedPhoto(photo);
  //   setPhotoIndex(index);
  //   // setPhotoId(photo._id);
  //   // console.log(photo._id);
  // };

  // const handlePrevPhoto = useCallback(() => {
  //   if (photoIndex === 0) {
  //     setPhotoIndex(photoURLs.length - 1);
  //   } else {
  //     setPhotoIndex(photoIndex - 1);
  //   }
  // }, [photoIndex, photoURLs.length]);

  // const handleNextPhoto = useCallback(() => {
  //   if (photoIndex === photoURLs.length - 1) {
  //     setPhotoIndex(0);
  //   } else {
  //     setPhotoIndex(photoIndex + 1);
  //   }
  // }, [photoIndex, photoURLs.length]);

  // useEffect(() => {
  //   if (selectedPhoto) {
  //     document.body.style.overflow = 'hidden';

  //     const handleEscClose = e => {
  //       if (e.keyCode === 27) {
  //         // setIsOpenInfo(false);
  //         setSelectedPhoto(null);
  //       }
  //     };

  //     const handleKeyPress = e => {
  //       if (e.key === 'ArrowLeft') {
  //         handlePrevPhoto(photoIndex - 1);
  //       } else if (e.key === 'ArrowRight') {
  //         handleNextPhoto(photoIndex + 1);
  //       }
  //     };
  //     document.addEventListener('keydown', handleEscClose);
  //     document.addEventListener('keydown', handleKeyPress);

  //     return () => {
  //       document.body.style.overflow = 'auto';
  //       document.removeEventListener('keydown', handleEscClose);
  //       document.removeEventListener('keydown', handleKeyPress);
  //     };
  //   } else {
  //     document.body.style.overflow = 'auto';
  //   }
  // }, [
  //   handleNextPhoto,
  //   handlePrevPhoto,
  //   photoIndex,
  //   photoURLs.length,
  //   selectedPhoto,
  // ]);

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
                  <Link
                    to={`/album/${albumId}/photo/${photoId}?index=${index}`}
                  >
                    <ImageLazyLoad
                      afterLoad={() => handleImageLoad(index)}
                      src={photoURL}
                      alt="photo"
                      // onClick={() => {
                      //   setPhotoURLs(photo.map(({ photoURL }) => photoURL));
                      //   handleOpenPhoto(photo, index);
                      // }}
                    />
                  </Link>
                </ImageWrapper>
              </Thumb>
            );
          })}
      </Box>
    </>
  );
};

export default PhotoList;
