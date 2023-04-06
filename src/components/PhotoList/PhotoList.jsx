import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useGetAlbumById from 'react-query/useGetAlbumById';

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import { AlbumTitle, Box, Thumb, Image } from './PhotoList.styled';

const styles = [
  { marginTop: '30px', width: '400px', height: '532px' },
  { marginTop: '110px', width: '400px', height: '532px' },
  { width: '400px', height: '532px' },
  { width: '524px', height: '391px', marginTop: '60px' },
  { width: '635px', height: '474px', marginTop: '60px', marginBottom: '60px' },
];

const PhotoList = () => {
  const [photoIndex, setPhotoIndex] = useState(null);
  const [photoURLs, setPhotoURLs] = useState([]);
  console.log(photoURLs);
  console.log(photoIndex);

  const { id } = useParams();
  const { data } = useGetAlbumById(id);

  // if (data) {
  //   console.log(selectedPhoto);
  // }

  return (
    <>
      {data && <AlbumTitle>{data.name}</AlbumTitle>}
      <Box>
        {data &&
          data.photo.map(({ _id: id, photoURL }, index) => {
            return (
              <Thumb key={id} style={styles[index % styles.length]}>
                <Image
                  src={photoURL}
                  alt=""
                  onClick={() => {
                    setPhotoIndex(index);
                    setPhotoURLs(data.photo.map(({ photoURL }) => photoURL));
                  }}
                />
                {photoIndex !== null && (
                  <Lightbox
                    mainSrc={photoURLs[photoIndex]}
                    nextSrc={photoURL[(photoIndex + 1) % photoURL.length]}
                    prevSrc={
                      photoURLs[
                        (photoIndex + photoURLs.length - 1) % photoURLs.length
                      ]
                    }
                    onCloseRequest={() => setPhotoIndex(null)}
                    onMovePrevRequest={() =>
                      setPhotoIndex(
                        (photoIndex + photoURLs.length - 1) % photoURLs.length
                      )
                    }
                    onMoveNextRequest={() =>
                      setPhotoIndex((photoIndex + 1) % photoURLs.length)
                    }
                  />
                )}
              </Thumb>
            );
          })}
      </Box>
    </>
  );
};

export default PhotoList;
