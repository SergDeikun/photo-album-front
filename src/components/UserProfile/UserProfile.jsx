import { useState } from 'react';

import useGetCurrentUser from 'react-query/useGetCurrentUser';
import useDeleteAlbum from 'react-query/useDeleteAlbum';

import { showAlert } from 'helpers/showAlert';

import { notifySuccess, notifyError } from 'helpers/toastNotify';

import {
  Box,
  UserWrapper,
  AvatarWrapper,
  Avatar,
  UserInfo,
  Name,
  Email,
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
  // console.log(data);

  const [name, setName] = useState(data.name);
  const [email, setEmail] = useState(data.email);

  const { mutateAsync: deleteAlbum } = useDeleteAlbum();

  const handleSubmit = e => {
    e.preventDefault();
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
                <label>
                  <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </label>
                <label>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </label>
                <button type="submit">Go</button>
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
