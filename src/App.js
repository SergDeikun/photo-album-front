import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { useJsApiLoader } from '@react-google-maps/api';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import toastOptions from 'helpers/toastOptions';

import SharedLayout from './components/SharedLayout/SharedLayout';
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const AlbumsPage = lazy(() => import('./pages/AlbumsPage/AlbumsPage'));
const CurrentAlbumPage = lazy(() =>
  import('./pages/CurrentAlbumPage/CurrentAlbumPage')
);
const PhotoPage = lazy(() => import('pages/PhotoPage/PhotoPage'));

const Map = lazy(() => import('./components/Map/Map'));

const API_KEY = process.env.REACT_APP_API_KEY;
const libraries = ['places'];

function App() {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: API_KEY,
    libraries,
  });

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/album-list" element={<AlbumsPage />} />
          <Route path="/album/:id" element={<CurrentAlbumPage />} />
          <Route path="/photo/:id" element={<PhotoPage />} />

          {/* На помилку поставити <Not Found/> */}
          {/* {isLoaded ? <Route path="/map" element={<Map />} /> : <h2>Error</h2>} */}
          <Route path="/map" element={<Map />} />
        </Route>
      </Routes>
      <ToastContainer {...toastOptions} />
    </>
  );
}

export default App;
