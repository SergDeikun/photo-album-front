import { useParams } from 'react-router-dom';

import useGetAlbumById from 'react-query/usegetAlbumById';

import Container from 'components/Container/Container';
// import AddButton from 'components/Buttons/AddButton/AddButton';
import AddPhotoForm from 'components/Forms/AddPhotoForm/AddPhotoForm';

const CurrentAlbumPage = () => {
  const { id } = useParams();
  const { data } = useGetAlbumById(id);
  // console.log(data);

  return (
    <Container>
      <AddPhotoForm />
      {/* <AddButton title={'Add foto'} onClick={handleToggleForm} /> */}
      {data && <h1>{data.name}</h1>}
      <ul>
        {data &&
          data.photo.map((item, id) => {
            return (
              <li key={id}>
                <img src={item.photoURL} alt="" />
              </li>
            );
          })}
      </ul>
    </Container>
  );
};

export default CurrentAlbumPage;
