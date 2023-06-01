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
  InfoWrapper,
  CloseBtn,
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

  const handlePhotoClick = (photo, index) => {
    setSelectedPhoto(photo);
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
                  onClick={() => handlePhotoClick(photo, index)}
                />
                {selectedPhoto && selectedPhoto === photo && (
                  <Modal onClose={() => setSelectedPhoto(null)}>
                    <ButtonWrapper>
                      <DeleteBtn onDelete={() => handleShowAlert(photoId)} />
                      <InformationButton onClick={handleToggleInfo} />
                    </ButtonWrapper>
                    <PhotoLightBoxImg src={photoURL} alt="" />

                    {/* Info */}

                    {isOpenInfo && (
                      <InfoWrapper>
                        <CloseBtn onClick={handleToggleInfo} />
                        <form encType="multipart/form-data" action="">
                          {/* <Place>{place}</Place> */}
                          <Place
                            onSelect={handleSelectUpdatePlace}
                            updatePlace={place}
                          />
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
