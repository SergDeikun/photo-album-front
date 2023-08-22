import { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import dayjs from 'dayjs';

import useGetAlbumById from 'react-query/useGetAlbumById';
import useUpdatePhoto from 'react-query/useUpdatePhoto';
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
  const { id: albumID } = useParams();
  const { data: currentAlbumData } = useGetAlbumById(albumID);
  // if (currentAlbumData) {
  //   console.log(currentAlbumData);
  // }
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [photoURLs, setPhotoURLs] = useState([]);
  const [photoIndex, setPhotoIndex] = useState(null);
  const { mutateAsync: deletePhoto } = useDeletePhoto();
  const { mutateAsync: updatePhoto } = useUpdatePhoto();
  const [isOpenInfo, setIsOpenInfo] = useState(false);
  const [isLoadedPhoto, setIsLoadedPhoto] = useState([]);
  const [place, setPlace] = useState('');
  const [comments, setComments] = useState('');
  const [date, setDate] = useState('');
  const [photoId, setPhotoId] = useState('');

  const handleImageLoad = index => {
    setIsLoadedPhoto(prevLoadedPhotos => [...prevLoadedPhotos, index]);
  };

  const handleOpenPhoto = (photo, index) => {
    setSelectedPhoto(photo);
    setPhotoIndex(index);
    setDate(photo.date);
    setPlace(photo.place);
    setComments(photo.comments);
    setPhotoId(photo._id);
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
    setPlace(newValue);
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

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await updatePhoto(
        {
          date,
          comments,
          place,
          photoId,
        },
        {
          onSuccess: () => {
            setIsOpenInfo(true);
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
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
                  {/* <Link to={`/photo/${photoId}`}> */}
                  <ImageLazyLoad
                    afterLoad={() => handleImageLoad(index)}
                    src={photoURL}
                    alt="photo"
                    onClick={() => {
                      setPhotoURLs(
                        currentAlbumData.photo.map(({ photoURL }) => photoURL)
                      );
                      handleOpenPhoto(photo, index);
                    }}
                  />
                  {/* </Link> */}
                </ImageWrapper>

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

                    {isOpenInfo && (
                      <InfoWrapper>
                        <CloseBtn onClick={handleToggleInfo} />
                        <Form
                          encType="multipart/form-data"
                          onSubmit={handleSubmit}
                          action=""
                        >
                          <FieldWrapper>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <DesktopDatePicker
                                inputFormat="DD.MM.YYYY"
                                value={dayjs(date, 'DD.MM.YYYY')}
                                onChange={newValue =>
                                  setDate(dayjs(newValue).format('DD.MM.YYYY'))
                                }
                                renderInput={params => (
                                  <TextField {...params} />
                                )}
                              />
                            </LocalizationProvider>
                            <button type="submit">ok</button>
                          </FieldWrapper>

                          <FieldWrapper>
                            <Place
                              place={place}
                              onSelect={handleSelectUpdatePlace}
                            />
                            <button type="submit">ok</button>
                          </FieldWrapper>

                          <FieldWrapper>
                            <textarea
                              aria-label="empty textarea"
                              placeholder="Comments"
                              style={{ width: 435, height: 175 }}
                              value={comments}
                              onChange={e => setComments(e.target.value)}
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
