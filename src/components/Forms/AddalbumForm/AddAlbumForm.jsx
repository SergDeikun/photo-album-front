import { useState } from 'react';

import useAddAlbum from 'react-query/useAddAlbum';

import Modal from 'components/Modal/Modal';
import AddButton from 'components/Buttons/AddButton/AddButton';
import Button from 'components/Buttons/Button';

import { Title, Form, Input } from './AddAlbumForm.styled';

const AddAlbumForm = () => {
  const [name, setName] = useState('');
  const [backgroundURL, setBackgroundURL] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const { mutateAsync: addAlbum, isLoading } = useAddAlbum();

  const handleToggleForm = () => {
    setIsOpen(!isOpen);
  };

  const uploadImage = e => {
    setBackgroundURL(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    // const data = new FormData();

    // data.append('name', name);
    // data.append('backgroundURL', backgroundURL);

    // setName('');
    // setBackgroundURL('');
    // setIsOpen(false);

    try {
      await addAlbum({ name, backgroundURL });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <AddButton onClick={handleToggleForm} />
      {isOpen && (
        <Modal onClick={handleToggleForm}>
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
                name="backgroundURL"
                accept=".jpg, .jpeg, .png"
                onChange={uploadImage}
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
