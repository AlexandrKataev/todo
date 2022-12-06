import React, { FC, useEffect, useState } from 'react';

import styles from './HomePage.module.scss';

import { taskService } from '@services/taskService';
import { Search } from '@shared/ui/Search';

import { ITask } from '@models/ITask';
import { TaskList } from '@features/index';
import { useDebounce } from '@shared/hooks';

export const HomePage: FC = () => {
  const [taskList, setTaskList] = useState<ITask[]>([]);

  const [searchValue, setSearchValue] = useState('');
  const debouncedValue = useDebounce(searchValue, 500);

  useEffect(() => {
    const fetch = async () => {
      try {
        const tasks = await taskService.getTaskList(searchValue);
        tasks && setTaskList(tasks);
      } catch (err) {
        console.log(err);
      }
    };
    fetch();
  }, [debouncedValue]);

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
      <TaskList taskList={taskList} />
    </div>
  );
};
