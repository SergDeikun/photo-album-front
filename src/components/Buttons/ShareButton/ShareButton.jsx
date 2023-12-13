import { ShareIcon, ShareBtn } from './ShareButton.styled';

const ShareButton = ({ onClick }) => {
  return (
    <>
      <ShareBtn type="button" onClick={onClick}>
        <ShareIcon />
      </ShareBtn>
    </>
  );
};

export default ShareButton;
