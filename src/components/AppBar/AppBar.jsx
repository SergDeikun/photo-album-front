import useGetCurrentUser from 'react-query/useGetCurrentUser';

import Logo from 'components/Logo/Logo';
import AuthMenu from 'components/AuthMenu/AuthMenu';
import UserMenu from 'components/UserMenu/UserMenu';
import AddAlbumForm from 'components/Forms/AddAlbumForm/AddAlbumForm';
// import AddPhotoForm from 'components/Forms/AddPhotoForm/AddPhotoForm';

// import useGetQuery from 'react-query/useGetQuery';

import { Wrapper } from './AppBar.styled';
// import { UserContext } from 'pages/UserPage/UserPage';
const AppBar = () => {
  const { data } = useGetCurrentUser();

  // const data = useGetQuery('user');
  // console.log(data);

  return (
    <Wrapper>
      <Logo />
      {data ? (
        <>
          <AddAlbumForm />
          <UserMenu />
        </>
      ) : (
        <AuthMenu />
      )}
    </Wrapper>
  );
};

export default AppBar;
