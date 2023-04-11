// import { useParams, useLocation } from 'react-router-dom';

// import useGetQuery from 'react-query/useGetQuery';
import useGetCurrentUser from 'react-query/useGetCurrentUser';
import useDeleteAlbum from 'react-query/useDeleteAlbum';

import DeleteButton from 'components/Buttons/DeleteButton/DeleteButton';
import EditButton from 'components/Buttons/EditButton/EditButton';

import { Box, Title, Item, LinkAlbum, IconAlbum } from './UserProfile.styled';

const UserProfile = () => {
  const { data } = useGetCurrentUser();
  // const data = useGetQuery('user');
  const { mutateAsync: deleteAlbum } = useDeleteAlbum();

  const handleDelete = id => {
    deleteAlbum(id);
  };

  if (data) {
    console.log(data);
  }

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
                      <p>{name}</p>
                    </LinkAlbum>
                    <DeleteButton onDelete={() => handleDelete(id)} />
                    <EditButton />
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
