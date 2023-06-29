import { useState } from 'react';

import useGetCurrentUser from 'react-query/useGetCurrentUser';
import useDeleteAlbum from 'react-query/useDeleteAlbum';
import useUpdateUser from 'react-query/useUpdateUser';

import { showAlert } from 'helpers/showAlert';

import { notifySuccess, notifyError } from 'helpers/toastNotify';

import {
  Box,
  UserWrapper,
  AvatarWrapper,
  Avatar,
  UserInfo,
  InputWrapper,
  Label,
  Field,
  SubmitButton,
  EditUserButton,
  CheckIcon,
  // Name,
  // Email,
  Title,
  Item,
  LinkAlbum,
  IconAlbum,
  AlbumName,
  DeleteBtn,
  EditLink,
  EditIcon,
} from './UserProfile.styled';

const UserProfile = () => {
  const { data } = useGetCurrentUser();
  const { mutateAsync: updateUser, isSuccess } = useUpdateUser();
  const [isFocusedName, setIsFocusedName] = useState(false);
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);

  // console.log(data);

  const [name, setName] = useState(data.name);
  const [email, setEmail] = useState(data.email);

  const { mutateAsync: deleteAlbum } = useDeleteAlbum();
  console.log(isSuccess);

  const handleFocusedName = () => {
    setIsFocusedName(true);
  };

  const handleFocusedEmail = () => {
    setIsFocusedEmail(true);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await updateUser({ name, email });

      if (isSuccess) {
        setIsFocusedName(false);
        // setIsFocusedEmail(false);
      }
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
            <AvatarWrapper>
              <Avatar />
            </AvatarWrapper>
            {/* Form */}
            <UserInfo>
              <form
                encType="multipart/form-data"
                onSubmit={handleSubmit}
                action=""
              >
                <InputWrapper>
                  <Label htmlFor="1">
                    Name:
                    <Field
                      id="1"
                      type="text"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      onClick={handleFocusedName}
                    />
                  </Label>

                  {isFocusedName ? (
                    <SubmitButton type="submit" onClick={handleSubmit}>
                      <CheckIcon />
                    </SubmitButton>
                  ) : (
                    <EditUserButton onClick={handleFocusedName} type="button">
                      <EditIcon />
                    </EditUserButton>
                  )}
                </InputWrapper>

                <InputWrapper>
                  <Label>
                    Email:
                    <Field
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      onClick={handleFocusedEmail}
                    />
                  </Label>

                  {isFocusedEmail ? (
                    <SubmitButton type="submit" onClick={handleSubmit}>
                      <CheckIcon />
                    </SubmitButton>
                  ) : (
                    <EditUserButton onClick={handleFocusedEmail} type="button">
                      <EditIcon />
                    </EditUserButton>
                  )}
                </InputWrapper>
              </form>
              {/* <Name> {data.name}</Name>
              <Email> {data.email}</Email> */}
            </UserInfo>
          </UserWrapper>

          <Title>My Albums</Title>
          <ul>
            {data &&
              data.myAlbums.map(({ _id: id, name, backgroundURL }) => {
                return (
                  <Item key={id}>
                    <LinkAlbum to={`/album/${id}`}>
                      <IconAlbum src={backgroundURL} alt="cover" />
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
