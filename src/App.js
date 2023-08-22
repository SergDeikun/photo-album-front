import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { useJsApiLoader } from '@react-google-maps/api';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ScrollToTop from 'react-scroll-to-top';

// import toastOptions from 'helpers/toastOptions';

import SharedLayout from './components/SharedLayout/SharedLayout';
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const AlbumsPage = lazy(() => import('./pages/AlbumsPage/AlbumsPage'));
const CurrentAlbumPage = lazy(() =>
  import('./pages/CurrentAlbumPage/CurrentAlbumPage')
);
const UserPage = lazy(() => import('./pages/UserPage/UserPage'));
const UpdateAlbumPage = lazy(() =>
  import('./pages/UpdateAlbumPage/UpdateAlbumPage')
);

const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const PhotoPage = lazy(() => import('pages/PhotoPage/PhotoPage'));

// const Map = lazy(() => import('./components/Map/Map'));

const API_KEY = process.env.REACT_APP_API_KEY;
const libraries = ['places'];

function App() {
  // const { isLoaded, loadError } = useJsApiLoader({
  //   googleMapsApiKey: API_KEY,
  //   libraries,
  // });
  useJsApiLoader({
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
          <Route path="/profile" element={<UserPage />} />
          <Route path="/album-list" element={<AlbumsPage />} />
          <Route path="/album/:id" element={<CurrentAlbumPage />} />
          {/* <Route path="/photo/:id" element={<PhotoPage />} /> */}
          <Route path="/:id/:name/update" element={<UpdateAlbumPage />} />

          {/* На помилку поставити <Not Found/> */}
          {/* <Route path="/map" element={<Map />} /> */}
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {/* <ToastContainer {...toastOptions} /> */}
      <ToastContainer />
      <ScrollToTop smooth component={<p style={{ color: '#ff0044' }}>UP</p>} />
    </>
  );
}

export default App;
