import { GoogleMap, LoadScript } from '@react-google-maps/api';

import Container from 'components/Container/Container';
import Autocomplite from 'components/Autocomplite/Autocomplite';

const containerStyle = {
  width: '100%',
  height: '600px',
};

const Map = () => {
  const center = {
    lat: -3.745,
    lng: -38.523,
  };

  return (
    <Container>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Child components, such as markers, info windows, etc. */}
        <Autocomplite />
      </GoogleMap>
    </Container>
  );
};

export default Map;
