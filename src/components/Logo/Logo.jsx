import LogoIcon from '../../images/logo.png';

import { LogoLink, LogoImg } from './Logo.styled';

const Logo = () => {
  return (
    <>
      <LogoLink to={'/'}>
        <LogoImg src={LogoIcon} alt="icon" />
      </LogoLink>
    </>
  );
};

export default Logo;
