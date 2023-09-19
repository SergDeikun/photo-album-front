import { Btn } from './Button.styled';
import PulseLoader from 'react-spinners/PulseLoader';

const Button = ({ onClick, title, type, disabled }) => {
  return (
    <>
      <Btn type={type} onClick={onClick} disabled={disabled}>
        {disabled ? <PulseLoader size={8} /> : title}
      </Btn>
    </>
  );
};

export default Button;
