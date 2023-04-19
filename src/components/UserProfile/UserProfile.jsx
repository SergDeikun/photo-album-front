import { Link } from 'react-router-dom';

import useGetCurrentUser from 'react-query/useGetCurrentUser';
import useDeleteAlbum from 'react-query/useDeleteAlbum';

import DeleteButton from 'components/Buttons/DeleteButton/DeleteButton';

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

  // if (data) {
  //   console.log(data);
  // }

  return (
    <>
      {data && (
        <Box>
          <h1>{data.name}</h1>
          <h1>{data.email}</h1>
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
                    <DeleteButton onDelete={() => handleDelete(id)} />
                    <Link to={`/${id}/${name}/update`}>update</Link>
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
