import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useGetAlbumById from 'react-query/useGetAlbumById';

import useDeletePhoto from 'react-query/useDeletePhotoById';
import { showAlert } from 'helpers/showAlert';

import InformationButton from 'components/Buttons/InformationButton/Information';
// import Autocomplite from 'components/Autocomplite/Autocomplite';

import {
  AlbumTitle,
  Box,
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
  // ListInfo,
  // ItemInfo,
  // DateIcon,
  // PlaceIcon,
  // Infotext,
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
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [photoURLs, setPhotoURLs] = useState([]);
  const [photoIndex, setPhotoIndex] = useState(null);
  const [isOpenInfo, setIsOpenInfo] = useState(false);
  const { mutateAsync: deletePhoto } = useDeletePhoto();
  const [updatePlace, setUpdatePlace] = useState('');

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
    setSelectedPhoto(photo);
    setPhotoIndex(index);
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

  // if (data) {
  //   console.log(data);
  // }

  return (
    <>
      {data && <AlbumTitle>{data.name}</AlbumTitle>}
      <Box>
        {data &&
          data.photo.map((photo, index) => {
            const { _id: photoId, photoURL, comments, place, date } = photo;

            return (
              <Thumb key={photoId} style={styles[index % styles.length]}>
                <Image
                  src={photoURL}
                  alt="photo"
                  onClick={() => {
                    setPhotoURLs(data.photo.map(({ photoURL }) => photoURL));
                    handleOpenPhoto(photo, index);
                    // setSelectedPhoto(photo);

                    // setPhotoIndex(index);
                  }}
                />
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
                          {/* <Place>{place}</Place> */}
                          <PlaceWrapper>
                            <Place
                              onSelect={handleSelectUpdatePlace}
                              updatePlace={place}
                            />
                          </PlaceWrapper>
                        </form>
                        {/* <ListInfo>
                          <ItemInfo>
                            <DateIcon />
                            {date}
                          </ItemInfo>
                          <ItemInfo>
                            <PlaceIcon />
                            <Infotext>{place}</Infotext>
                          </ItemInfo>
                          <ItemInfo>
                            Comments: <Infotext>{comments}</Infotext>{' '}
                          </ItemInfo>
                        </ListInfo> */}
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
