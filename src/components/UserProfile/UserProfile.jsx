import { useState } from 'react';
import { useParams } from 'react-router-dom';

import useGetCurrentUser from 'react-query/useGetCurrentUser';
import useDeleteAlbum from 'react-query/useDeleteAlbum';

import DeleteButton from 'components/Buttons/DeleteButton/DeleteButton';
import EditButton from 'components/Buttons/EditButton/EditButton';

import { notifySuccess, notifyError } from 'helpers/toastNotify';

import {
  Box,
  Title,
  Item,
  LinkAlbum,
  IconAlbum,
  AlbumName,
} from './UserProfile.styled';

const UserProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();
  console.log(id);

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

  const handleToggleModal = async id => {
    setIsOpen(!isOpen);
  };

  // if (data) {
  //   console.log(data);
  // }

  return (
    <>
      {data && (
        <Box>
          <div>{data.name}</div>
          <div>{data.email}</div>
          <Title>My Albums</Title>
          <ul>
            {data &&
              data.myAlbums.map(({ _id: id, name, backgroundURL }) => {
                return (
                  <Item key={id}>
                    <LinkAlbum to={`/album/${id}`}>
                      <IconAlbum src={backgroundURL} alt="" />
                      <AlbumName>{name}</AlbumName>
                    </LinkAlbum>
                    <DeleteButton onDelete={() => handleDelete(id)} />
                    <EditButton onChange={handleToggleModal} />
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
