import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { useGetQuery } from 'react-query/useGetQuery';

// import DeleteButton from 'components/Buttons/DeleteButton/DeleteButton';

import {
  Box,
  NameField,
  PhotoList,
  PhotoItem,
  DeleteBtn,
  DeleteIcon,
} from './UpdateAlbum.styled';

const UpdateAlbum = () => {
  const { myAlbums } = useGetQuery('user');
  const { id } = useParams();

  const currentAlbum = myAlbums ? myAlbums.find(album => album._id === id) : {};

  const [name, setName] = useState(currentAlbum.name);

  return (
    <Box>
      <form action="">
        <label htmlFor="1"></label>
        <NameField
          type="text"
          name="name"
          id="1"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </form>
      {/* <h1>{currentAlbum.name}</h1> */}
      {/* <img src={currentAlbum.backgroundURL} alt="cover" /> */}
      <PhotoList>
        {currentAlbum.photo.map(({ _id: id, photoURL }) => {
          return (
            <PhotoItem key={id}>
              <img src={photoURL} alt="" />
              <DeleteBtn />
            </PhotoItem>
          );
        })}
      </PhotoList>
    </Box>
  );
};

export default UpdateAlbum;
