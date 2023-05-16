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
  const { mutateAsync: deleteAlbum } = useDeleteAlbum();

  const handleDelete = async id => {
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
            <UserInfo>
              <Name> {data.name}</Name>
              <Email> {data.email}</Email>
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
