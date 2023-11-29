import { useState, useEffect, useCallback, useRef } from 'react';
// import { useNavigate, useParams, useLocation } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/zoom';

import { EffectFade, Pagination, Zoom } from 'swiper/modules';

// import useGetPhotoById from 'react-query/useGetPhotoById';
// import useGetAlbumById from 'react-query/useGetAlbumById';
import useDeletePhoto from 'react-query/useDeletePhotoById';
import useUpdatePhoto from 'react-query/useUpdatePhoto';

import { showAlert } from 'helpers/showAlert';

// import Backdrop from 'components/Backdrop/Backdrop';
import DeleteButton from 'components/Buttons/DeleteButton/DeleteButton';
import InformationButton from 'components/Buttons/InformationButton/InformationButton';
import LocationButton from 'components/Buttons/LocationButton/LocationButton';

import {
  ButtonWrapper,
  CloseBtn,
  PrevBtnWrap,
  PrevButton,
  PrevButtonIcon,
  SwiperContainer,
  Slide,
  PhotoLightBoxImg,
  NextBtnWrap,
  NextButton,
  NextButtonIcon,
  InfoWrapper,
  Form,
  FieldWrapper,
  CloseInfoBtn,
  DateField,
  Place,
  Comments,
  // MapBtn,
  SubmitButton,
} from '../PhotoLightBox/PhotoLightBox.styled';

const PhotoLightBox = ({
  currentAlbum,
  selectedIndex,
  currentPhoto,
  onClose,
}) => {
  // console.log(currentAlbum);
  // const { albumId, photoId } = useParams();
  // const { data: currentAlbumData, isLoading } = useGetAlbumById(albumId);
  // const { data: currentPhotoData, isLoading } = useGetPhotoById(photoId);
  const { mutateAsync: updatePhoto } = useUpdatePhoto();
  const { mutateAsync: deletePhoto } = useDeletePhoto();
  const [isOpenInfo, setIsOpenInfo] = useState(false);
  // const navigate = useNavigate();
  // const location = useLocation();
  // const queryParams = new URLSearchParams(location.search);
  // const index = queryParams.get('index') || 0;
  // const [currentPhotoIndex, setCurrentPhotoIndex] = useState(parseInt(index));
  const [comments, setComments] = useState('');
  const [date, setDate] = useState('');
  const [place, setPlace] = useState('');
  const [progress, setProgress] = useState(0);
  const [saveBtnVisible, setSaveBtnVisible] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isDateFocused, setIsDateocused] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const swiperRef = useRef();
  const { _id: photoId } = currentPhoto;

  useEffect(() => {
    // if (isLoading) {
    //   setProgress(100);
    // }

    // if (currentPhotoData) {
    //   setComments(currentPhotoData.comments);
    //   setDate(currentPhotoData.date);
    //   setPlace(currentPhotoData.place);
    // }
    // if (currentAlbumData) {
    setComments(currentPhoto.comments);
    setDate(currentPhoto.date);
    setPlace(currentPhoto.place);
    // }
  }, [
    currentPhoto.comments,
    currentPhoto.date,
    currentPhoto.place,
    // currentPhotoIndex,
  ]);

  // const handleClose = () => {
  //   navigate(`/album/${albumId}`);
  // };

  // const handlePrevPhoto = useCallback(() => {
  //   if (currentAlbumData) {
  //     const newIndex =
  //       (currentPhotoIndex - 1 + currentAlbumData.photo.length) %
  //       currentAlbumData.photo.length;
  //     const newPhotoId = currentAlbumData.photo[newIndex]._id;

  //     setCurrentPhotoIndex(newIndex);
  //     navigate(`/album/${albumId}/photo/${newPhotoId}?index=${newIndex}`);
  //   }
  // }, [albumId, currentAlbumData, currentPhotoIndex, navigate]);

  // const handleNextPhoto = useCallback(() => {
  //   if (currentAlbumData) {
  //     const newIndex = (currentPhotoIndex + 1) % currentAlbumData.photo.length;

  //     const newPhotoId = currentAlbumData.photo[newIndex]._id;

  //     setCurrentPhotoIndex(newIndex);
  //     navigate(`/album/${albumId}/photo/${newPhotoId}?index=${newIndex}`);
  //   }
  // }, [albumId, currentAlbumData, currentPhotoIndex, navigate]);

  useEffect(() => {
    // if (currentPhotoData) {
    document.body.style.overflow = 'hidden';
    // } else {
    // document.body.style.overflowY = 'scroll';
    // }

    const handleEscClose = e => {
      if (e.keyCode === 27) {
        onClose();
        // navigate(`/album/${albumId}`);
      }
    };

    // const handleKeyPress = e => {
    //   if (!isOpenInfo) {
    //     if (e.key === 'ArrowLeft') {
    //       handlePrevPhoto(index - 1);
    //     } else if (e.key === 'ArrowRight') {
    //       handleNextPhoto(index + 1);
    //     }
    //   }
    // };

    document.addEventListener('keydown', handleEscClose);
    // document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.body.style.overflowY = 'scroll';
      document.removeEventListener('keydown', handleEscClose);
      // document.removeEventListener('keydown', handleKeyPress);
    };
  }, [onClose]);

  const handleDelete = async id => {
    try {
      await deletePhoto(id, {
        onSuccess: () => {
          // navigate(`/album/${albumId}`);
          // navigate(`/album/${currentAlbum.id}`);
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

  // const handleSubmit = async e => {
  //   e.preventDefault();

  //   try {
  //     await updatePhoto({
  //       date,
  //       comments,
  //       place,
  //       photoId,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }

  //   setSaveBtnVisible(false);
  // };

  return (
    // <Backdrop onClose={handleClose}>
    <>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <ButtonWrapper>
        <DeleteButton onDelete={() => handleShowAlert(photoId)} />
        <InformationButton onClick={handleToggleInfo} />
        {/* <CloseBtn onClose={() => navigate(`/album/${albumId}`)} /> */}
        {/* <CloseBtn onClose={onClose} /> */}
      </ButtonWrapper>

      {currentAlbum && (
        <>
          <SwiperContainer
            onSwiper={swiper => {
              swiperRef.current = swiper;
            }}
            // zoom={true}
            className="mySwiper"
            // initialSlide={currentPhotoIndex}
            initialSlide={selectedIndex}
            effect={'fade'}
            pagination={{
              dynamicBullets: true,
              backgroundColor: 'red',
            }}
            modules={[EffectFade, Pagination, Zoom]}
          >
            {/* PrevButton */}

            {!isOpenInfo && isDesktop && (
              <PrevBtnWrap>
                <PrevButton
                  type="button"
                  onClick={() => swiperRef.current.slidePrev()}
                >
                  <PrevButtonIcon />
                </PrevButton>
              </PrevBtnWrap>
            )}

            {/* SwiperSlide */}

            {currentAlbum.photo.map((photo, index) => (
              <Slide key={index}>
                <PhotoLightBoxImg src={photo.photoURL} alt="photo" />
              </Slide>
            ))}

            {/* NextButton */}

            {!isOpenInfo && isDesktop && (
              <NextBtnWrap>
                <NextButton
                  type="button"
                  onClick={() => swiperRef.current.slideNext()}
                >
                  <NextButtonIcon />
                </NextButton>
              </NextBtnWrap>
            )}
          </SwiperContainer>

          {/* Info */}

          <AnimatePresence>
            {isOpenInfo && (
              <motion.div
                key={isOpenInfo}
                style={
                  {
                    // position: 'absolute',
                    // zindex: '10',
                    // width: '320px',
                    // left: '1050px',
                    // top: '0',
                    // backgroundColor: 'black',
                    // padding: '115px 20px',
                  }
                }
                initial={{
                  opacity: 0,
                  // x: -25,
                  x: 25,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  // x: -25,
                  x: 25,
                }}
                transition={{ duration: 0.2 }}
              >
                <InfoWrapper>
                  <CloseInfoBtn onClose={handleToggleInfo} />

                  <Form
                    encType="multipart/form-data"
                    // onSubmit={handleSubmit}
                    action=""
                  >
                    {/* Comments */}

                    <FieldWrapper>
                      <Comments
                        placeholder="Add comments"
                        value={comments}
                        onChange={handleCommentsChange}
                      />
                    </FieldWrapper>

                    {/* Place */}

                    <FieldWrapper>
                      <Place
                        place={place}
                        onSelect={handleSelectUpdatePlace}
                        onFocus={() => setIsInputFocused(true)}
                        onBlur={() => setIsInputFocused(false)}
                      />
                      <LocationButton isInputFocused={isInputFocused} />
                    </FieldWrapper>

                    {/* Date */}

                    <FieldWrapper>
                      <DateField
                        value={date}
                        onChange={handleDateChange}
                        onFocus={() => setIsDateocused(true)}
                        onBlur={() => setIsDateocused(false)}
                        isDateFocused={isDateFocused}
                      />
                    </FieldWrapper>

                    {/* Save button */}

                    {saveBtnVisible && (
                      <SubmitButton
                        type="submit"
                        onClick={() => setProgress(100)}
                      >
                        Save
                      </SubmitButton>
                    )}
                  </Form>
                </InfoWrapper>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </>
    // </Backdrop>
  );
};

export default PhotoLightBox;
