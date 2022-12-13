import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from './TaskCard.module.scss';

import { Loader, ItemIcon, CalendarIcon } from 'shared/ui';
import { useInput, useQueryTask, useQueryUpdateTask } from 'shared/hooks';
import DateTimePicker from 'react-datetime-picker/dist/entry.nostyle';

// const DateTimePicker = require('react-datetime-picker/dist/entry.nostyle');

export const TaskCard: FC = () => {
  const { taskId } = useParams() as { taskId: string };

  const { task, isFetching } = useQueryTask(taskId);

  const [date, setDate] = useState(new Date());
  const [isChangedDate, setIsChangedDate] = useState(false);

  useEffect(() => {
    task && setDate(new Date(task.date));
  }, [task]);

  const {
    value: inputTitle,
    isChanged: isChangedTitle,
    onChange: onChangeTitle,
  } = useInput(task?.title);

  const {
    value: inputContent,
    isChanged: isChangedContent,
    onChange: onChangeContent,
  } = useInput(task?.content);

  const updateTask = useQueryUpdateTask(
    taskId,
    inputTitle,
    inputContent,
    date.toJSON(),
    isChangedTitle,
    isChangedContent,
    isChangedDate
  );

  const onChangeDate = (date: Date) => {
    setDate(date);
    setIsChangedDate(true);
  };

  return isFetching ? (
    <Loader />
  ) : (
    <>
      <ItemIcon width={'100px'} />
      <DateTimePicker
        onChange={onChangeDate}
        value={date}
        clearIcon={null}
        calendarIcon={<CalendarIcon />}
      />
      <input className={styles.title} value={inputTitle} onChange={onChangeTitle} maxLength={18} />
      <textarea className={styles.contentArea} value={inputContent} onChange={onChangeContent} />

      <button
        onClick={updateTask}
        className={
          (isChangedTitle || isChangedContent || isChangedDate) && inputTitle && inputContent
            ? styles.save
            : styles.save_disabled
        }
      >
        Save
      </button>
    </>
  );
};
