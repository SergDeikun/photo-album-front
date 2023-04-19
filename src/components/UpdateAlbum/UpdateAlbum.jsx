import { useState } from 'react';
import { useParams } from 'react-router-dom';

// import { useGetQuery } from 'react-query/useGetQuery';
import useGetCurrentUser from 'react-query/useGetCurrentUser';
import useDeletePhoto from 'react-query/useDeletePhotoById';

// import { notifySuccess, notifyError } from 'helpers/toastNotify';

import {
  Box,
  NameField,
  PhotoList,
  PhotoItem,
  DeleteBtn,
  DeleteIcon,
} from './UpdateAlbum.styled';

const UpdateAlbum = () => {
  // const { myAlbums } = useGetQuery('user');
  const { id } = useParams();
  const { mutateAsync: deletePhoto } = useDeletePhoto();
  //  todo:без хука не оновлюється сторінка після видалення
  const { data } = useGetCurrentUser();

  const currentAlbum = data.myAlbums
    ? data.myAlbums.find(album => album._id === id)
    : {};

  const [name, setName] = useState(currentAlbum.name);

  const handleDelete = async id => {
    await deletePhoto(id);
  };

  return (
    <Box>
      <form action="">
        <label htmlFor="1"></label>
        <NameField
          type="text"
          name="name"
          id="1"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </form>
      {/* <h1>{currentAlbum.name}</h1> */}
      {/* <img src={currentAlbum.backgroundURL} alt="cover" /> */}
      {/* {data && ( */}
      <PhotoList>
        {currentAlbum.photo.map(({ _id: id, photoURL }) => {
          return (
            <PhotoItem key={id}>
              <img src={photoURL} alt="" />
              <DeleteBtn type="button" onClick={() => handleDelete(id)}>
                <DeleteIcon />
              </DeleteBtn>
            </PhotoItem>
          );
        })}
      </PhotoList>
      {/* )} */}
    </Box>
  );
};

export default UpdateAlbum;
