import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import s from './HomePage.module.scss';

import { taskData, taskService } from 'shared/api/services/taskService';
import { TaskItem } from 'entities/TaskItem';
import { Search } from 'shared/ui/Search';

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

      {taskList.length
        ? taskList
            .filter((el) => el.title.toLowerCase().includes(searchValue.toLowerCase()))
            .map((el) => (
              <div key={el.id}>
                <Link to={`/task/${el.id}`}>
                  <TaskItem title={el.title} />
                </Link>
              </div>
            ))
        : ''}
    </div>
  );
};
