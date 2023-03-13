import axios from 'axios';

const API_URL = 'https://photo-album-0ycb.onrender.com';

let token = '';

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

  token = response.data.token;

  return response.data;
};

export const getCurrentUser = async () => {
  const response = await axios.get(`${API_URL}/api/user/current`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const addAlbum = async newAlbum => {
  const response = await axios.post(`${API_URL}/api/album`, newAlbum, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const getAlbumById = async id => {
  const response = await axios.get(`${API_URL}/api/album/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const addPhoto = async newPhoto => {
  const id = newPhoto.get('albumId');

  const response = await axios.post(`${API_URL}/api/photo/${id}`, newPhoto, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
