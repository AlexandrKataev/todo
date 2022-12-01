import { TaskItem } from 'entities/TaskItem';
import { Search } from 'features/Search';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { taskService } from 'shared/api/services/taskService';
import s from './HomePage.module.scss';

import { ReactComponent as SearchIcon } from 'shared/ui/icons/search.svg';

interface taskListType {
  id: string;
  title: string;
  content: string;
}

export const HomePage: React.FC = () => {
  const [taskList, setTaskList] = useState<taskListType[]>([]);

  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const fetch = async () => {
      try {
        const tasks = await taskService.getTaskList();
        console.log(tasks);
        setTaskList(tasks);
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
      <div className={s.search}>
        <input
          className={s.input}
          placeholder="Поиск"
          value={searchValue}
          onChange={onChangeSearch}
        />
        <SearchIcon className={s.icon} />
      </div>
      {taskList.length &&
        taskList
          .filter((el) => el.title.includes(searchValue))
          .map((el) => (
            <div key={el.id}>
              <Link to={`/task/${el.id}`}>
                <TaskItem title={el.title} />
              </Link>
            </div>
          ))}
    </div>
  );
};
