import { FC } from 'react';
import styles from './TaskPage.module.scss';

import { TaskCard } from 'entities/index';

export const TaskPage: FC = () => {
  return (
    <div className={styles.container}>
      <TaskCard />
    </div>
  );
};
