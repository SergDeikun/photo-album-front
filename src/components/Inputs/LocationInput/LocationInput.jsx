import { useState } from 'react';
import {
  GoogleMap,
  LoadScript,
  // GoogleApiWrapper,
  Marker,
} from '@react-google-maps/api';
import { Link } from 'react-router-dom';

const API_KEY = process.env.REACT_APP_API_KEY;

const containerStyle = {
  width: '400px',
  height: '400px',
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const LocationInput = () => {
  const [location, setLocation] = useState('');

  const mapUrl = `"https://maps.googleapis.com/maps/api/js?key=${API_KEY}`;

  const handleMarkerClick = event => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    setLocation({ location: `${lat}, ${lng}` });
  };

  const handleClick = () => {
    window.location.href = mapUrl;
  };

  return (
    <>
      <button type="button" onClick={handleClick}>
        go
      </button>
      <LoadScript googleMapsApiKey={API_KEY}>
        <GoogleMap
          center={{ lat: 40.748817, lng: -73.985428 }}
          zoom={14}
          onClick={handleMarkerClick}
        >
          <Marker position={{ lat: 40.748817, lng: -73.985428 }} />
        </GoogleMap>
      </LoadScript>
    </>
  );
};

export default LocationInput;
