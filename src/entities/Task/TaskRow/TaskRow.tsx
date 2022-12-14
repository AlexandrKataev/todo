import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './TaskRow.module.scss';

import { ITask } from 'shared/models/ITask';
import { ItemIcon, TrashIcon } from 'shared/ui';
import { useQueryDeleteTask } from 'shared/hooks';

import cx from 'classnames';
import { getDate } from 'shared/helpers/getDate';

interface TaskRowProps extends Omit<ITask, 'content'> {
  taskList: ITask[];
}

export const TaskRow: FC<TaskRowProps> = ({ title, id, date }) => {
  const navigate = useNavigate();
  const { onClickDelete } = useQueryDeleteTask(id);
  const { formattedDate, dateStatus } = getDate(date);

  const onClickTask = () => {
    navigate(`/task/${id}`);
  };

  return (
    <div className={styles.container} onClick={onClickTask}>
      <ItemIcon fill={`var(--color-date-${dateStatus()})`} />
      <div className={styles.title}>{title}</div>
      <div className={styles.features}>
        <div
          className={cx(
            styles.date,
            { [styles.today]: dateStatus() === 'today' },
            { [styles.tommorow]: dateStatus() === 'tommorow' },
            { [styles.passed]: dateStatus() === 'passed' },
            { [styles.notsoon]: dateStatus() === 'notsoon' }
          )}
        >
          {formattedDate}
        </div>
        <TrashIcon onClick={onClickDelete} />
      </div>
    </div>
  );
};
