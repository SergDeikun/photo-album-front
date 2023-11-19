import { Btn, IconBtn } from './SaveButton.styled';

const SaveButton = ({ className, disabled }) => {
  return (
    <>
      <Btn type="submit" className={className || ''} disabled={disabled}>
        <IconBtn />
      </Btn>
    </>
  );
};

export default SaveButton;
