import { FC, useEffect, useState } from 'react';

import styles from './NewTaskCard.module.scss';

import { DateTimePicker, ItemIcon } from 'shared/ui';
import { useInput, useQueryCreateTask } from 'shared/hooks';

import dayjs, { Dayjs } from 'dayjs';

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
      <ItemIcon width={'100px'} className={styles.icon} />
      <DateTimePicker date={date} handleChange={handleChange} />
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
