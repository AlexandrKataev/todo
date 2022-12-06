import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from './TaskCard.module.scss';
import { ReactComponent as ItemIcon } from 'shared/ui/icons/item.svg';

import { taskService } from 'shared/api/services/taskService';
import { ITask } from 'shared/models/ITask';

export const TaskCard: FC = () => {
  const { taskId } = useParams();

  const [taskData, setTaskData] = useState<ITask>({} as ITask);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetch = async () => {
      try {
        if (taskId) {
          const task = await taskService.getTask(taskId);
          task && setTaskData(task);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetch();
  }, []);

  return (
    <>
      <ItemIcon className={styles.icon} />
      <div className={styles.title}>{taskData.title}</div>
      <div className={styles.content}>{taskData.content}</div>
    </>
  );
};
