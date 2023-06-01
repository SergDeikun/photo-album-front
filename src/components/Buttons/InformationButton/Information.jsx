import { Btn, IconBtn } from './Information.styled';

const InformationButton = ({ onClick }) => {
  return (
    <>
      <Btn type="button" onClick={onClick}>
        <IconBtn />
      </Btn>
    </>
  );
};

export default InformationButton;
