import { useState, useEffect, useCallback } from 'react';

import TextField from '@mui/material/TextField';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MdOutlineEdit } from 'react-icons/md';

import dayjs from 'dayjs';

import useGetPhotoById from 'react-query/useGetPhotoById';
import useDeletePhoto from 'react-query/useDeletePhotoById';
import useUpdatePhoto from 'react-query/useUpdatePhoto';

import { showAlert } from 'helpers/showAlert';

import InformationButton from 'components/Buttons/InformationButton/Information';
import Comments from 'components/Inputs/Comments/Comments';
import LocationButton from 'components/Buttons/LocationButton/LocationButton';

// import queryClient from 'react-query/queryClient';

import {
  // AlbumTitle,
  // Box,
  // ImageWrapper,
  // Thumb,
  // ImageLazyLoad,
  Modal,
  ButtonWrapper,
  // PhotoLightBoxImg,
  DeleteBtn,
  PrevBtnWrap,
  PrevButton,
  PrevButtonIcon,
  PhotoLightBoxImg,
  NextBtnWrap,
  NextButton,
  NextButtonIcon,
  InfoWrapper,
  CloseBtn,
  Form,
  FieldWrapper,
  Place,
} from '../PhotoLightBox/PhotoLightBox.styled';

const PhotoLightBox = ({
  photoId,
  onClose,
  photoIndex,
  currentAlbumPhotos,
}) => {
  const { data: currentPhotoData } = useGetPhotoById(photoId);

  const { mutateAsync: updatePhoto } = useUpdatePhoto();
  const { mutateAsync: deletePhoto } = useDeletePhoto();
  const [index, setIndex] = useState(photoIndex);
  const [isOpenInfo, setIsOpenInfo] = useState(false);
  const [date, setDate] = useState('');
  const [place, setPlace] = useState('');
  const [placeChange, setPlaceChange] = useState(false);
  const [comments, setComments] = useState('');
  const [commentsChange, setCommentsChange] = useState(false);

  const handlePrevPhoto = useCallback(() => {
    if (index === 0) {
      setIndex(currentAlbumPhotos.length - 1);
    } else {
      setIndex(index - 1);
    }
  }, [currentAlbumPhotos.length, index]);

  const handleNextPhoto = useCallback(() => {
    if (index === currentAlbumPhotos.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }, [currentAlbumPhotos.length, index]);

  useEffect(() => {
    if (currentPhotoData) {
      setDate(currentPhotoData.date);
      setPlace(currentPhotoData.place);
      setComments(currentPhotoData.comments);
      document.body.style.overflow = 'hidden';

      const handleEscClose = e => {
        if (e.keyCode === 27) {
          onClose();
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
  }, [currentPhotoData, handleNextPhoto, handlePrevPhoto, onClose, photoIndex]);

  const handleDelete = async id => {
    try {
      await deletePhoto(id, {
        onSuccess: () => {
          onClose();
        },
      });
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
    setPlaceChange(true);
  };

  const handleCommentsChange = e => {
    setComments(e.target.value);
    setCommentsChange(true);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await updatePhoto({
        date,
        comments,
        place,
        photoId,
      });
    } catch (error) {
      console.log(error);
    }

    setPlaceChange(false);
    setCommentsChange(false);
  };

  return (
    <>
      {currentPhotoData && (
        <Modal onClose={onClose}>
          <ButtonWrapper>
            <DeleteBtn onDelete={() => handleShowAlert(photoId)} />
            <InformationButton onClick={handleToggleInfo} />
          </ButtonWrapper>
          <PrevBtnWrap>
            <PrevButton type="button" onClick={handlePrevPhoto}>
              <PrevButtonIcon />
            </PrevButton>
          </PrevBtnWrap>

          <PhotoLightBoxImg
            src={currentAlbumPhotos[index]}
            height="100%"
            alt=""
          />

          <NextBtnWrap>
            <NextButton type="button" onClick={handleNextPhoto}>
              <NextButtonIcon />
            </NextButton>
          </NextBtnWrap>

          {/* Info */}

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
                      renderInput={params => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                  <button type="submit">
                    <MdOutlineEdit />
                  </button>
                </FieldWrapper>

                {/* Place */}

                <FieldWrapper>
                  <LocationButton />
                  <Place place={place} onSelect={handleSelectUpdatePlace} />
                  {placeChange && (
                    <button type="submit">
                      <MdOutlineEdit />
                    </button>
                  )}
                </FieldWrapper>

                {/* Comments */}

                <FieldWrapper>
                  <Comments value={comments} onChange={handleCommentsChange} />
                  {commentsChange && (
                    <button type="submit">
                      <MdOutlineEdit />
                    </button>
                  )}
                </FieldWrapper>
              </Form>
            </InfoWrapper>
          )}
        </Modal>
      )}
    </>
  );
};

export default PhotoLightBox;
