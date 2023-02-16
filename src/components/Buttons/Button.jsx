import { Btn } from './Button.styled';

const Button = ({ onClick, title, type, disabled }) => {
  return (
    <>
      <Btn onClick={onClick} type={type} disabled={disabled}>
        {title}
      </Btn>
    </>
  );
};

export default Button;
