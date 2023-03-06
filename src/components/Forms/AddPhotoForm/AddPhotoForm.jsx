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

import {
  Box,
  WrapperInput,
  PlaceField,
  DateField,
} from './AddPhotoForm.styled';

const AddPhotoForm = () => {
  const [place, setPlace] = useState('');
  const [date, setDate] = useState(dayjs('22.02.2022'));
  const [photo, setPhoto] = useState('');
  const [comments, setComments] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const { mutateAsync: addPhoto, isLoading } = useAddPhoto();
  const { id } = useParams();

  const handleToggleForm = () => {
    setIsOpen(!isOpen);
  };

  // const handleChangeDate = newValue => {
  //   setDate(newValue);
  // };

  // const uploadImage = e => {
  //   setPhoto(e.target.files[0]);
  // };

  const handleSubmit = async e => {
    e.preventDefault();

    const newPhoto = new FormData();
    newPhoto.append('place', place);
    newPhoto.append('date', date);
    newPhoto.append('photoURL', photo);
    newPhoto.append('comments', comments);
    newPhoto.append('albumId', id);

    // for (const value of newPhoto.values()) {
    //   console.log(value);
    // }

    try {
      await addPhoto(newPhoto);
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
            <Box>
              <div>
                <label htmlFor="">
                  Photo
                  <input
                    id="file"
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    name="photoURL"
                    onChange={e => setPhoto(e.target.files[0])}
                  />
                </label>
              </div>

              <div>
                <WrapperInput>
                  <PlaceField
                    label="Place"
                    name="place"
                    type="text"
                    value={place}
                    onChange={e => setPlace(e.target.value)}
                    variant="standard"
                  />
                </WrapperInput>
                <WrapperInput>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateField
                      label="Date"
                      inputFormat="DD/MM/YYYY"
                      value={date}
                      onChange={newValue => setDate(newValue)}
                      renderInput={params => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </WrapperInput>
                <WrapperInput>
                  <TextareaAutosize
                    aria-label="empty textarea"
                    placeholder="Comments"
                    style={{ width: 200, height: 50 }}
                    value={comments}
                    onChange={e => setComments(e.target.value)}
                  />
                </WrapperInput>
              </div>
            </Box>

            <Button type="submit" disabled={isLoading} title={'add'} />
          </form>
        </Modal>
      )}
    </>
  );
};

export default AddPhotoForm;
