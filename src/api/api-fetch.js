import axios from 'axios';

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
export const getCurrentUser = async token => {
  const response = await axios.get(`${API_URL}/api/user/current`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const updateUser = async ({ name, email }, token) => {
  const response = await axios.patch(
    `${API_URL}/api/user/update`,
    { name, email },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const logout = async token => {
  const response = await axios.get(`${API_URL}/api/user/logout`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

// Album
export const addAlbum = async (newAlbum, token) => {
  const response = await axios.post(`${API_URL}/api/album`, newAlbum, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const getAlbumById = async (id, token) => {
  const response = await axios.get(`${API_URL}/api/album/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const deleteAlbum = async (id, token) => {
  const response = await axios.delete(`${API_URL}/api/album/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const changeAlbum = async ({ updateAlbum, id }) => {
  const response = await axios.patch(
    `${API_URL}/api/album/${id}/update`,
    updateAlbum,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        // Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

// Photo
export const addPhoto = async ({ newPhoto, albumId }, token) => {
  const response = await axios.post(
    `${API_URL}/api/photo/${albumId}`,
    newPhoto,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const getPhotoById = async id => {
  const response = await axios.get(`${API_URL}/api/photo/${id}`, {
    headers: {
      // Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const updatePhoto = async ({ date, comments, place, photoId }) => {
  const response = await axios.patch(
    `${API_URL}/api/photo/${photoId}`,
    {
      date,
      comments,
      place,
    },
    {
      headers: {
        // Authorization: `Bearer ${token}`,
      },
    }
  );

  return response;
};

export const deletePhoto = async id => {
  const response = await axios.delete(`${API_URL}/api/photo/${id}`, {
    headers: {
      // Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
