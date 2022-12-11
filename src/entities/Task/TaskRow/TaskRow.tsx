import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './TaskRow.module.scss';

import { ITask } from 'shared/models/ITask';
import { ItemIcon, TrashIcon } from 'shared/ui';
import { useQueryDeleteTask } from 'shared/hooks';

interface TaskRowProps extends Omit<ITask, 'content'> {
  taskList: ITask[];
}

export const TaskRow: FC<TaskRowProps> = ({ title, id }) => {
  const navigate = useNavigate();
  const { onClickDelete } = useQueryDeleteTask(id);

  const onClickTask = () => {
    navigate(`/task/${id}`);
  };

  return (
    <div className={styles.container} onClick={onClickTask}>
      <ItemIcon width={'37px'} />
      <div className={styles.title}>{title}</div>
      <div className={styles.trash}>
        <TrashIcon onClick={onClickDelete} />
      </div>
    </div>
  );
};
