import { useContext, useEffect } from 'react';

import Logo from 'components/Logo/Logo';
import AuthMenu from 'components/AuthMenu/AuthMenu';
import UserMenu from 'components/UserMenu/UserMenu';

// import { UserContext } from 'pages/UserPage/UserPage';
import { UserContext } from 'context/userContext';
import { Wrapper } from './AppBar.styled';

const AppBar = () => {
  const token = useContext(UserContext);

  if (token) {
    console.log(token);
  }

  return (
    <Wrapper>
      <Logo />
      {token ? <UserMenu /> : <AuthMenu />}
      {/* <AuthMenu /> */}
      {/* <UserMenu /> */}
    </Wrapper>
  );
};

export default AppBar;
