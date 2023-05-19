import { useState } from 'react';

import useAddAlbum from 'react-query/useAddAlbum';
import { notifySuccess, notifyError } from 'helpers/toastNotify';

import Button from 'components/Buttons/Button';
import FileInput from 'components/Inputs/FileInput/FileImput';
import TextInput from 'components/Inputs/TextInput/TextInput';

const AlbumForm = ({ updateName }) => {
  const [name, setName] = useState(updateName);
  const [backgroundURL, setBackgroundURL] = useState('');
  const [previewBackground, setPreviewBackground] = useState('');
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
        <FileInput
          title="Upload cover to your album"
          uploadFile={previewBackground}
          clearInput={handleClearInput}
          src={previewBackground}
          onChange={uploadImage}
          alt="cover"
        />

        <TextInput
          required={true}
          label="Album name"
          name="name"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Button type="submit" disabled={isLoading} title={'add'} />
      </form>
    </>
  );
};

export default AlbumForm;
