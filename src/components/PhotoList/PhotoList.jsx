import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useGetAlbumById from 'react-query/useGetAlbumById';

import InformationButton from 'components/Buttons/InformationButton/Information';

import {
  AlbumTitle,
  Box,
  Thumb,
  Image,
  Modal,
  ButtonWrapper,
  PhotoLightBoxImg,
  DeleteBtn,
  Comments,
  Place,
  Date,
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

  // if (data) {
  //   console.log(data);
  // }

  return (
    <>
      {data && <AlbumTitle>{data.name}</AlbumTitle>}
      <Box>
        {data &&
          data.photo.map((photo, index) => {
            return (
              <Thumb key={photo._id} style={styles[index % styles.length]}>
                <Image
                  src={photo.photoURL}
                  alt="photo"
                  onClick={() => handlePhotoClick(photo, index)}
                />
                {selectedPhoto && selectedPhoto === photo && (
                  <Modal onClose={() => setSelectedPhoto(null)}>
                    <ButtonWrapper>
                      <DeleteBtn />
                      <InformationButton />
                    </ButtonWrapper>

                    <PhotoLightBoxImg src={photo.photoURL} alt="" />
                    <Comments>{photo.comments}</Comments>
                    <Place>{photo.place}</Place>
                    <Date>{photo.date}</Date>
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
