import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

import { DateField } from './DateInput.styled';

const DateInput = ({ value, onChange, className }) => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateField
          name="date"
          className={className || ''}
          required={false}
          inputFormat="DD.MM.YYYY"
          maxDate={new Date()}
          value={dayjs(value, 'DD.MM.YYYY')}
          onChange={newValue => onChange(dayjs(newValue).format('DD.MM.YYYY'))}
          renderInput={params => <TextField {...params} />}
        />
      </LocalizationProvider>
    </>
  );
};

export default DateInput;
