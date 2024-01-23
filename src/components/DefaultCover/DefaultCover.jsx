import logoIcon from '../../images/logoIcon.svg';

import { Cover, Icon } from './DefaultCover.styled';

const DefaultCover = ({ className, children }) => {
  return (
    <Cover className={className || ''}>
      {children}
      <Icon src={logoIcon} alt="icon" />
    </Cover>
  );
};

export default DefaultCover;
