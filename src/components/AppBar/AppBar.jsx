import { useParams } from 'react-router-dom';

import useGetCurrentUser from 'react-query/useGetCurrentUser';

import Logo from 'components/Logo/Logo';
import AuthMenu from 'components/AuthMenu/AuthMenu';
import UserMenu from 'components/UserMenu/UserMenu';
import AddAlbumForm from 'components/Forms/AddalbumForm/AddAlbumForm';
import AddPhotoForm from 'components/Forms/AddPhotoForm/AddPhotoForm';

import { Wrapper } from './AppBar.styled';
const AppBar = () => {
  const { id } = useParams();
  const { data } = useGetCurrentUser();

  // if (data) {
  //   console.log(data);
  // }

  return (
    <Wrapper>
      <Logo />
      {data ? (
        <>
          {/* TODO: може є інший варіант??? */}
          {id ? <AddPhotoForm /> : <AddAlbumForm />}
          <UserMenu />
        </>
      ) : (
        <AuthMenu />
      )}
    </Wrapper>
  );
};

export default AppBar;
