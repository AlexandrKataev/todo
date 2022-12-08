import { FC, useEffect, useState } from 'react';

import { ITask } from 'shared/models/ITask';
import { TaskRow } from 'entities/index';
import { useDebounce } from 'shared/hooks';
import { taskService } from 'shared/api/services/taskService';
import { Loader } from 'shared/ui';

interface TaskListProps {
  searchValue: string;
}

export const TaskList: FC<TaskListProps> = ({ searchValue }) => {
  const [taskList, setTaskList] = useState<ITask[]>([]);

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

  return (
    <>
      {taskList.length ? (
        taskList.map((el) => (

          <TaskRow
            key={el.id}
            title={el.title}
            id={el.id}
            setTaskList={setTaskList}
          />
          <TaskRow title={el.title} id={el.id} setTaskList={setTaskList} key={el.id} />

        ))
      ) : (
        <Loader loading={loading} />
      )}
    </>
  );
};
