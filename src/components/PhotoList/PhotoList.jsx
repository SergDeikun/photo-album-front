import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// import moment from 'moment';
import TextField from '@mui/material/TextField';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import useGetAlbumById from 'react-query/useGetAlbumById';

// import { useGetQuery } from 'react-query/useGetQuery';
import useDeletePhoto from 'react-query/useDeletePhotoById';
import { showAlert } from 'helpers/showAlert';

import InformationButton from 'components/Buttons/InformationButton/Information';
// import Autocomplite from 'components/Autocomplite/Autocomplite';

import {
  AlbumTitle,
  Box,
  ImageWrapper,
  Thumb,
  Image,
  Modal,
  ButtonWrapper,
  PhotoLightBoxImg,
  DeleteBtn,
  PrevButton,
  PrevButtonIcon,
  NextButton,
  NextButtonIcon,
  InfoWrapper,
  CloseBtn,
  PlaceWrapper,
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
  // const formatDate = moment(date).format('DD.MM.YYYY');
  // console.log(updateDate);

  const handleImageLoad = index => {
    setIsLoadedPhoto(prevLoadedPhotos => [...prevLoadedPhotos, index]);
  };

  useEffect(() => {
    if (selectedPhoto) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedPhoto]);

  const handleOpenPhoto = (photo, index) => {
    // console.log(photo.date);
    setSelectedPhoto(photo);
    setPhotoIndex(index);
    setUpdateComments(photo.comments);
    setUpdateDate(photo.date);
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

  const handlePrevPhoto = () => {
    if (photoIndex === 0) {
      setPhotoIndex(photoURLs.length - 1);
    } else {
      setPhotoIndex(photoIndex - 1);
    }
  };

  const handleNextPhoto = () => {
    if (photoIndex === photoURLs.length - 1) {
      setPhotoIndex(0);
    } else {
      setPhotoIndex(photoIndex + 1);
    }
  };

  return (
    <>
      {data && <AlbumTitle>{data.name}</AlbumTitle>}
      <Box>
        {data &&
          data.photo.map((photo, index) => {
            const { _id: photoId, photoURL, place, date } = photo;
            // console.log(date);
            return (
              <Thumb
                key={photoId}
                style={styles[index % styles.length]}
                isLoaded={isLoadedPhoto.includes(index)}
              >
                <ImageWrapper isLoaded={isLoadedPhoto.includes(index)}>
                  {/* <Link to={`/photo/${photoId}`}> */}
                  <Image
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

                    <PrevButton type="button" onClick={handlePrevPhoto}>
                      <PrevButtonIcon />
                    </PrevButton>
                    <PhotoLightBoxImg src={photoURLs[photoIndex]} alt="img" />
                    <NextButton type="button" onClick={handleNextPhoto}>
                      <NextButtonIcon />
                    </NextButton>

                    {/* Info */}

                    {isOpenInfo && (
                      <InfoWrapper>
                        <CloseBtn onClick={handleToggleInfo} />
                        <form encType="multipart/form-data" action="">
                          {/* Date */}

                          {/* <div>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <DesktopDatePicker
                                // label="Date"
                                inputFormat="DD.MM.YYYY"
                                value={updateDate}
                                // value={date}
                                onChange={newValue => setUpdateDate(newValue)}
                                renderInput={params => (
                                  <TextField {...params} />
                                )}
                              />
                            </LocalizationProvider>
                            <button type="submit">ok</button>
                          </div> */}

                          {/* Place */}

                          <PlaceWrapper>
                            <Place
                              onSelect={handleSelectUpdatePlace}
                              place={place}
                            />
                          </PlaceWrapper>
                          <button type="submit">ok</button>

                          {/* Comments */}

                          <div>
                            <textarea
                              aria-label="empty textarea"
                              placeholder="Comments"
                              style={{ width: 435, height: 175 }}
                              value={updateComments}
                              onChange={e => setUpdateComments(e.target.value)}
                            />
                            <button type="submit">ok</button>
                          </div>
                        </form>
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
