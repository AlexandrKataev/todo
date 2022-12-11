import { FC } from 'react';
import { useParams } from 'react-router-dom';

import styles from './TaskCard.module.scss';

import { Loader, ItemIcon } from 'shared/ui';
import { useInput, useQueryTask, useQueryUpdateTask } from 'shared/hooks';

export const TaskCard: FC = () => {
  const { taskId } = useParams() as { taskId: string };

  const { task, isFetching } = useQueryTask(taskId);

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
    isChangedTitle,
    isChangedContent
  );

  return isFetching ? (
    <Loader />
  ) : (
    <>
      <ItemIcon width={'100px'} />
      <input className={styles.title} value={inputTitle} onChange={onChangeTitle} maxLength={35} />
      <textarea className={styles.contentArea} value={inputContent} onChange={onChangeContent} />

      <button
        onClick={updateTask}
        className={
          (isChangedTitle || isChangedContent) && inputTitle && inputContent
            ? styles.save
            : styles.save_disabled
        }
      >
        Save
      </button>
    </>
  );
};
