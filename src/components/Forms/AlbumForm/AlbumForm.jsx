import { useState } from 'react';

import useAddAlbum from 'react-query/useAddAlbum';

import { notifySuccess, notifyError } from 'helpers/toastNotify';

import FileInput from 'components/Inputs/FileInput/FileImput';
import Button from 'components/Buttons/Button';

import {
  Box,
  NameWrapper,
  InputName,
  ButttonWraper,
  UploadCover,
} from './AlbumForm.styled';

const AlbumForm = ({ onClose }) => {
  const [name, setName] = useState('');
  const [backgroundURL, setBackgroundURL] = useState('');
  const [previewBackground, setPreviewBackground] = useState('');
  console.log(previewBackground);
  const { mutateAsync: addAlbum, isLoading } = useAddAlbum();

  const uploadImage = e => {
    setPreviewBackground(URL.createObjectURL(e.target.files[0]));
    setBackgroundURL(e.target.files[0]);
  };

  const handleClearInput = () => {
    setPreviewBackground('');
    setBackgroundURL('');
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const newAlbum = new FormData();
    newAlbum.append('name', name);
    newAlbum.append('backgroundURL', backgroundURL);

    try {
      await addAlbum(newAlbum, {
        onSuccess: () => {
          notifySuccess('album added');
          setName('');
          setPreviewBackground('');
          setBackgroundURL('');
          onClose();
        },
        onError: error => {
          notifyError(error.response.data.message);
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form encType="multipart/form-data" onSubmit={handleSubmit} action="">
        <div
          style={{
            // border: '1px solid tomato',
            backgroundImage: `url(${previewBackground})`,
          }}
        >
          <NameWrapper>
            <label>
              <InputName
                required
                autoFocus
                type="text"
                name="name"
                value={name}
                placeholder="Enter album name"
                onChange={e => setName(e.target.value)}
              />
            </label>
          </NameWrapper>
        </div>

        {name && (
          <ButttonWraper>
            <UploadCover
              uploadFile={previewBackground}
              onChange={uploadImage}
              title="Cover"
            />
            <Button type="submit" disabled={isLoading} title={'Add'} />
          </ButttonWraper>
        )}
      </form>
    </>
  );
};

export default AlbumForm;
