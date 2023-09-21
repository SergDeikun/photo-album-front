import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
import LoadingBar from 'react-top-loading-bar';

// import TextField from '@mui/material/TextField';
// import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { MdOutlineEdit } from 'react-icons/md';

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
  // InfoTitle,
  Form,
  FieldWrapper,
  DateField,
  Place,
  Comments,
  SubmitButton,
} from '../PhotoLightBox/PhotoLightBox.styled';

const PhotoLightBox = () => {
  const token = Cookies.get('token');

  const { albumId, photoId } = useParams();
  const { data: currentAlbumData } = useGetAlbumById(albumId, token);
  const { data: currentPhotoData } = useGetPhotoById(photoId, token);
  const { mutateAsync: updatePhoto } = useUpdatePhoto(token);
  const { mutateAsync: deletePhoto } = useDeletePhoto(token);
  const [isOpenInfo, setIsOpenInfo] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const index = queryParams.get('index') || 0;
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(parseInt(index));
  const [comments, setComments] = useState('');
  const [date, setDate] = useState('');
  const [place, setPlace] = useState('');
  const [progress, setProgress] = useState(0);
  const [saveBtnVisible, setSaveBtnVisible] = useState(false);

  useEffect(() => {
    if (currentPhotoData) {
      setComments(currentPhotoData.comments);
      setDate(currentPhotoData.date);
      setPlace(currentPhotoData.place);
    }
  }, [currentPhotoData]);

  const handleClose = () => {
    navigate(`/album/${albumId}`);
  };

  const handlePrevPhoto = useCallback(() => {
    if (currentAlbumData) {
      const newIndex =
        (currentPhotoIndex - 1 + currentAlbumData.photo.length) %
        currentAlbumData.photo.length;
      const newPhotoId = currentAlbumData.photo[newIndex]._id;

      setCurrentPhotoIndex(newIndex);
      setProgress(100);
      navigate(`/album/${albumId}/photo/${newPhotoId}?index=${newIndex}`);
    }
  }, [albumId, currentAlbumData, currentPhotoIndex, navigate]);

  const handleNextPhoto = useCallback(() => {
    if (currentAlbumData) {
      const newIndex = (currentPhotoIndex + 1) % currentAlbumData.photo.length;

      const newPhotoId = currentAlbumData.photo[newIndex]._id;

      setProgress(100);
      setCurrentPhotoIndex(newIndex);

      navigate(`/album/${albumId}/photo/${newPhotoId}?index=${newIndex}`);
    }
  }, [albumId, currentAlbumData, currentPhotoIndex, navigate]);

  useEffect(() => {
    if (currentPhotoData) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflowY = 'scroll';
    }

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

    document.addEventListener('keydown', handleEscClose);
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.body.style.overflowY = 'scroll';
      document.removeEventListener('keydown', handleEscClose);
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [
    albumId,
    currentPhotoData,
    currentPhotoIndex,
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
  };

  const handleDateChange = newDate => {
    setDate(dayjs(newDate).format('DD.MM.YYYY'));
    setSaveBtnVisible(true);
  };

  const handleSelectUpdatePlace = newPlace => {
    setPlace(newPlace);
    setSaveBtnVisible(true);
  };

  const handleCommentsChange = e => {
    setComments(e.target.value);
    setSaveBtnVisible(true);
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

    setSaveBtnVisible(false);
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
                {/* <InfoTitle>Information</InfoTitle> */}
              </InfoBlock>

              <Form
                encType="multipart/form-data"
                onSubmit={handleSubmit}
                action=""
              >
                {/* Comments */}

                <FieldWrapper>
                  <Comments
                    placeholder="Add comments"
                    initialComments={comments}
                    onCommentsChange={handleCommentsChange}
                  />
                </FieldWrapper>

                {/* Date */}

                <FieldWrapper>
                  <DateField
                    initialDate={date}
                    onDateChange={handleDateChange}
                  />
                </FieldWrapper>

                {/* Place */}

                <FieldWrapper>
                  <LocationButton />
                  <Place place={place} onSelect={handleSelectUpdatePlace} />
                </FieldWrapper>

                {/* Save button */}

                {saveBtnVisible && (
                  <SubmitButton type="submit" onClick={() => setProgress(100)}>
                    Save
                  </SubmitButton>
                )}
              </Form>
            </InfoWrapper>
          )}
        </>
      )}
    </WrapperBox>
  );
};

export default PhotoLightBox;
