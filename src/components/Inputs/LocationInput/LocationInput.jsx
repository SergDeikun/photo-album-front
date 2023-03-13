import { useState } from 'react';
import { Map, GoogleApiWrapper } from '@react-google-maps/api';

const API_KEY = process.env.REACT_APP_API_KEY;

const containerStyle = {
  width: '400px',
  height: '400px',
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

// const LocationInput = () => {
//   return (
//     <LoadScript googleMapsApiKey="API_KEY">
//       <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
//         {/* Child components, such as markers, info windows, etc. */}
//         <></>
//       </GoogleMap>
//     </LoadScript>
//   );
// };

const LocationInput = () => {
  const [location, setLocation] = useState('London');

  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${location}&output=embed`;

  const handleChange = e => {
    setLocation(e.target.value);
  };

  return (
    <>
      <label htmlFor="">
        <a href={mapUrl}>GO</a>
        <input type="text" value={location} onChange={handleChange} />
      </label>
      <iframe src={mapUrl} title="This is a unique title" />
    </>
  );
};

export default LocationInput;
