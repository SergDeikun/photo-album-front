import Logo from 'components/Logo/Logo';
import AuthMenu from 'components/AuthMenu/AuthMenu';

import { Wrapper } from './AppBar.styled';

const AppBar = () => {
  return (
    <Wrapper>
      <Logo />
      <AuthMenu />
    </Wrapper>
  );
};

export default AppBar;
