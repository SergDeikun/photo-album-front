import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import useGetAlbumById from 'react-query/useGetAlbumById';
import useDeletePhoto from 'react-query/useDeletePhotoById';
import useChangeAlbum from 'react-query/useChangeAlbum';

import { showAlert } from 'helpers/showAlert';

// import { notifySuccess, notifyError } from 'helpers/toastNotify';

import {
  InfoWrapper,
  Form,
  NameWrapper,
  NameLabel,
  NameField,
  SaveBtn,
  FriendsBox,
  FriendsPreTitle,
  FriendsItem,
  FileWrapper,
  DefaultCover,
  Cover,
  BlackBox,
  PhotocameraIcon,
  FileLabel,
  PhotoList,
  PhotoItem,
  DeleteBtn,
} from './UpdateAlbum.styled';

const UpdateAlbum = () => {
  const { id } = useParams();
  const { data } = useGetAlbumById(id);
  const [name, setName] = useState('');
  const [backgroundURL, setBackgroundURL] = useState('');
  const [previewBackground, setPreviewBackground] = useState('');
  const { mutateAsync: deletePhoto } = useDeletePhoto();
  const { mutateAsync: changeAlbum } = useChangeAlbum();

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
        <InfoWrapper>
          <Form encType="multipart/form-data" onSubmit={handleSubmit} action="">
            {/* Name */}

            <NameWrapper>
              <NameLabel>
                <NameField
                  type="text"
                  name="name"
                  value={name}
                  onChange={e => setName(e.target.value.trim())}
                />
              </NameLabel>
            </NameWrapper>

            <FileWrapper>
              {previewBackground || backgroundURL ? (
                <Cover
                  src={previewBackground || backgroundURL || ''}
                  alt="cover"
                />
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

            <SaveBtn type="submit">go</SaveBtn>
          </Form>
          <FriendsBox>
            <ul>
              <FriendsPreTitle>Friends :</FriendsPreTitle>
              <FriendsItem>Name:12334</FriendsItem>
              <FriendsItem>Name:89645</FriendsItem>
              <FriendsItem>Name:gfndj</FriendsItem>
              <FriendsItem>Name:nvbg5</FriendsItem>
              <FriendsItem>Name:bcvdh</FriendsItem>
            </ul>
          </FriendsBox>
        </InfoWrapper>
      )}

      {data && (
        <PhotoList>
          {data.photo.map(({ _id: id, photoURL }) => {
            return (
              <PhotoItem key={id}>
                <img src={photoURL} alt="" />
                <DeleteBtn type="button" onDelete={() => handleShowAlert(id)} />
              </PhotoItem>
            );
          })}
        </PhotoList>
      )}
    </>
  );
};

export default UpdateAlbum;
