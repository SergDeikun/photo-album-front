import { Btn, LocationIcon } from './LocationButton.styled';

const LocationButton = ({ isInputFocused, className }) => {
  return (
    <>
      <Btn
        className={className || ''}
        type="button"
        isInputFocused={isInputFocused}
      >
        <LocationIcon />
      </Btn>
    </>
  );
};

export default LocationButton;
