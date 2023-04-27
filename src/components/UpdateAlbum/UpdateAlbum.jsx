import { useState } from 'react';
import { useParams } from 'react-router-dom';

// import { useGetQuery } from 'react-query/useGetQuery';
import useGetCurrentUser from 'react-query/useGetCurrentUser';
import useDeletePhoto from 'react-query/useDeletePhotoById';

// import { notifySuccess, notifyError } from 'helpers/toastNotify';

import {
  Box,
  FileWrapper,
  Cover,
  BlackBox,
  PhotocameraIcon,
  FileLabel,
  // NameWrapper,
  NameLabel,
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
    <>
      <Box>
        {/* <form action=""> */}
        <FileWrapper>
          <Cover src={currentAlbum.backgroundURL} alt="" />

          <BlackBox>
            <PhotocameraIcon />
            <FileLabel>
              Edit cover
              <input type="file" hidden id="1" />
            </FileLabel>
          </BlackBox>
        </FileWrapper>
        {/* <NameWrapper> */}
        <NameLabel>
          <NameField
            type="text"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </NameLabel>
        {/* </NameWrapper> */}
      </Box>

      {/* </form> */}
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
      {/* </Box> */}
    </>
  );
};

export default UpdateAlbum;
