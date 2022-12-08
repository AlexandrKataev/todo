import { FC, useState } from 'react';
import styles from './TaskRow.module.scss';

import { ITask } from 'shared/models/ITask';
import { ItemIcon, TrashIcon } from 'shared/ui';

import { taskService } from 'shared/api/services/taskService';
import { useNavigate } from 'react-router-dom';

interface TaskRowProps {
  id: ITask['id'];
  title: ITask['title'];
}

export const TaskRow: FC<TaskRowProps> = ({ title, id }) => {
  const navigate = useNavigate();
  const [onMouseDelete, setOnMouseDelete] = useState(false);
  const [onMouseRow, setOnMouseRow] = useState(false);
  const onClickDelete = async () => {
    if (window.confirm('Delete task?')) {
      await taskService.deleteTask(id);
      navigate('/qweqwe');
    }
  };
  const onClickTask = () => {
    !onMouseDelete && navigate(`/task/${id}`);
  };
  return (
    <div
      className={styles.container}
      onMouseOver={() => setOnMouseRow(true)}
      onMouseOut={() => setOnMouseRow(false)}
      onClick={onClickTask}>
      <ItemIcon width={'37px'} />

      <div className={styles.title}>{title}</div>
      <div
        className={styles.trash}
        onMouseOver={() => setOnMouseDelete(true)}
        onMouseOut={() => setOnMouseDelete(false)}>
        {onMouseRow && <TrashIcon width={'20px'} onClick={onClickDelete} />}
      </div>
    </div>
  );
};
