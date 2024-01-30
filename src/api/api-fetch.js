import axios from 'axios';

import { isValidToken } from 'helpers/isValidToken';
// export const API_URL = 'https://photo-album-back.fly.dev';

const API_URL = 'http://localhost:3000';

//* Auth
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

//* User
export const getCurrentUser = async () => {
  try {
    if (!isValidToken()) {
      return;
    }

    const response = await axios.get(`${API_URL}/api/user/current`);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateUser = async ({ name, email }) => {
  try {
    if (!isValidToken()) {
      return;
    }

    const response = await axios.patch(`${API_URL}/api/user/update`, {
      name,
      email,
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const logout = async () => {
  try {
    if (isValidToken()) {
      return;
    }

    const response = await axios.post(`${API_URL}/api/user/logout`, {});

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

//* Album
export const addAlbum = async newAlbum => {
  try {
    if (!isValidToken()) {
      return;
    }

    const response = await axios.post(`${API_URL}/api/album`, newAlbum, {});

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const confirmAccess = async ({ email, password, albumId }) => {
  try {
    if (!isValidToken()) {
      return;
    }

    const response = await axios.post(
      `${API_URL}/api/album/${albumId}/access`,
      {
        email,
        password,
      }
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getAlbumById = async id => {
  try {
    if (!isValidToken()) {
      return;
    }

    const response = await axios.get(`${API_URL}/api/album/${id}`, {});

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteAlbum = async id => {
  try {
    if (!isValidToken()) {
      return;
    }

    const response = await axios.delete(`${API_URL}/api/album/${id}`, {});

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const changeAlbum = async ({ updateAlbum, albumId }) => {
  try {
    if (!isValidToken()) {
      return;
    }

    const response = await axios.patch(
      `${API_URL}/api/album/${albumId}/update`,
      updateAlbum
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteViwer = async ({ albumId, viwerId }) => {
  try {
    if (!isValidToken()) {
      return;
    }

    const response = await axios.delete(
      `${API_URL}/api/album/${albumId}/remove/${viwerId}`,
      {}
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
  const response = await axios.delete(
    `${API_URL}/api/album/${albumId}/remove/${viwerId}`,
    {}
  );

  return response.data;
};

//* Photo
export const addPhoto = async ({ newPhoto, albumId }) => {
  try {
    if (!isValidToken()) {
      return;
    }

    const response = await axios.post(
      `${API_URL}/api/photo/${albumId}`,
      newPhoto
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
  const response = await axios.post(
    `${API_URL}/api/photo/${albumId}`,
    newPhoto
  );

  return response.data;
};

export const getPhotoById = async albumId => {
  try {
    if (!isValidToken()) {
      return;
    }

    const response = await axios.get(`${API_URL}/api/photo/${albumId}`, {});

    return response.data;
  } catch (error) {
    console.error(error);
  }
  const response = await axios.get(`${API_URL}/api/photo/${albumId}`, {});

  return response.data;
};

export const updatePhoto = async ({ date, comments, place, photoId }) => {
  try {
    if (!isValidToken()) {
      return;
    }

    const response = await axios.patch(`${API_URL}/api/photo/${photoId}`, {
      date,
      comments,
      place,
    });

    return response;
  } catch (error) {
    console.error(error);
  }
  const response = await axios.patch(`${API_URL}/api/photo/${photoId}`, {
    date,
    comments,
    place,
  });

  return response;
};

export const deletePhoto = async id => {
  try {
    if (!isValidToken()) {
      return;
    }

    const response = await axios.delete(`${API_URL}/api/photo/${id}`, {});

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
