import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import useGetAlbumById from 'react-query/useGetAlbumById';
import useDeletePhoto from 'react-query/useDeletePhotoById';
import useChangeAlbum from 'react-query/useChangeAlbum';
// import useGetAlbumById from '../../react-query/useGetAlbumById';
// import useDeletePhoto from '../../react-query/useDeletePhotoById';
// import useChangeAlbum from '../../react-query/useChangeAlbum';

import { showAlert } from 'helpers/showAlert';

// import { notifySuccess, notifyError } from 'helpers/toastNotify';

import {
  InfoWrapper,
  Form,
  NameWrapper,
  NameField,
  SaveBtn,
  FriendsBox,
  FriendsPreTitle,
  FriendsList,
  FriendsItem,
  FileWrapper,
  DefaultCover,
  Cover,
  BlackBox,
  PhotocameraIcon,
  FileLabel,
  PhotoList,
  PhotoItem,
  Image,
  DeleteBtn,
} from './UpdateAlbum.styled';

const UpdateAlbum = () => {
  const { id } = useParams();
  const { data } = useGetAlbumById(id);
  const [name, setName] = useState('');
  const [backgroundURL, setBackgroundURL] = useState('');
  const [previewBackground, setPreviewBackground] = useState('');
  const [saveBtnVisible, setSaveBtnVisible] = useState(false);
  const { mutateAsync: deletePhoto } = useDeletePhoto();
  const { mutateAsync: changeAlbum, isLoading } = useChangeAlbum();

  useEffect(() => {
    if (data) {
      setName(data.name);
      setBackgroundURL(data.backgroundURL);
    }
  }, [data]);

  const handleChangeName = e => {
    setName(e.target.value);
    setSaveBtnVisible(true);
  };

  const uploadImage = e => {
    setPreviewBackground(URL.createObjectURL(e.target.files[0]));
    setBackgroundURL(e.target.files[0]);
    setSaveBtnVisible(true);
  };

  const handleOnBlur = () => {
    if (data) {
      const isChagedNameOrEmail = data.name !== name;

      setSaveBtnVisible(isChagedNameOrEmail);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const updateAlbum = new FormData();
    updateAlbum.append('name', name);
    updateAlbum.append('backgroundURL', backgroundURL);

    try {
      await changeAlbum({ updateAlbum, id });

      setSaveBtnVisible(false);
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
            <NameWrapper>
              <label style={{ width: '100%' }}>
                <NameField
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChangeName}
                  onBlur={handleOnBlur}
                  maxLength="20"
                />
              </label>
            </NameWrapper>

            <FileWrapper
              backgroundImage={previewBackground || backgroundURL || ''}
            >
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

            <SaveBtn
              type="submit"
              title="Save changes"
              disabled={isLoading}
              isVisible={saveBtnVisible}
            />
          </Form>

          {/* if I have friends => render FriendsBox */}

          <FriendsBox>
            <FriendsPreTitle>Friends :</FriendsPreTitle>

            <FriendsList>
              <FriendsItem>Name:12334</FriendsItem>
              <FriendsItem>Name:89645</FriendsItem>
              <FriendsItem>Name:gfndj</FriendsItem>
              <FriendsItem>Name:nvbg5</FriendsItem>
              <FriendsItem>Name:bcvdh</FriendsItem>
              <FriendsItem>Name:12334</FriendsItem>
              <FriendsItem>Name:89645</FriendsItem>
              <FriendsItem>Name:gfndj</FriendsItem>
              <FriendsItem>Name:nvbg5</FriendsItem>
              <FriendsItem>Name:bcvdh</FriendsItem>
            </FriendsList>
          </FriendsBox>
        </InfoWrapper>
      )}
      {/* PhotoList */}

      {data && (
        <PhotoList>
          {data.photo.map(({ _id: id, photoURL }) => {
            return (
              <PhotoItem key={id}>
                <Image src={photoURL} alt="" />
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
