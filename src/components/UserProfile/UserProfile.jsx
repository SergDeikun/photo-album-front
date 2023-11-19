import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import Avatar from 'react-avatar';
import Cookies from 'js-cookie';

import useGetCurrentUser from 'react-query/useGetCurrentUser';
import useDeleteAlbum from 'react-query/useDeleteAlbum';
import useUpdateUser from 'react-query/useUpdateUser';
import useLogout from 'react-query/useLogout';

import DefaultAlbumCover from 'components/DefaultAlbumCover/DefaultAlbumCover';
import EditLinkBtn from 'components/Buttons/EditLinkBtn/EditLinkBtn';

import { showAlert } from 'helpers/showAlert';

import { notifySuccess, notifyError } from 'helpers/toastNotify';

import {
  List,
  UserWrapper,
  UserForm,
  FieldWrapper,
  InputWrapper,
  Field,
  SaveBtn,
  LogOutBtn,
  Title,
  Item,
  LinkAlbum,
  IconAlbum,
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
  const [saveNameBtnVisible, setSaveNameBtnVisible] = useState(false);
  const [saveEmailBtnVisible, setSaveEmailBtnVisible] = useState(false);

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
    setName(e.target.value.trimStart());
    setSaveNameBtnVisible(currentUser.name !== e.target.value);
  };

  const handleEmailChange = e => {
    setEmail(e.target.value.trim());
    setSaveEmailBtnVisible(currentUser.email !== e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setProgress(100);

    try {
      await updateUser(
        { name, email },
        {
          onSuccess: () => {
            setSaveNameBtnVisible(false);
            setSaveEmailBtnVisible(false);
          },
          onError: error => {
            // notifyError(error.response.data.message);
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async id => {
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
        <>
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
              <FieldWrapper>
                <InputWrapper>
                  <label>
                    <Field
                      type="text"
                      value={name}
                      onChange={handleNameChange}
                    />
                  </label>
                </InputWrapper>
                <SaveBtn
                  disabled={updateUserLoading}
                  isVisible={saveNameBtnVisible}
                />
              </FieldWrapper>

              <FieldWrapper>
                <InputWrapper>
                  <label>
                    <Field
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </label>
                </InputWrapper>
                <SaveBtn
                  disabled={updateUserLoading}
                  isVisible={saveEmailBtnVisible}
                />
              </FieldWrapper>
            </UserForm>

            <LogOutBtn type="button" title="Log out" onClick={handleLogout} />
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
                        <DefaultAlbumCover />
                      )}
                    </LinkAlbum>

                    <EditBox>
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
        </>
      )}
    </>
  );
};

export default UserProfile;
