import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

import TextField from '@mui/material/TextField';
// import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MdOutlineEdit } from 'react-icons/md';

import dayjs from 'dayjs';

import useGetPhotoById from 'react-query/useGetPhotoById';
import useGetAlbumById from 'react-query/useGetAlbumById';
import useDeletePhoto from 'react-query/useDeletePhotoById';
import useUpdatePhoto from 'react-query/useUpdatePhoto';

import { showAlert } from 'helpers/showAlert';

import InformationButton from 'components/Buttons/InformationButton/Information';
import LocationButton from 'components/Buttons/LocationButton/LocationButton';

import {
  // AlbumTitle,
  // Box,
  // ImageWrapper,
  // Thumb,
  // ImageLazyLoad,
  WrapperBox,
  ButtonWrapper,
  DeleteBtn,
  PrevBtnWrap,
  PrevButton,
  PrevButtonIcon,
  PhotoLightBoxImg,
  NextBtnWrap,
  NextButton,
  NextButtonIcon,
  InfoWrapper,
  InfoBlock,
  CloseBtn,
  InfoTitle,
  Form,
  FieldWrapper,
  Place,
  Comments,
  SubmitButton,
} from '../PhotoLightBox/PhotoLightBox.styled';

import { DateField } from 'components/Forms/PhotoForm/PhotoForm.styled';

const PhotoLightBox = () => {
  const { albumId, photoId } = useParams();
  const { data: currentAlbumData } = useGetAlbumById(albumId);
  const { data: currentPhotoData } = useGetPhotoById(photoId);
  const { mutateAsync: updatePhoto } = useUpdatePhoto();
  const { mutateAsync: deletePhoto } = useDeletePhoto();
  const [isOpenInfo, setIsOpenInfo] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const index = queryParams.get('index') || 0;
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(parseInt(index));

  // Comments

  const [comments, setComments] = useState('');
  const [commentsChange, setCommentsChange] = useState(false);
  // console.log(commentsChange);

  // Date

  const [date, setDate] = useState('');

  // Place

  const [place, setPlace] = useState('');

  const [placeChange, setPlaceChange] = useState(false);
  console.log(placeChange);

  const [progress, setProgress] = useState(0);

  const handleClose = () => {
    navigate(`/album/${albumId}`);
  };

  const handlePrevPhoto = useCallback(() => {
    const newIndex =
      (currentPhotoIndex - 1 + currentAlbumData.photo.length) %
      currentAlbumData.photo.length;

    const newPhotoId = currentAlbumData.photo[newIndex]._id;

    setCurrentPhotoIndex(newIndex);
    setProgress(100);
    navigate(`/album/${albumId}/photo/${newPhotoId}?index=${newIndex}`);
  }, [albumId, currentAlbumData.photo, currentPhotoIndex, navigate]);

  const handleNextPhoto = useCallback(() => {
    const newIndex = (currentPhotoIndex + 1) % currentAlbumData.photo.length;

    const newPhotoId = currentAlbumData.photo[newIndex]._id;

    setProgress(100);
    setCurrentPhotoIndex(newIndex);

    navigate(`/album/${albumId}/photo/${newPhotoId}?index=${newIndex}`);
  }, [albumId, currentAlbumData.photo, currentPhotoIndex, navigate]);

  useEffect(() => {
    if (currentAlbumData.photo && currentAlbumData.photo.length > 0) {
      const initialPhoto = currentAlbumData.photo[currentPhotoIndex];
      setComments(initialPhoto.comments);
      setDate(initialPhoto.date);
      setPlace(initialPhoto.place);
    }
  }, [currentAlbumData.photo, currentPhotoIndex]);

  useEffect(() => {
    const handleEscClose = e => {
      if (e.keyCode === 27) {
        navigate(`/album/${albumId}`);
      }
    };

    const handleKeyPress = e => {
      if (!isOpenInfo) {
        if (e.key === 'ArrowLeft') {
          handlePrevPhoto(index - 1);
        } else if (e.key === 'ArrowRight') {
          handleNextPhoto(index + 1);
        }
      }
    };

    if (currentPhotoData) {
      document.body.style.overflow = 'hidden';

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
    albumId,
    currentPhotoData,
    handleNextPhoto,
    handlePrevPhoto,
    index,
    isOpenInfo,
    navigate,
  ]);

  const handleDelete = async id => {
    try {
      await deletePhoto(id, {
        onSuccess: () => {
          navigate(`/album/${albumId}`);
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
    setCommentsChange(false);
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
    <WrapperBox onClose={handleClose}>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <ButtonWrapper>
        <DeleteBtn onDelete={() => handleShowAlert(photoId)} />
        <InformationButton onClick={handleToggleInfo} />
      </ButtonWrapper>

      {currentPhotoData && (
        <>
          {!isOpenInfo && (
            <PrevBtnWrap>
              <PrevButton type="button" onClick={handlePrevPhoto}>
                <PrevButtonIcon />
              </PrevButton>
            </PrevBtnWrap>
          )}

          <PhotoLightBoxImg
            src={currentPhotoData.photoURL}
            height="100%"
            alt=""
          />

          {!isOpenInfo && (
            <NextBtnWrap>
              <NextButton type="button" onClick={handleNextPhoto}>
                <NextButtonIcon />
              </NextButton>
            </NextBtnWrap>
          )}

          {isOpenInfo && (
            <InfoWrapper>
              <InfoBlock>
                <CloseBtn onClick={handleToggleInfo} />
                <InfoTitle>Information</InfoTitle>
              </InfoBlock>

              <Form
                encType="multipart/form-data"
                onSubmit={handleSubmit}
                action=""
              >
                <FieldWrapper>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateField
                      startIcon
                      required={false}
                      inputFormat="DD.MM.YYYY"
                      maxDate={new Date()}
                      value={dayjs(date, 'DD.MM.YYYY')}
                      onChange={newValue =>
                        setDate(dayjs(newValue).format('DD.MM.YYYY'))
                      }
                      renderInput={params => (
                        <TextField
                          position="start"
                          {...params}
                          value={date || ''}
                          error={!date}
                        />
                      )}
                    />
                  </LocalizationProvider>
                  <SubmitButton type="submit " onClick={() => setProgress(100)}>
                    Save
                  </SubmitButton>
                </FieldWrapper>

                {/* Place */}

                <FieldWrapper>
                  <LocationButton />
                  <Place place={place} onSelect={handleSelectUpdatePlace} />
                  {/* {placeChange && (
                    <SubmitButton
                      type="submit"
                      onClick={() => setProgress(100)}
                    >
                      Save
                    </SubmitButton>
                  )} */}
                </FieldWrapper>

                {/* Comments */}

                <FieldWrapper>
                  <Comments
                    aria-label="empty textarea"
                    placeholder="Add comments"
                    value={comments}
                    onChange={handleCommentsChange}
                  />
                  {/* {commentsChange && (
                    <SubmitButton
                      type="submit"
                      onClick={() => setProgress(100)}
                    >
                      Save
                    </SubmitButton>
                  )} */}
                </FieldWrapper>
                {placeChange ||
                  (commentsChange && (
                    <SubmitButton
                      type="submit"
                      onClick={() => setProgress(100)}
                    >
                      Save
                    </SubmitButton>
                  ))}
              </Form>
            </InfoWrapper>
          )}
        </>
      )}
    </WrapperBox>
  );
};

export default PhotoLightBox;
