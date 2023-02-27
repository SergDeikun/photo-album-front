import { useState } from 'react';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';

import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import TextareaAutosize from '@mui/base/TextareaAutosize';

import useAddPhoto from 'react-query/useAddPhoto';

import AddButton from 'components/Buttons/AddButton/AddButton';
import Modal from 'components/Modal/Modal';
import Button from 'components/Buttons/Button';

const AddPhotoForm = () => {
  const [place, setPlace] = useState('');
  const [date, setDate] = useState(dayjs('22.02.2022'));
  const [photo, setPhoto] = useState('');
  const [comments, setComments] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const { mutateAsync: addPhoto, isLoading } = useAddPhoto();
  const { id } = useParams();
  console.log(id);

  const handleToggleForm = () => {
    setIsOpen(!isOpen);
  };

  // const handleChangeDate = newValue => {
  //   setDate(newValue);
  // };

  const uploadImage = e => {
    setPhoto(e.target.files[0]);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const newPhoto = new FormData();
    newPhoto.append('place', place);
    newPhoto.append('date', date);
    newPhoto.append('photoURL', photo);
    newPhoto.append('comments', comments);

    try {
      await addPhoto(id, newPhoto);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <AddButton title="Add photo" onClick={handleToggleForm} />

      {isOpen && (
        <Modal onClick={handleToggleForm}>
          <form encType="multipart/form-data" onSubmit={handleSubmit} action="">
            {/* PLACE */}
            <TextField
              label="Place"
              name="place"
              type="text"
              value={place}
              onChange={e => setPlace(e.target.value)}
              variant="standard"
            />
            {/* DATE */}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                label="Date desktop"
                inputFormat="DD/MM/YYYY"
                value={date}
                onChange={newValue => setDate(newValue)}
                renderInput={params => <TextField {...params} />}
              />
            </LocalizationProvider>
            {/* UPLOAD FILE */}
            <label htmlFor="img">
              <input
                id="img"
                type="file"
                name="photoURL"
                accept=".jpg, .jpeg, .png"
                onChange={uploadImage}
              />
              <Fab
                color="white"
                size="large"
                component="span"
                aria-label="add"
                variant="extended"
              >
                Background upload
              </Fab>
            </label>
            {/* COMMENTS */}
            <TextareaAutosize
              aria-label="empty textarea"
              placeholder="Empty"
              style={{ width: 200 }}
              value={comments}
              onChange={e => setComments(e.target.value)}
            />
            <Button type="submit" disabled={isLoading} title={'add'} />
          </form>
        </Modal>
      )}
    </>
  );
};

export default AddPhotoForm;
