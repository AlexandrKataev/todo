import { FC, useEffect, useState } from 'react';

import styles from './NewTaskCard.module.scss';

import { ItemIcon } from 'shared/ui';
import { useInput, useQueryCreateTask } from 'shared/hooks';
import DateTimePicker from 'react-datetime-picker';

export const NewTaskCard: FC = () => {
  const { value: inputTitle, onChange: onChangeTitle } = useInput();
  const { value: inputContent, onChange: onChangeContent } = useInput();

  const [date, setDate] = useState(new Date());

  const createTask = useQueryCreateTask(inputTitle, inputContent, date.toJSON());

  useEffect(() => {
    console.log(date);
  }, [date]);

  return (
    <>
      <ItemIcon width={'100px'} />
      <DateTimePicker onChange={setDate} value={date} />
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
