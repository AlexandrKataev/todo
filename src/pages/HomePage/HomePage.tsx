import { TaskList } from 'features';
import React, { FC, useEffect, useState } from 'react';

import styles from './HomePage.module.scss';

import { taskService } from 'shared/api/services/taskService';
import { useDebounce } from 'shared/hooks';
import { ITask } from 'shared/models/ITask';

import { Loader, Search } from 'shared/ui';

export const HomePage: FC = () => {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(true);
  const debouncedValue = useDebounce(searchValue, 500);

  useEffect(() => {
    const fetch = async () => {
      try {
        !taskList.length && setLoading(true);
        const tasks = await taskService.getTaskList(searchValue);
        tasks && setTaskList(tasks);
        setLoading(false);
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
      <Loader loading={loading} />
    </div>
  );
};
