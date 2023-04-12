import { useState } from 'react';

import useGetCurrentUser from 'react-query/useGetCurrentUser';
import useDeleteAlbum from 'react-query/useDeleteAlbum';
// import useChangeAlbum from 'react-query/useChangeAlbum';

import Modal from 'components/Modal/Modal';
// import AddAlbumForm from 'components/Forms/AddalbumForm/AddAlbumForm';
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
  const { data } = useGetCurrentUser();
  const { mutateAsync: deleteAlbum } = useDeleteAlbum();
  // const { mutateAsync: changeAlbum } = useChangeAlbum();

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

  const handleOpenModal = async id => {
    setIsOpen(!isOpen);
    // await changeAlbum(id, {
    //   onSuccess: () => {
    //     notifySuccess('album changed');
    //   },
    //   onError: error => {
    //     notifyError(error.response.data.message);
    //   },
    // });
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
                    <EditButton onChange={handleOpenModal} />
                  </Item>
                );
              })}
          </ul>
        </Box>
      )}
      {isOpen && <Modal />}
    </>
  );
};

export default UserProfile;
