import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './TaskRow.module.scss';

import { ITask } from 'shared/models/ITask';
import { ItemIcon, TrashIcon } from 'shared/ui';

import { taskService } from 'shared/api/services/taskService';

interface TaskRowProps extends Omit<ITask, 'content'> {
  setTaskList: React.Dispatch<React.SetStateAction<ITask[]>>;
}

export const TaskRow: FC<TaskRowProps> = ({ title, id, setTaskList }) => {
  const navigate = useNavigate();

  const onClickDelete = async () => {
    if (window.confirm('Delete task?')) {
      await taskService.deleteTask(id);
      setTaskList((prev) => prev.filter((task) => task.id !== id));
    }
  };
  const onClickTask = (e: any) => {
    e.stopPropagation();
    navigate(`/task/${id}`);
  };

  return (
    <div className={styles.container} onClick={onClickTask}>
      <ItemIcon width={'37px'} />
      <div className={styles.title}>{title}</div>
      <div className={styles.trash}>
        <TrashIcon width={'20px'} onClick={onClickDelete} />
      </div>
    </div>
  );
};
