import { Btn, IconBtn } from './InformationButton.styled';

const InformationButton = ({ onClick, className }) => {
  return (
    <>
      <Btn type="button" onClick={onClick} className={className || ''}>
        <IconBtn />
      </Btn>
    </>
  );
};

export default InformationButton;
