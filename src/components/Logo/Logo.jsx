import LogoIcon from '../../images/logo.png';

import { LogoLink, LogoImg } from './Logo.styled';

const Logo = ({ className }) => {
  return (
    <>
      <LogoLink to={'/'} className={className || ''}>
        <LogoImg src={LogoIcon} alt="icon" />
      </LogoLink>
    </>
  );
};

export default Logo;
