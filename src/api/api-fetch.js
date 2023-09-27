import axios from 'axios';
import Cookies from 'js-cookie';

// const API_URL = 'https://photo-album-gggk.onrender.com';
// const API_URL = 'https://photo-album.fly.dev';

const API_URL = 'http://localhost:3000';

// Auth
export const createNewUser = async ({ name, email, password }) => {
  const response = await axios.post(`${API_URL}/api/auth/register`, {
    name,
    email,
    password,
  });

  return response.data;
};

export const loginUser = async ({ email, password }) => {
  const response = await axios.post(`${API_URL}/api/auth/login`, {
    email,
    password,
  });

  return response.data;
};

// User
export const getCurrentUser = async () => {
  const token = Cookies.get('token');
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  const response = await axios.get(`${API_URL}/api/user/current`);

  return response.data;
};

export const updateUser = async ({ name, email }) => {
  const response = await axios.patch(`${API_URL}/api/user/update`, {
    name,
    email,
  });

  return response.data;
};

export const logout = async () => {
  const response = await axios.get(`${API_URL}/api/user/logout`, {});

  return response.data;
};

// Album
export const addAlbum = async newAlbum => {
  const response = await axios.post(`${API_URL}/api/album`, newAlbum, {});

  return response.data;
};

export const getAlbumById = async id => {
  const response = await axios.get(`${API_URL}/api/album/${id}`, {});

  return response.data;
};

export const deleteAlbum = async id => {
  const response = await axios.delete(`${API_URL}/api/album/${id}`, {});

  return response.data;
};

export const changeAlbum = async ({ updateAlbum, id }) => {
  const response = await axios.patch(
    `${API_URL}/api/album/${id}/update`,
    updateAlbum
  );
  return response.data;
};

// Photo
export const addPhoto = async ({ newPhoto, albumId }) => {
  const response = await axios.post(
    `${API_URL}/api/photo/${albumId}`,
    newPhoto
  );

  return response.data;
};

export const getPhotoById = async id => {
  const response = await axios.get(`${API_URL}/api/photo/${id}`, {});

  return response.data;
};

export const updatePhoto = async ({ date, comments, place, photoId }) => {
  const response = await axios.patch(`${API_URL}/api/photo/${photoId}`, {
    date,
    comments,
    place,
  });

  return response;
};

export const deletePhoto = async id => {
  const response = await axios.delete(`${API_URL}/api/photo/${id}`, {});

  return response.data;
};
