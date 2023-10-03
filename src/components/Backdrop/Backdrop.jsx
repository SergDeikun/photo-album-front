import { BackdropBox } from './Backdrop.styled';

const Backdrop = ({ className, children }) => {
  return <BackdropBox className={className || ''}>{children}</BackdropBox>;
};

export default Backdrop;
