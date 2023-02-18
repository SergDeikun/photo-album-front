import { useState } from 'react';

import useAddAlbum from 'react-query/useAddAlbum';

import Modal from 'components/Modal/Modal';
import AddButton from 'components/Buttons/AddButton/AddButton';
import Button from 'components/Buttons/Button';

import { Title, Form, Input } from './AddAlbumForm.styled';

const AddAlbumForm = () => {
  const [name, setName] = useState('');
  const [backgroundURL, setBackgroundURL] = useState('');
  console.log(backgroundURL);
  const [isOpen, setIsOpen] = useState(false);
  const { mutateAsync: addAlbum, isLoading } = useAddAlbum();

  const handleOpenForm = () => {
    setIsOpen(true);
  };

  const handleCloseForm = () => {
    setIsOpen(false);
  };

  const handleUpload = e => {
    // const { files } = e.currentTarget;
    setBackgroundURL(e.target.files[0]);
    // console.log(files);
  };

  const handleSubmit = async e => {
    console.log(e);
    e.preventDefault();

    try {
      await addAlbum({ name, backgroundURL });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <AddButton onClick={handleOpenForm} />
      {isOpen && (
        <Modal onClick={handleCloseForm}>
          <Title>Add album</Title>

          <Form encType="multipart/form-data" onSubmit={handleSubmit} action="">
            <label htmlFor="email">
              Name
              <Input
                id="email"
                type="text"
                name="name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </label>
            <label htmlFor="img">
              Background
              <Input
                id="img"
                type="file"
                name="img"
                value={backgroundURL}
                accept=".jpg,.jpeg,.png,"
                onChange={handleUpload}
              />
            </label>
            <Button type="submit" disabled={isLoading} title={'add'} />
          </Form>
        </Modal>
      )}
    </>
  );
};

export default AddAlbumForm;
