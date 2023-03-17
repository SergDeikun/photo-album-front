import { useState } from 'react';

import { GoogleMap, Marker } from '@react-google-maps/api';

import Container from 'components/Container/Container';
import Autocomplite from 'components/Autocomplite/Autocomplite';

const containerStyle = {
  width: '100%',
  height: '600px',
};

const defaultCenter = {
  lat: 50.4501,
  lng: 30.5234,
};

const Map = () => {
  const [place, setPlace] = useState(defaultCenter);

  const onPlaceSelect = coordinates => {
    setPlace(coordinates);
  };

  return (
    <Container>
      <GoogleMap mapContainerStyle={containerStyle} center={place} zoom={10}>
        <Autocomplite onSelect={onPlaceSelect} />
        <Marker position={place} clickable={true} />
      </GoogleMap>
    </Container>
  );
};

export default Map;
