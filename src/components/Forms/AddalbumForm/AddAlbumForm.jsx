import { useState } from 'react';

import Backdrop from 'components/Backdrop/Backdrop';
import AddButton from 'components/Buttons/AddButton/AddButton';
import CloseButton from 'components/Buttons/CloseButton/CloseButton';

import { Form } from './AddAlbumForm.styled';

const AddAlbumForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(true);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <AddButton onClick={handleOpenMenu} />
      {isOpen && (
        <Backdrop>
          <CloseButton onClick={handleCloseMenu} />
          {/* <button onClick={handleCloseMenu}>X</button> */}

          <Form action="">
            <h1>Add album</h1>
            <input type="text" name="" id="" />
            <input type="file" name="" id="" />
            <button type="submit">add</button>
          </Form>
        </Backdrop>
      )}
    </>
  );
};

export default AddAlbumForm;
