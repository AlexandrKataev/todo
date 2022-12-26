import { FC, useEffect, useState } from 'react';

import styles from './NewTaskCard.module.scss';

import { CalendarIcon, ItemIcon } from 'shared/ui';
import { useInput, useQueryCreateTask } from 'shared/hooks';
// import DateTimePicker from 'react-datetime-picker';

import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { SxProps } from '@mui/material';
import { MobileDateTimePicker } from '@mui/x-date-pickers-pro';

const popperSx: SxProps = {
  '& .MuiPaper-root': {
    color: 'var(--color-main)',
    bgcolor: 'var(--color-calendar-background)',
    borderRadius: '10px',
  },

  '& .MuiPickersDay-dayWithMargin': {
    color: 'rgb(229,228,226)',
    backgroundColor: 'var(--color-calendar-day-background)',
    borderRadius: '10px',
  },
  '.MuiPickersDay-today': {
    color: 'rgb(229,228,226)',
    backgroundColor: 'var(--color-calendar-today-background)',
    border: 'none',
  },
  '.Mui-selected': {
    color: 'white',
    backgroundColor: 'var(--color-calendar-selected-background)',
  },
  '.Mui-selected:hover': {
    color: 'white',
    backgroundColor: 'var(--color-calendar-selected-background)',
  },
  '.Mui-selected:focus': {
    color: 'white',
    backgroundColor: 'var(--color-calendar-selected-background)',
  },
  '& .MuiPickersDay-dayOutsideMonth': {
    color: 'var(--color-calendar-dayoutside-text)',
    backgroundColor: 'var(--color-calendar-dayoutside-background)',
    borderRadius: '10px',
  },

  '& .MuiTabs-root': { backgroundColor: 'rgba(120, 120, 120, 0.4)' },
};

const inputSx: SxProps = {
  bgcolor: 'var(--color-row-background)',
  color: 'var(--color-main)',
  fontSize: '16px',
  width: 160,
  height: 30,
  border: 'none',
  borderRadius: '10px',
  '& fieldset': { border: 'none' },
};

export const NewTaskCard: FC = () => {
  const { value: inputTitle, onChange: onChangeTitle } = useInput();
  const { value: inputContent, onChange: onChangeContent } = useInput();

  const [date, setDate] = useState<Dayjs>(dayjs());

  const createTask = useQueryCreateTask(inputTitle, inputContent, date.toJSON());

  const handleChange = (newValue: Dayjs | null) => {
    newValue && setDate(newValue);
  };

  useEffect(() => {
    console.log(date);
  }, [date]);

  return (
    <>
      <ItemIcon width={'100px'} />

      <MobileDateTimePicker
        // disablePast={true}

        views={['month', 'day', 'hours', 'minutes']}
        hideTabs={false}
        showDaysOutsideCurrentMonth
        // toolbarTitle={true}
        components={{ OpenPickerIcon: CalendarIcon }}
        componentsProps={{}}
        InputProps={{
          sx: inputSx,
        }}
        OpenPickerButtonProps={{ sx: { color: 'var(--color-main)' } }}
        DialogProps={{ sx: popperSx }}
        value={date}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
      />
      <input className={styles.title} value={inputTitle} onChange={onChangeTitle} maxLength={18} />
      <textarea className={styles.contentArea} value={inputContent} onChange={onChangeContent} />
      <button
        onClick={createTask}
        className={inputTitle && inputContent ? styles.save : styles.save_disabled}
      >
        Save
      </button>
    </>
  );
};
