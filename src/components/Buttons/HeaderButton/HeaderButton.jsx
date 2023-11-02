import { HeaderBtn } from './HeaderButton.styled';

const HeaderButton = ({ onClick, title, className }) => {
  return (
    <>
      <HeaderBtn type="button" onClick={onClick} className={className || ''}>
        {title}
      </HeaderBtn>
    </>
  );
};

export default HeaderButton;
