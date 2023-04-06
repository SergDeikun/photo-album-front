import usePlacesAutocomplete, {
  getGeocode,
  // getLatLng,
} from 'use-places-autocomplete';

import useOnclickOutside from 'react-cool-onclickoutside';

import { Root, Input, List, Item } from './Autocomplite.styled';

import LocationButton from 'components/Buttons/LocationButton/LocationButton';

const Autocomplite = ({ onSelect }) => {
  const {
    // ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    // callbackName: 'YOUR_CALLBACK_NAME',
    requestOptions: {
      initOnMount: false,
    },
    debounce: 300,
  });
  const ref = useOnclickOutside(() => {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    clearSuggestions();
  });

  const handleInput = e => {
    // Update the keyword of the input element
    setValue(e.target.value);
  };

  const handleSelect =
    ({ description }) =>
    () => {
      // When user selects a place, we can replace the keyword without request data from API
      // by setting the second parameter to "false"
      onSelect(description);

      setValue(description, false);
      clearSuggestions();

      console.log(description);
      // Get latitude and longitude via utility functions
      getGeocode({ address: description }).then(results => {
        // const { lat, lng } = getLatLng(results[0]);
        // console.log('📍 Coordinates: ', { lat, lng });
      });
    };

  const renderSuggestions = () =>
    data.map(suggestion => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <Item key={place_id} onClick={handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </Item>
      );
    });
  return (
    <Root ref={ref}>
      <label>
        <Input
          type="text"
          value={value}
          onChange={handleInput}
          //   disabled={!ready}
          placeholder="Location"
        />
      </label>
      <LocationButton />
      {status === 'OK' && <List>{renderSuggestions()}</List>}
    </Root>
  );
};

export default Autocomplite;
