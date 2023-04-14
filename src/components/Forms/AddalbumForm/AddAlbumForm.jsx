import { useState } from 'react';

import useAddAlbum from 'react-query/useAddAlbum';
import { notifySuccess, notifyError } from 'helpers/toastNotify';

import Modal from 'components/Modal/Modal';
import Button from 'components/Buttons/Button';
import FileInput from 'components/Inputs/FileInput/FileImput';
import TextInput from 'components/Inputs/TextInput/TextInput';

const AddAlbumForm = ({ onClose }) => {
  const [name, setName] = useState('');
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
          onClose();
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
      <Modal onClose={onClose}>
        <form encType="multipart/form-data" onSubmit={handleSubmit} action="">
          <FileInput
            title="Upload cover to your album"
            name={backgroundURL}
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
      </Modal>
    </>
  );
};

export default AddAlbumForm;
