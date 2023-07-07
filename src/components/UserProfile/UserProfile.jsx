import { useState, useEffect, useRef } from 'react';
import Avatar from 'react-avatar';

import useGetCurrentUser from 'react-query/useGetCurrentUser';
import useDeleteAlbum from 'react-query/useDeleteAlbum';
import useUpdateUser from 'react-query/useUpdateUser';

import DefaultAlbumCover from 'components/DefaultAlbumCover/DefaultAlbumCover';

import { showAlert } from 'helpers/showAlert';

import { notifySuccess, notifyError } from 'helpers/toastNotify';

import {
  Box,
  UserWrapper,
  // AvatarWrapper,
  // Avatar,
  UserInfo,
  InputWrapper,
  Label,
  Field,
  SubmitButton,
  EditIconWrap,
  CheckIcon,
  // Name,
  // Email,
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
  const { data } = useGetCurrentUser();
  const { mutateAsync: updateUser } = useUpdateUser();
  const [isFocusedName, setIsFocusedName] = useState(false);
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);

  // console.log(data);

  const [name, setName] = useState(data.name);
  const [email, setEmail] = useState(data.email);

  const { mutateAsync: deleteAlbum } = useDeleteAlbum();

  const handleFocusedName = () => {
    setIsFocusedName(true);
  };

  // setIsFocusedEmail(false);

  const handleFocusedEmail = () => {
    setIsFocusedEmail(true);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await updateUser(
        { name, email },
        {
          onSuccess: () => {
            setIsFocusedName(false);
            setIsFocusedEmail(false);
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
    await deleteAlbum(id, {
      //  TODO:перенести в хук

      onSuccess: () => {
        notifySuccess('album deleted');
      },
      onError: error => {
        notifyError(error.response.data.message);
      },
    });
  };

  const handleShowAlert = id => {
    showAlert(id, handleDelete);
  };

  return (
    <>
      {data && (
        <Box>
          <UserWrapper>
            {/* <AvatarWrapper> */}
            {/* <Avatar name={name} color={'#165954'} round="100px" size="200px" /> */}
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
            {/* <Avatar /> */}
            {/* </AvatarWrapper> */}
            {/* Form */}
            <UserInfo>
              <form
                encType="multipart/form-data"
                onSubmit={handleSubmit}
                action=""
              >
                <InputWrapper>
                  <Label>
                    Name:
                    <Field
                      type="text"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      onFocus={handleFocusedName}
                    />
                  </Label>

                  {isFocusedName ? (
                    <SubmitButton type="submit" onClick={handleSubmit}>
                      <CheckIcon />
                    </SubmitButton>
                  ) : (
                    <EditIconWrap>
                      <EditIcon />
                    </EditIconWrap>
                  )}
                </InputWrapper>

                <InputWrapper>
                  <Label>
                    Email:
                    <Field
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      onFocus={handleFocusedEmail}
                    />
                  </Label>

                  {isFocusedEmail ? (
                    <SubmitButton type="submit" onClick={handleSubmit}>
                      <CheckIcon />
                    </SubmitButton>
                  ) : (
                    <EditIconWrap>
                      <EditIcon />
                    </EditIconWrap>
                  )}
                </InputWrapper>
              </form>
              {/* <Name> {data.name}</Name>
              <Email> {data.email}</Email> */}
            </UserInfo>
          </UserWrapper>

          {/* Album list */}

          <Title>My Albums</Title>
          <ul>
            {data &&
              data.myAlbums.map(({ _id: id, name, backgroundURL }) => {
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
