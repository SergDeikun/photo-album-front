import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

import useGetPhotoById from 'react-query/useGetPhotoById';
import useGetAlbumById from 'react-query/useGetAlbumById';
import useDeletePhoto from 'react-query/useDeletePhotoById';
import useUpdatePhoto from 'react-query/useUpdatePhoto';

import { showAlert } from 'helpers/showAlert';

import InformationButton from 'components/Buttons/InformationButton/InformationButton';
import LocationButton from 'components/Buttons/LocationButton/LocationButton';

import {
  WrapperBox,
  ButtonWrapper,
  DeleteBtn,
  CloseBtn,
  PrevBtnWrap,
  PrevButton,
  PrevButtonIcon,
  PhotoLightBoxImg,
  NextBtnWrap,
  NextButton,
  NextButtonIcon,
  InfoWrapper,
  InfoBlock,
  Form,
  FieldWrapper,
  CloseInfoBtn,
  DateField,
  Place,
  Comments,
  SubmitButton,
} from '../PhotoLightBox/PhotoLightBox.styled';

const PhotoLightBox = () => {
  const { albumId, photoId } = useParams();
  const { data: currentAlbumData } = useGetAlbumById(albumId);
  const { data: currentPhotoData, isLoading } = useGetPhotoById(photoId);
  const { mutateAsync: updatePhoto } = useUpdatePhoto();
  const { mutateAsync: deletePhoto } = useDeletePhoto();
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
    if (isLoading) {
      setProgress(100);
    }

    if (currentPhotoData) {
      setComments(currentPhotoData.comments);
      setDate(currentPhotoData.date);
      setPlace(currentPhotoData.place);
    }
  }, [currentPhotoData, isLoading]);

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
      navigate(`/album/${albumId}/photo/${newPhotoId}?index=${newIndex}`);
    }
  }, [albumId, currentAlbumData, currentPhotoIndex, navigate]);

  const handleNextPhoto = useCallback(() => {
    if (currentAlbumData) {
      const newIndex = (currentPhotoIndex + 1) % currentAlbumData.photo.length;

      const newPhotoId = currentAlbumData.photo[newIndex]._id;

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
    setDate(newDate);

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
        <CloseBtn onClose={() => navigate(`/album/${albumId}`)} />
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
                <CloseInfoBtn onClose={handleToggleInfo} />
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
                    value={comments}
                    // initialComments={comments}
                    onCommentsChange={handleCommentsChange}
                  />
                </FieldWrapper>

                {/* Date */}

                <FieldWrapper>
                  <DateField value={date} onDateChange={handleDateChange} />
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
