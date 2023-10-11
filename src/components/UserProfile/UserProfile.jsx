import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import Avatar from 'react-avatar';
import Cookies from 'js-cookie';

import useGetCurrentUser from 'react-query/useGetCurrentUser';
import useDeleteAlbum from 'react-query/useDeleteAlbum';
import useUpdateUser from 'react-query/useUpdateUser';
import useLogout from 'react-query/useLogout';

import Button from 'components/Buttons/Button';

import { showAlert } from 'helpers/showAlert';

import { notifySuccess, notifyError } from 'helpers/toastNotify';

import {
  Box,
  UserWrapper,
  UserForm,
  InputWrapper,
  Field,
  SubmitButton,
  Title,
  Item,
  LinkAlbum,
  IconAlbum,
  DefaultCover,
  AlbumName,
  DeleteBtn,
  EditLink,
  EditIcon,
} from './UserProfile.styled';

const UserProfile = () => {
  const { data: currentUser, isLoading } = useGetCurrentUser();
  const { mutateAsync: updateUser } = useUpdateUser();
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
  }, [isLoading]);

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setEmail(currentUser.email);
    }
  }, [currentUser]);

  const handleNameChange = e => {
    setName(e.target.value);
    setSaveBtnVisible(true);
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
    setSaveBtnVisible(true);
  };

  const handleSubmit = async e => {
    e.preventDefault();

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
            {/* <UserInfo> */}
            <UserForm
              encType="multipart/form-data"
              onSubmit={handleSubmit}
              action=""
            >
              <InputWrapper>
                <label>
                  <Field
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    // onFocus={handleFocusedName}
                    // onBlur={handleOnBlurName}
                  />
                </label>
              </InputWrapper>

              <InputWrapper>
                <label>
                  <Field
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    // onFocus={handleFocusedEmail}
                    // onBlur={handleOnBlurEmail}
                  />
                </label>
              </InputWrapper>

              {saveBtnVisible && (
                <SubmitButton type="submit">Save</SubmitButton>
              )}
            </UserForm>
            {/* </UserInfo> */}

            <Button type="button" title="Log out" onClick={handleLogout} />
          </UserWrapper>

          {/* Album list */}

          <Title>My Albums</Title>
          <ul>
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

                      <AlbumName>{name}</AlbumName>
                    </LinkAlbum>
                    <DeleteBtn onDelete={() => handleShowAlert(id)} />

                    <EditLink to={`/${id}/${name}/update`}>
                      <EditIcon />
                    </EditLink>
                  </Item>
                );
              })}
          </ul>
        </Box>
      )}
    </>
  );
};

export default UserProfile;
