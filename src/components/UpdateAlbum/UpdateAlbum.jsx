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
  NameField,
  SaveBtn,
  FriendsBox,
  FriendsPreTitle,
  FriendsList,
  FriendsItem,
  FriendsDataWrap,
  DeleteFriend,
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
    setSaveBtnVisible(data.name !== e.target.value);
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

          {/* if I have friends => render FriendsBox */}

          <FriendsBox>
            <FriendsPreTitle>Friends :</FriendsPreTitle>
            {/* <span>You haven't shared this album with anyone</span> */}

            <FriendsList>
              <FriendsItem>
                <div>
                  <FriendsDataWrap>
                    <span>Name:</span>
                    <span>12334gfgfgfgfgfgfggfgfg</span>
                  </FriendsDataWrap>
                  <FriendsDataWrap>
                    <span>Email:</span>
                    <span>qwerty@mail.com</span>
                  </FriendsDataWrap>
                </div>
                {/* <DeleteFriend></DeleteFriend> */}
                <DeleteFriend />
              </FriendsItem>
              {/* <FriendsItem>
                <FriendsDataWrap>
                  <span>Name:</span>
                  <span>12334gfgfgfgfgfgfggfgfg</span>
                </FriendsDataWrap>
                <FriendsDataWrap>
                  <span>Email:</span>
                  <span>qwerty@mail.com</span>
                </FriendsDataWrap>
                <button>D</button>
              </FriendsItem>
              <FriendsItem>
                <FriendsDataWrap>
                  <span>Name:</span>
                  <span>12334gfgfgfgfgfgfggfgfg</span>
                </FriendsDataWrap>
                <FriendsDataWrap>
                  <span>Email:</span>
                  <span>qwerty@mail.com</span>
                </FriendsDataWrap>
                <button>D</button>
              </FriendsItem>
              <FriendsItem>
                <FriendsDataWrap>
                  <span>Name:</span>
                  <span>12334gfgfgfgfgfgfggfgfg</span>
                </FriendsDataWrap>
                <FriendsDataWrap>
                  <span>Email:</span>
                  <span>qwerty@mail.com</span>
                </FriendsDataWrap>
                <button>D</button>
              </FriendsItem>
              <FriendsItem>
                <FriendsDataWrap>
                  <span>Name:</span>
                  <span>12334gfgfgfgfgfgfggfgfg</span>
                </FriendsDataWrap>
                <FriendsDataWrap>
                  <span>Email:</span>
                  <span>qwerty@mail.com</span>
                </FriendsDataWrap>
                <button>D</button>
              </FriendsItem>
              <FriendsItem>
                <FriendsDataWrap>
                  <span>Name:</span>
                  <span>12334gfgfgfgfgfgfggfgfg</span>
                </FriendsDataWrap>
                <FriendsDataWrap>
                  <span>Email:</span>
                  <span>qwerty@mail.com</span>
                </FriendsDataWrap>
                <button>D</button>
              </FriendsItem> */}
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
