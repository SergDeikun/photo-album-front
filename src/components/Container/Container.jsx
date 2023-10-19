import { ContainerBox } from './Container.styled';

const Container = ({ children, className }) => {
  return <ContainerBox className={className || ''}>{children}</ContainerBox>;
};

export default Container;
