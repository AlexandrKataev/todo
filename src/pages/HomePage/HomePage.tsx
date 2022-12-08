import React, { FC, useEffect, useState } from 'react';

import styles from './HomePage.module.scss';

import { Search, TaskList } from 'features';
import { taskService } from 'shared/api/services/taskService';
import { useDebounce } from 'shared/hooks';
import { ITask } from 'shared/models/ITask';

import { Loader } from 'shared/ui';

export const HomePage: FC = () => {
  const [searchValue, setSearchValue] = useState('');

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
