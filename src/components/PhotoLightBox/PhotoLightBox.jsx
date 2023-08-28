import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams, useLocation, Link } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
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

const PhotoLightBox = () => {
  const { albumId, photoId } = useParams();
  const { data: currentAlbumData } = useGetAlbumById(albumId);
  console.log(currentAlbumData);
  const { data: currentPhotoData } = useGetPhotoById(photoId);
  const { mutateAsync: updatePhoto } = useUpdatePhoto();
  const { mutateAsync: deletePhoto } = useDeletePhoto();
  const [isOpenInfo, setIsOpenInfo] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const index = queryParams.get('index') || 0;

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(parseInt(index));
  console.log(currentPhotoIndex);

  const [comments, setComments] = useState(
    currentAlbumData.photo[currentPhotoIndex].comments
  );
  const [commentsChange, setCommentsChange] = useState(false);
  const [date, setDate] = useState(
    currentAlbumData.photo[currentPhotoIndex].date
  );
  const [place, setPlace] = useState(
    currentAlbumData.photo[currentPhotoIndex].place
  );
  const [placeChange, setPlaceChange] = useState(false);

  const handleClose = () => {
    navigate(`/album/${albumId}`);
    // setCurrentPhotoIndex(null);
  };

  // const handlePrevPhoto = useCallback(() => {
  //   const newIndex =
  //     (currentPhotoIndex - 1 + currentAlbumData.photo.length) %
  //     currentAlbumData.photo.length;
  //   setCurrentPhotoIndex(newIndex);
  // }, [currentAlbumData.photo.length, currentPhotoIndex]);
  // console.log(currentAlbumData.photo[currentPhotoIndex]._id);

  const handlePrevPhoto = useCallback(() => {
    if (currentPhotoIndex === 0) {
      setCurrentPhotoIndex(currentAlbumData.length - 1);
    } else {
      setCurrentPhotoIndex(currentPhotoIndex - 1);
    }
  }, [currentAlbumData.length, currentPhotoIndex]);

  // const handleNextPhoto = useCallback(() => {
  //   const newIndex = (currentPhotoIndex + 1) % currentAlbumData.photo.length;
  //   setCurrentPhotoIndex(newIndex);
  // }, [currentAlbumData.photo.length, currentPhotoIndex]);

  useEffect(() => {
    if (currentAlbumData.photo) {
      // setDate(date);
      // setPlace(place);
      // setComments(comments);

      document.body.style.overflow = 'hidden';

      const handleEscClose = e => {
        if (e.keyCode === 27) {
          // onClose();
          navigate(`/album/${albumId}`);
        }
      };

      // const handleKeyPress = e => {
      //   if (e.key === 'ArrowLeft') {
      //     handlePrevPhoto(index - 1);
      //   } else if (e.key === 'ArrowRight') {
      //     handleNextPhoto(index + 1);
      //   }
      // };

      document.addEventListener('keydown', handleEscClose);
      // document.addEventListener('keydown', handleKeyPress);

      return () => {
        document.body.style.overflow = 'auto';
        document.removeEventListener('keydown', handleEscClose);
        // document.removeEventListener('keydown', handleKeyPress);
      };
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [
    albumId,
    comments,
    currentAlbumData.photo,
    currentPhotoIndex,
    date,
    navigate,
    place,
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
      {currentAlbumData && (
        <Modal onClose={handleClose}>
          <ButtonWrapper>
            <DeleteBtn onDelete={() => handleShowAlert(photoId)} />
            <InformationButton onClick={handleToggleInfo} />
          </ButtonWrapper>
          <PrevBtnWrap>
            <PrevButton
              type="button"
              // to={`/album/${albumId}/photo/${
              //   currentAlbumData.photo[currentPhotoIndex - 1]._id
              // }?index=${currentPhotoIndex - 1}`}
              onClick={handlePrevPhoto}
            >
              <PrevButtonIcon />
            </PrevButton>
          </PrevBtnWrap>

          <PhotoLightBoxImg
            src={currentAlbumData.photo[currentPhotoIndex].photoURL}
            height="100%"
            alt=""
          />

          <NextBtnWrap>
            <NextButton
            // type="button"
            // to={`/album/${albumId}/photo/${
            //   currentAlbumData.photo[currentPhotoIndex + 1]._id
            // }`}
            // onClick={handleNextPhoto}
            >
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
