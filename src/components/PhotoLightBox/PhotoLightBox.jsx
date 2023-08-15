import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import dayjs from 'dayjs';

import useGetAlbumById from 'react-query/useGetAlbumById';
import useGetPhotoById from 'react-query/useGetPhotoById';
import useDeletePhoto from 'react-query/useDeletePhotoById';
import useUpdatePhoto from 'react-query/useUpdatePhoto';

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
} from '../PhotoList/PhotoList.styled';

const PhotoLightBox = () => {
  const { id: photoId } = useParams();
  const { data: currentPhotoData } = useGetPhotoById(photoId);
  const [isOpenInfo, setIsOpenInfo] = useState(false);
  // const [albumId, setAlbumId] = useState('');
  // console.log(albumId);
  const [date, setDate] = useState('');
  const [place, setPlace] = useState('');
  const [comments, setComments] = useState('');
  const { mutateAsync: updatePhoto } = useUpdatePhoto();
  const { mutateAsync: deletePhoto, isLoading } = useDeletePhoto();
  const navigate = useNavigate();
  const albumId = currentPhotoData && currentPhotoData.albumId;
  const { data: albumData } = useGetAlbumById(albumId);
  console.log(albumData.photo);

  // const handlePrevPhoto = () => {
  //   console.log('ok');
  //   if (index === 0) {
  //     setIndex(albumData.photo.lenght - 1);
  //   }
  // };

  // const handleNextPhoto = () => {};

  useEffect(() => {
    if (currentPhotoData) {
      setDate(currentPhotoData.date);
      setPlace(currentPhotoData.place);
      setComments(currentPhotoData.comments);
      // setAlbumId(currentPhotoData.albumId);
    }
  }, [currentPhotoData]);

  const handleDelete = async id => {
    try {
      await deletePhoto(id, {
        onSuccess: () => {
          // navigate(`/album/${albumId}`);
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
  };

  return (
    <>
      {/* {isLoading && <div>LOADING</div>} */}
      {currentPhotoData && (
        <Modal onClose={() => navigate(`/album/${albumId}`)}>
          <ButtonWrapper>
            <DeleteBtn onDelete={() => handleShowAlert(photoId)} />
            <InformationButton onClick={handleToggleInfo} />
          </ButtonWrapper>
          <PrevBtnWrap>
            {/* <PrevButton type="button" onClick={handlePrevPhoto}> */}
            <PrevButton type="button">
              <PrevButtonIcon />
            </PrevButton>
          </PrevBtnWrap>
          <img src={currentPhotoData.photoURL} height="100%" alt="" />
          <NextBtnWrap>
            <NextButton type="button">
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
                  <button type="submit">ok</button>
                </FieldWrapper>

                <FieldWrapper>
                  <Place place={place} onSelect={handleSelectUpdatePlace} />
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
    </>
  );
};

export default PhotoLightBox;
