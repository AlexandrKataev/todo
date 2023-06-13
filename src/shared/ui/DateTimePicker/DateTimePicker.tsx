import { FC } from 'react';

import { CalendarIcon } from 'shared/ui';

import { SxProps } from '@mui/material';
import { MobileDateTimePicker } from '@mui/x-date-pickers-pro';
import TextField from '@mui/material/TextField';
import { Dayjs } from 'dayjs';

const inputSx: SxProps = {
  cursor: 'pointer',
  bgcolor: 'var(--color-row-background)',
  color: 'var(--color-main)',
  fontSize: '16px',
  width: 160,
  height: 30,
  border: 'none',
  borderRadius: '10px',
  '& fieldset': { border: 'none' },
};

interface DateTimePickerProps {
  date: Dayjs;
  handleChange: (newValue: Dayjs | null) => void;
}

export const DateTimePicker: FC<DateTimePickerProps> = (props) => {
  return (
    <MobileDateTimePicker
      views={['month', 'day', 'hours', 'minutes']}
      hideTabs={false}
      showDaysOutsideCurrentMonth
      components={{ OpenPickerIcon: CalendarIcon }}
      InputProps={{
        sx: inputSx,
      }}
      OpenPickerButtonProps={{ sx: { color: 'var(--color-main)' } }}
      value={props.date}
      onChange={props.handleChange}
      renderInput={(params) => <TextField {...params} />}
    />
  );
};
