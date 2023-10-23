import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import Avatar from 'react-avatar';
import Cookies from 'js-cookie';
// import { motion, AnimatePresence } from 'framer-motion';

import useGetCurrentUser from 'react-query/useGetCurrentUser';
import useDeleteAlbum from 'react-query/useDeleteAlbum';
import useUpdateUser from 'react-query/useUpdateUser';
import useLogout from 'react-query/useLogout';

import EditLinkBtn from 'components/Buttons/EditLinkBtn/EditLinkBtn';
import Button from 'components/Buttons/Button';

import { showAlert } from 'helpers/showAlert';

import { notifySuccess, notifyError } from 'helpers/toastNotify';

import {
  List,
  Box,
  UserWrapper,
  UserForm,
  InputWrapper,
  Field,
  SaveBtn,
  Title,
  Item,
  LinkAlbum,
  IconAlbum,
  DefaultCover,
  AlbumName,
  EditBox,
  ButtonWrapper,
  DeleteBtn,
} from './UserProfile.styled';

const UserProfile = () => {
  const { data: currentUser, isLoading } = useGetCurrentUser();
  const { mutateAsync: updateUser, isLoading: updateUserLoading } =
    useUpdateUser();
  const { mutateAsync: logout } = useLogout();
  const { mutateAsync: deleteAlbum } = useDeleteAlbum();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const [saveBtnVisible, setSaveBtnVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isLoading) {
      setProgress(100);
    }

    if (currentUser) {
      setName(currentUser.name);
      setEmail(currentUser.email);
    }
  }, [currentUser, isLoading]);

  const handleNameChange = e => {
    setName(e.target.value);
    setSaveBtnVisible(true);
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
    setSaveBtnVisible(true);
  };

  const handleOnBlur = () => {
    if (currentUser) {
      const isChagedNameOrEmail =
        currentUser.name !== name || currentUser.email !== email;

      setSaveBtnVisible(isChagedNameOrEmail);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setProgress(100);

    try {
      await updateUser(
        { name, email },
        {
          onSuccess: () => {
            setSaveBtnVisible(false);
          },
          onError: error => {
            notifyError(error.response.data.message);
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async id => {
    // TODO:добавити tryCatch
    try {
      await deleteAlbum(id, {
        //  TODO:перенести в хук

        onSuccess: () => {
          notifySuccess('album deleted');
        },
        onError: error => {
          notifyError(error.response.data.message);
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleShowAlert = id => {
    showAlert(id, handleDelete);
  };

  const handleLogout = async () => {
    try {
      Cookies.remove('token', { path: '/' });
      navigate('/');

      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      {currentUser && (
        <Box>
          <UserWrapper>
            <Avatar
              name={name}
              color={Avatar.getRandomColor('sitebase', [
                '#165954',
                '#ed6b5b',
                '#876d97',
              ])}
              round="100px"
              size="200px"
            />

            <UserForm
              encType="multipart/form-data"
              onSubmit={handleSubmit}
              action=""
            >
              <div>
                <InputWrapper>
                  <label>
                    <Field
                      type="text"
                      value={name}
                      onChange={handleNameChange}
                      onBlur={handleOnBlur}
                    />
                  </label>
                </InputWrapper>

                <InputWrapper>
                  <label>
                    <Field
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      onBlur={handleOnBlur}
                    />
                  </label>
                </InputWrapper>
              </div>

              <SaveBtn
                type="submit"
                title="Save changes"
                disabled={updateUserLoading}
                isVisible={saveBtnVisible}
              >
                Save
              </SaveBtn>
            </UserForm>

            <Button type="button" title="Log out" onClick={handleLogout} />
          </UserWrapper>

          {/* Album list */}

          <Title>My Albums</Title>
          <List>
            {currentUser &&
              currentUser.myAlbums.map(({ _id: id, name, backgroundURL }) => {
                return (
                  <Item key={id}>
                    <LinkAlbum to={`/album/${id}`}>
                      {backgroundURL ? (
                        <IconAlbum src={backgroundURL} alt="cover" />
                      ) : (
                        <DefaultCover />
                      )}
                    </LinkAlbum>

                    <EditBox>
                      {/* <AlbumName>{name}</AlbumName> */}
                      <ButtonWrapper>
                        <AlbumName>{name}</AlbumName>

                        <DeleteBtn onDelete={() => handleShowAlert(id)} />
                        <EditLinkBtn to={`/${id}/${name}/update`} />
                      </ButtonWrapper>
                    </EditBox>
                  </Item>
                );
              })}
          </List>
        </Box>
      )}
    </>
  );
};

export default UserProfile;
