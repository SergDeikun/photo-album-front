import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

import { DateField } from './DateInput.styled';

const DateInput = ({
  value,
  onChange,
  onFocus,
  isDateFocused,
  onBlur,
  className,
  readOnly,
}) => {
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
          isDateFocused={isDateFocused}
          readOnly={readOnly}
          renderInput={params => (
            <TextField
              {...params}
              onFocus={onFocus}
              onBlur={onBlur}
              // isDateFocused={isDateFocused}
            />
          )}
        />
      </LocalizationProvider>
    </>
  );
};

export default DateInput;
