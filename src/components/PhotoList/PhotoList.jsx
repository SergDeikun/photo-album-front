// import { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import useGetAlbumById from 'react-query/useGetAlbumById';

// import Lightbox from 'react-image-lightbox';
// import 'react-image-lightbox/style.css';

// import Modal from 'components/Modal/Modal';

// import { AlbumTitle, Box, Thumb, Image } from './PhotoList.styled';

// const styles = [
//   { marginTop: '30px', width: '400px', height: '532px' },
//   { marginTop: '110px', width: '400px', height: '532px' },
//   { width: '400px', height: '532px' },
//   { width: '524px', height: '391px', marginTop: '60px' },
//   { width: '635px', height: '474px', marginTop: '60px', marginBottom: '60px' },
// ];

const PhotoList = () => {
  // const [photoIndex, setPhotoIndex] = useState(null);
  // const [photoURLs, setPhotoURLs] = useState([]);
  // const { id } = useParams();
  // const { data } = useGetAlbumById(id);
  // if (data) {
  //   console.log(data);
  // }
  // return (
  //   <>
  //     {data && <AlbumTitle>{data.name}</AlbumTitle>}
  //     <Box>
  //       {data &&
  //         data.photo.map(({ _id: id, photoURL }, index) => {
  //           return (
  //             <Thumb key={id} style={styles[index % styles.length]}>
  //               <Image
  //                 src={photoURL}
  //                 alt="photo"
  //                 onClick={() => {
  //                   setPhotoIndex(index);
  //                   setPhotoURLs(data.photo.map(({ photoURL }) => photoURL));
  //                 }}
  //               />
  //               {photoIndex !== null && (
  //                 <Modal onClick={() => setPhotoIndex(null)}>
  //                   <img src={photoURLs[photoIndex]} alt="" />
  //                   <h1>hello</h1>
  //                 </Modal>
  //               )}
  //             </Thumb>
  //           );
  //         })}
  //     </Box>
  //   </>
  // );
};

export default PhotoList;
