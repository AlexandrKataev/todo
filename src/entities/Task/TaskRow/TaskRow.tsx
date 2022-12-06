import React, { FC } from 'react';
import styles from './TaskRow.module.scss';

import { ReactComponent as ItemIcon } from 'shared/ui/icons/item.svg';

import { ITask } from 'shared/models/ITask';

interface TaskRowProps {
  title: ITask['title'];
}

export const TaskRow: FC<TaskRowProps> = ({ title }) => {
  return (
    <div className={styles.container}>
      <ItemIcon className={styles.icon} />
      <div className={styles.title}>{title}</div>
    </div>
  );
};
