import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';

import useGetAlbumById from 'react-query/useGetAlbumById';
import useDeletePhoto from 'react-query/useDeletePhotoById';
import useChangeAlbum from 'react-query/useChangeAlbum';

import { showAlert } from 'helpers/showAlert';

// import { notifySuccess, notifyError } from 'helpers/toastNotify';

import {
  Box,
  FileWrapper,
  DefaultCover,
  Cover,
  BlackBox,
  PhotocameraIcon,
  FileLabel,
  NameWrapper,
  NameLabel,
  NameField,
  PhotoList,
  PhotoItem,
  DeleteBtn,
  DeleteIcon,
} from './UpdateAlbum.styled';

const UpdateAlbum = () => {
  const token = Cookies.get('token');

  const { id } = useParams();
  const [name, setName] = useState('');
  const [backgroundURL, setBackgroundURL] = useState('');
  const [previewBackground, setPreviewBackground] = useState('');

  const { mutateAsync: deletePhoto } = useDeletePhoto(token);
  const { mutateAsync: changeAlbum } = useChangeAlbum(token);

  const { data } = useGetAlbumById(id, token);

  //  todo:без хука не оновлюється сторінка після видалення

  useEffect(() => {
    if (data) {
      setName(data.name);
      setBackgroundURL(data.backgroundURL);
    }
  }, [data]);

  const uploadImage = e => {
    setPreviewBackground(URL.createObjectURL(e.target.files[0]));
    setBackgroundURL(e.target.files[0]);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const updateAlbum = new FormData();
    updateAlbum.append('name', name);
    updateAlbum.append('backgroundURL', backgroundURL);

    try {
      await changeAlbum({ updateAlbum, id });
    } catch (error) {
      console.log(error);
    }
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

  return (
    <>
      {data && (
        <Box>
          <form encType="multipart/form-data" onSubmit={handleSubmit} action="">
            <FileWrapper>
              {previewBackground || backgroundURL ? (
                <Cover src={previewBackground || backgroundURL} alt="cover" />
              ) : (
                <DefaultCover />
              )}

              <BlackBox>
                <PhotocameraIcon />
                <FileLabel>
                  Edit cover
                  <input
                    type="file"
                    name={backgroundURL}
                    onChange={uploadImage}
                    accept=".jpg, .jpeg, .png"
                    hidden
                  />
                </FileLabel>
              </BlackBox>
            </FileWrapper>
            <NameWrapper>
              <NameLabel>
                <NameField
                  type="text"
                  name="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
                <button type="submit">go</button>
              </NameLabel>
            </NameWrapper>
          </form>
        </Box>
      )}

      {data && (
        <PhotoList>
          {data.photo.map(({ _id: id, photoURL }) => {
            return (
              <PhotoItem key={id}>
                <img src={photoURL} alt="" />
                <DeleteBtn type="button" onClick={() => handleShowAlert(id)}>
                  <DeleteIcon />
                </DeleteBtn>
              </PhotoItem>
            );
          })}
        </PhotoList>
      )}
      {/* </Box> */}
    </>
  );
};

export default UpdateAlbum;
