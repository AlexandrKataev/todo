import { FC } from 'react';

import styles from './HomePage.module.scss';

import { Search, TaskList } from 'features';
import { useInput } from 'shared/hooks';

export const HomePage: FC = () => {
  const { value: searchValue, onChange: onChangeSearch, clearValue } = useInput();

  return (
    <div className={styles.container}>
      <Search searchValue={searchValue} onChangeSearch={onChangeSearch} clearSearch={clearValue} />
      <TaskList searchValue={searchValue} />
    </div>
  );
};
