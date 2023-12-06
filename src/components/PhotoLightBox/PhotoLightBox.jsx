import { useState, useEffect, useRef } from 'react';
import LoadingBar from 'react-top-loading-bar';
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/zoom';

import { EffectFade, Pagination, Keyboard } from 'swiper/modules';

import useDeletePhoto from 'react-query/useDeletePhotoById';
import useUpdatePhoto from 'react-query/useUpdatePhoto';

import { showAlert } from 'helpers/showAlert';

import DeleteButton from 'components/Buttons/DeleteButton/DeleteButton';
import InformationButton from 'components/Buttons/InformationButton/InformationButton';

import LocationButton from 'components/Buttons/LocationButton/LocationButton';

import {
  ButtonWrapper,
  ClosePhotoBtn,
  // CloseBtn,
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
  const { mutateAsync: updatePhoto } = useUpdatePhoto();
  const { mutateAsync: deletePhoto } = useDeletePhoto();
  const [isOpenInfo, setIsOpenInfo] = useState(false);
  const [comments, setComments] = useState('');
  const [date, setDate] = useState('');
  const [place, setPlace] = useState('');
  const [progress, setProgress] = useState(0);
  const [saveBtnVisible, setSaveBtnVisible] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isDateFocused, setIsDateFocused] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const swiperRef = useRef();
  const { _id: photoId } = currentPhoto;

  // first render

  useEffect(() => {
    setComments(currentPhoto.comments);
    setDate(currentPhoto.date);
    setPlace(currentPhoto.place);
  }, [currentPhoto.comments, currentPhoto.date, currentPhoto.place]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const handleEscClose = e => {
      if (e.keyCode === 27) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscClose);

    return () => {
      // document.body.style.overflowY = 'scroll';
      document.body.style.overflow = 'auto';

      document.removeEventListener('keydown', handleEscClose);
    };
  }, [onClose]);

  // Disabled / Enabled Swiper

  useEffect(() => {
    if (isOpenInfo) {
      swiperRef.current.disable();
    } else {
      swiperRef.current.enable();
    }
  }, [isOpenInfo]);

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
  const handleCommentsChange = e => {
    setComments(e.target.value);
    setSaveBtnVisible(currentPhoto.comments !== e.target.value);
  };

  const handleSelectUpdatePlace = newPlace => {
    setPlace(newPlace);
    setSaveBtnVisible(currentPhoto.place !== newPlace);
  };

  const handleDateChange = newDate => {
    setDate(newDate);
    setSaveBtnVisible(currentPhoto.date !== newDate);
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
    <>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <ButtonWrapper>
        <DeleteButton onDelete={() => handleShowAlert(photoId)} />
        <InformationButton onClick={handleToggleInfo} />
        <ClosePhotoBtn onClose={onClose} />
      </ButtonWrapper>
      <>
        <SwiperContainer
          onSwiper={swiper => {
            swiperRef.current = swiper;
          }}
          onSlideChange={swiper => {
            const currentIndex = swiper.activeIndex;
            const selectedPhoto = currentAlbum.photo[currentIndex];
            setComments(selectedPhoto.comments);
            setPlace(selectedPhoto.place);
            setDate(selectedPhoto.date);
          }}
          keyboard={{
            enabled: true,
          }}
          className="mySwiper"
          initialSlide={selectedIndex}
          effect={'fade'}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[EffectFade, Pagination, Keyboard]}
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

        {isOpenInfo && (
          <InfoWrapper>
            <CloseInfoBtn onClose={handleToggleInfo} />

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
                  onFocus={() => setIsDateFocused(true)}
                  onBlur={() => setIsDateFocused(false)}
                  isDateFocused={isDateFocused}
                />
              </FieldWrapper>

              {/* Save button */}

              {saveBtnVisible && (
                <SubmitButton
                  title="Save"
                  type="submit"
                  onClick={() => setProgress(100)}
                >
                  Save
                </SubmitButton>
              )}
            </Form>
          </InfoWrapper>
        )}
      </>
    </>
  );
};

export default PhotoLightBox;
