import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from './TaskCard.module.scss';

import { Loader, ItemIcon, DateTimePicker } from 'shared/ui';
import { useInput, useGetTask, useUpdateTask } from 'shared/hooks';

import dayjs, { Dayjs } from 'dayjs';

export const TaskCard: FC = () => {
  const { taskId } = useParams() as { taskId: string };

  const { task, isFetching } = useGetTask(taskId);

  const [date, setDate] = useState<Dayjs>(dayjs());
  const [isChangedDate, setIsChangedDate] = useState(false);

  useEffect(() => {
    task && setDate(dayjs(task.date));
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

  const updateTask = useUpdateTask(
    taskId,
    inputTitle,
    inputContent,
    date.toJSON(),
    isChangedTitle,
    isChangedContent,
    isChangedDate
  );

  const handleChange = (newValue: Dayjs | null) => {
    newValue && setDate(newValue);
    setIsChangedDate(true);
  };

  return isFetching ? (
    <Loader />
  ) : (
    <>
      <ItemIcon width={'100px'} className={styles.icon} />
      <DateTimePicker date={date} handleChange={handleChange} />

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
