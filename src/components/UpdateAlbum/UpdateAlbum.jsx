import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import useGetAlbumById from 'react-query/useGetAlbumById';
import useDeleteViwer from 'react-query/useDeleteViwer';
import useDeletePhoto from 'react-query/useDeletePhotoById';
import useChangeAlbum from 'react-query/useChangeAlbum';

import { showAlert } from 'helpers/showAlert';

import defaulCover from '../../images/bg-cover1.jpg';

import {
  InfoWrapper,
  Form,
  NameWrapper,
  NameField,
  SaveBtn,
  FriendsBox,
  FriendsTitle,
  FriendsPreTitle,
  FriendsList,
  FriendsItem,
  FriendsDataWrap,
  PersonIcon,
  EmailnIcon,
  FriendText,
  DeleteFriendBtn,
  FileWrapper,
  BlackBox,
  PhotocameraIcon,
  FileLabel,
  PhotoList,
  PhotoItem,
  Image,
  DeleteBtn,
} from './UpdateAlbum.styled';

const UpdateAlbum = () => {
  const { id: albumId } = useParams();
  const { data } = useGetAlbumById(albumId);
  const [name, setName] = useState('');
  const [backgroundURL, setBackgroundURL] = useState('');
  const [previewBackground, setPreviewBackground] = useState('');
  const [saveBtnVisible, setSaveBtnVisible] = useState(false);
  const { mutateAsync: deleteViwer } = useDeleteViwer();
  const { mutateAsync: deletePhoto } = useDeletePhoto();
  const { mutateAsync: changeAlbum, isLoading } = useChangeAlbum();

  useEffect(() => {
    if (data) {
      setName(data.name);
      setBackgroundURL(data.backgroundURL || defaulCover);
    }
  }, [data]);

  const handleChangeName = e => {
    setName(e.target.value);
    // setSaveBtnVisible(data.name !== e.target.value);
  };

  const uploadImage = e => {
    setPreviewBackground(URL.createObjectURL(e.target.files[0]));
    setBackgroundURL(e.target.files[0]);
    setSaveBtnVisible(true);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const updateAlbum = new FormData();
    updateAlbum.append('name', name);
    updateAlbum.append('backgroundURL', backgroundURL);

    try {
      await changeAlbum({ updateAlbum, albumId });

      setSaveBtnVisible(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeletePhoto = async id => {
    try {
      await deletePhoto(id);
    } catch (error) {
      console.log(error);
    }
  };

  const handleShowAlertDeletePhoto = id => {
    showAlert(id, handleDeletePhoto);
  };

  const handleDeleteViwer = async ({ albumId, viwerId }) => {
    try {
      deleteViwer({ albumId, viwerId });
    } catch (error) {
      console.log(error);
    }
  };

  const handleShowAlertDeleteViwer = ({ albumId, viwerId }) => {
    showAlert(viwerId, () => handleDeleteViwer({ albumId, viwerId }));
  };

  return (
    <>
      {data && (
        <InfoWrapper>
          <div>
            <Form
              encType="multipart/form-data"
              onSubmit={handleSubmit}
              action=""
            >
              <NameWrapper>
                <label>
                  <NameField
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChangeName}
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
          </div>

          <FriendsBox>
            <FriendsTitle>Friends :</FriendsTitle>
            {!data.viewers.length && (
              <FriendsPreTitle>
                You haven't shared this album with anyone
              </FriendsPreTitle>
            )}

            <FriendsList>
              {data &&
                data.viewers.map(({ viwerId, email, name }) => {
                  return (
                    <FriendsItem key={viwerId}>
                      <div>
                        <FriendsDataWrap>
                          <PersonIcon />
                          <FriendText>{name}</FriendText>
                        </FriendsDataWrap>
                        <FriendsDataWrap>
                          <EmailnIcon />
                          <FriendText>{email}</FriendText>
                        </FriendsDataWrap>
                      </div>
                      <DeleteFriendBtn
                        type="button"
                        onDelete={() =>
                          handleShowAlertDeleteViwer({ albumId, viwerId })
                        }
                      />
                    </FriendsItem>
                  );
                })}
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
                <DeleteBtn
                  type="button"
                  onDelete={() => handleShowAlertDeletePhoto(id)}
                />
              </PhotoItem>
            );
          })}
        </PhotoList>
      )}
    </>
  );
};

export default UpdateAlbum;
