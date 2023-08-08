import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import dayjs from 'dayjs';

import useGetAlbumById from 'react-query/useGetAlbumById';

import useDeletePhoto from 'react-query/useDeletePhotoById';
import { showAlert } from 'helpers/showAlert';

import InformationButton from 'components/Buttons/InformationButton/Information';

import {
  AlbumTitle,
  Box,
  ImageWrapper,
  Thumb,
  ImageLazyLoad,
  Modal,
  ButtonWrapper,
  PhotoLightBoxImg,
  DeleteBtn,
  PrevBtnWrap,
  PrevButton,
  PrevButtonIcon,
  NextBtnWrap,
  NextButton,
  NextButtonIcon,
  InfoWrapper,
  CloseBtn,
  Form,
  FieldWrapper,
  Place,
} from './PhotoList.styled';

const styles = [
  { marginTop: '30px', width: '400px', height: '532px' },
  { marginTop: '110px', width: '400px', height: '532px' },
  { width: '400px', height: '532px' },
  { width: '524px', height: '391px', marginTop: '60px' },
  { width: '635px', height: '474px', marginTop: '60px', marginBottom: '60px' },
];

const PhotoList = () => {
  const { id } = useParams();
  const { data } = useGetAlbumById(id);
  // if (data) {
  //   console.log(data.photo);
  // }
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [photoURLs, setPhotoURLs] = useState([]);
  const [photoIndex, setPhotoIndex] = useState(null);
  const [isOpenInfo, setIsOpenInfo] = useState(false);
  const { mutateAsync: deletePhoto } = useDeletePhoto();
  const [isLoadedPhoto, setIsLoadedPhoto] = useState([]);
  const [updatePlace, setUpdatePlace] = useState('');
  const [updateComments, setUpdateComments] = useState('');
  const [updateDate, setUpdateDate] = useState('');

  const handleImageLoad = index => {
    setIsLoadedPhoto(prevLoadedPhotos => [...prevLoadedPhotos, index]);
  };

  const handleOpenPhoto = (photo, index) => {
    setSelectedPhoto(photo);
    setPhotoIndex(index);
    setUpdateComments(photo.comments);
    const formatDate = dayjs(photo.date, 'DD.MM.YYYY');
    setUpdateDate(formatDate);
  };

  const handleDelete = async id => {
    try {
      await deletePhoto(id);
    } catch (error) {
      console.log(error);
    }
  };

  const handleShowAlert = id => {
    showAlert(id, handleDelete);
  };

  const handleToggleInfo = () => {
    setIsOpenInfo(!isOpenInfo);
  };

  const handleSelectUpdatePlace = newValue => {
    setUpdatePlace(newValue);
  };

  const handlePrevPhoto = useCallback(() => {
    if (photoIndex === 0) {
      setPhotoIndex(photoURLs.length - 1);
    } else {
      setPhotoIndex(photoIndex - 1);
    }
  }, [photoIndex, photoURLs.length]);

  const handleNextPhoto = useCallback(() => {
    if (photoIndex === photoURLs.length - 1) {
      setPhotoIndex(0);
    } else {
      setPhotoIndex(photoIndex + 1);
    }
  }, [photoIndex, photoURLs.length]);

  useEffect(() => {
    if (selectedPhoto) {
      document.body.style.overflow = 'hidden';

      const handleEscClose = e => {
        if (e.keyCode === 27) {
          setIsOpenInfo(false);
          setSelectedPhoto(null);
        }
      };

      const handleKeyPress = e => {
        if (e.key === 'ArrowLeft') {
          handlePrevPhoto(photoIndex - 1);
        } else if (e.key === 'ArrowRight') {
          handleNextPhoto(photoIndex + 1);
        }
      };
      document.addEventListener('keydown', handleEscClose);
      document.addEventListener('keydown', handleKeyPress);

      return () => {
        document.body.style.overflow = 'auto';
        document.removeEventListener('keydown', handleEscClose);
        document.removeEventListener('keydown', handleKeyPress);
      };
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [
    handleNextPhoto,
    handlePrevPhoto,
    photoIndex,
    photoURLs.length,
    selectedPhoto,
  ]);

  return (
    <>
      {data && <AlbumTitle>{data.name}</AlbumTitle>}
      <Box>
        {data &&
          data.photo.map((photo, index) => {
            const { _id: photoId, photoURL, place } = photo;
            // console.log(place);
            return (
              <Thumb
                key={photoId}
                style={styles[index % styles.length]}
                isLoaded={isLoadedPhoto.includes(index)}
              >
                <ImageWrapper isLoaded={isLoadedPhoto.includes(index)}>
                  {/* <Link to={`/photo/${photoId}`}> */}
                  <ImageLazyLoad
                    afterLoad={() => handleImageLoad(index)}
                    src={photoURL}
                    alt="photo"
                    onClick={() => {
                      setPhotoURLs(data.photo.map(({ photoURL }) => photoURL));
                      handleOpenPhoto(photo, index);
                    }}
                  />
                  {/* </Link> */}
                </ImageWrapper>

                {/* PhotoLightBox */}

                {selectedPhoto && selectedPhoto === photo && (
                  <Modal onClose={() => setSelectedPhoto(null)}>
                    <ButtonWrapper>
                      <DeleteBtn onDelete={() => handleShowAlert(photoId)} />
                      <InformationButton onClick={handleToggleInfo} />
                    </ButtonWrapper>
                    <PrevBtnWrap>
                      <PrevButton type="button" onClick={handlePrevPhoto}>
                        <PrevButtonIcon />
                      </PrevButton>
                    </PrevBtnWrap>
                    <PhotoLightBoxImg src={photoURLs[photoIndex]} alt="img" />
                    <NextBtnWrap>
                      <NextButton type="button" onClick={handleNextPhoto}>
                        <NextButtonIcon />
                      </NextButton>
                    </NextBtnWrap>

                    {/* Info */}

                    {isOpenInfo && (
                      <InfoWrapper>
                        <CloseBtn onClick={handleToggleInfo} />
                        <Form encType="multipart/form-data" action="">
                          {/* Date */}

                          <FieldWrapper>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <DesktopDatePicker
                                inputFormat="DD.MM.YYYY"
                                value={updateDate}
                                onChange={newValue => setUpdateDate(newValue)}
                                renderInput={params => (
                                  <TextField {...params} />
                                )}
                              />
                            </LocalizationProvider>
                            <button type="submit">ok</button>
                          </FieldWrapper>

                          {/* Place */}

                          <FieldWrapper>
                            <Place
                              // defaultValue="London"
                              place={place}
                              onSelect={handleSelectUpdatePlace}
                            />
                            <button type="submit">ok</button>
                          </FieldWrapper>

                          {/* Comments */}

                          <FieldWrapper>
                            <textarea
                              aria-label="empty textarea"
                              placeholder="Comments"
                              style={{ width: 435, height: 175 }}
                              value={updateComments}
                              onChange={e => setUpdateComments(e.target.value)}
                            />
                            <button type="submit">ok</button>
                          </FieldWrapper>
                        </Form>
                      </InfoWrapper>
                    )}
                  </Modal>
                )}
              </Thumb>
            );
          })}
      </Box>
    </>
  );
};

export default PhotoList;
