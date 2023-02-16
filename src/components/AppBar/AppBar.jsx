import Logo from 'components/Logo/Logo';
import AddButton from 'components/Buttons/AddButton/AddButton';
import AddAlbumForm from 'components/Forms/AddalbumForm/AddAlbumForm';
import AuthMenu from 'components/AuthMenu/AuthMenu';
import UserMenu from 'components/UserMenu/UserMenu';

import useGetCurrentUser from 'react-query/useGetCurrentUser';

// import useGetQuery from 'react-query/useGetQuery';

import { Wrapper } from './AppBar.styled';
// import { UserContext } from 'pages/UserPage/UserPage';
const AppBar = () => {
  const { data } = useGetCurrentUser();

  // const data = useGetQuery('user');

  return (
    <Wrapper>
      <Logo />
      <AddAlbumForm />
      {data ? <UserMenu /> : <AuthMenu />}
    </Wrapper>
  );
};

export default AppBar;
