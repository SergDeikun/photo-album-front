import { Btn } from './Button.styled';
import PulseLoader from 'react-spinners/PulseLoader';

const Button = ({ onClick, title, type, disabled }) => {
  return (
    <>
      <Btn onClick={onClick} type={type}>
        {disabled ? <PulseLoader /> : title}
      </Btn>
    </>
  );
};

export default Button;
