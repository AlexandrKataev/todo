import React, { FC } from 'react';
import styles from './TaskRow.module.scss';

import { ITask } from 'shared/models/ITask';
import { ItemIcon } from 'shared/ui/icons/ItemIcon';

interface TaskRowProps {
  title: ITask['title'];
}

export const TaskRow: FC<TaskRowProps> = ({ title }) => {
  return (
    <div className={styles.container}>
      <div>
        <ItemIcon />
      </div>
      <div className={styles.title}>{title}</div>
    </div>
  );
};
