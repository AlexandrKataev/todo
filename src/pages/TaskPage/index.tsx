import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import s from './TaskPage.module.scss';
import { ReactComponent as ItemIcon } from 'shared/ui/icons/item.svg';

import { taskService, taskData } from 'shared/api/services/taskService';

export const TaskPage: React.FC = () => {
  const { taskId } = useParams();

  const [taskData, setTaskData] = useState<taskData>({ title: '', content: '', id: '' });

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
    <div className={s.container}>
      <ItemIcon className={s.icon} />
      <div className={s.title}>{taskData.title}</div>
      <div className={s.content}>{taskData.content}</div>
    </div>
  );
};
