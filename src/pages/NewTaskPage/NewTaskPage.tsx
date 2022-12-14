import { NewTaskCard } from 'entities/Task';
import { FC } from 'react';
import styles from './NewTaskPage.module.scss';

export const NewTaskPage: FC = () => {
  return (
    <div className={styles.container}>
      <NewTaskCard />
    </div>
  );
};
