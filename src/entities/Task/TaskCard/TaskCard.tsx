import React, { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import styles from './TaskCard.module.scss';

import { taskService } from 'shared/api/services/taskService';
import { ITask } from 'shared/models/ITask';

import { Loader, ItemIcon } from 'shared/ui';

const iconProps: React.SVGProps<SVGSVGElement> = {
  width: '100px',
  height: '100px',
  fill: 'var(--color-main)',
};

export const TaskCard: FC = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();

  const [taskData, setTaskData] = useState<ITask>({} as ITask);

  const [inputTitle, setInputTitle] = useState('');
  const [inputContent, setInputContent] = useState('');

  const onChangeInputTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(event.target.value);
  };

  const onChangeInputContent = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputContent(event.target.value);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetch = async () => {
      try {
        if (taskId) {
          const task = await taskService.getTask(taskId);
          task && setTaskData(task);
          setInputTitle(task.title);
          setInputContent(task.content);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetch();
  }, []);

  const postTask = async () => {
    await taskService.updateTask({ id: taskData.id, title: inputTitle, content: inputContent });
    navigate('/');
  };

  return (
    <>
      <Loader loading={!taskData.content} />
      <ItemIcon {...iconProps} />
      <input
        className={styles.title}
        value={inputTitle}
        onChange={onChangeInputTitle}
        maxLength={35}
      />
      <textarea
        className={styles.contentArea}
        value={inputContent}
        onChange={onChangeInputContent}
      />

      <button
        onClick={postTask}
        className={inputTitle && inputContent ? styles.save : styles.save_disabled}>
        Save
      </button>
    </>
  );
};
