import React, { FC, useState } from 'react';

import styles from './HomePage.module.scss';

import { Search, TaskList } from 'features';
import { useTasks } from '../../shared/hooks/useTasks';

export const HomePage: FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const { taskList, postTask, onClickDelete, loading } = useTasks(searchValue);
  // https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context/

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  const onClearSearchClick = () => {
    setSearchValue('');
  };

  return (
    <div className={styles.container}>
      <Search
        searchValue={searchValue}
        onChangeSearch={onChangeSearch}
        clearSearch={onClearSearchClick}
      />
      <TaskList searchValue={searchValue} />
    </div>
  );
};
