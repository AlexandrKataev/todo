import React, { useEffect, useState } from 'react';

import s from './HomePage.module.scss';

import { taskData, taskService } from 'shared/api/services/taskService';
import { Search } from 'shared/ui/Search';
import { TaskList } from 'entities/TaskList/TaskList';

export const HomePage: React.FC = () => {
  const [taskList, setTaskList] = useState<taskData[]>([]);

  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const fetch = async () => {
      try {
        const tasks = await taskService.getTaskList();
        tasks && setTaskList(tasks);
      } catch (err) {
        console.log(err);
      }
    };
    fetch();
  }, []);

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className={s.container}>
      <Search searchValue={searchValue} onChangeSearch={onChangeSearch} />
      <TaskList searchValue={searchValue} taskList={taskList} />
    </div>
  );
};
