import { useEffect, useMemo, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useDebounce } from './useDebounce';
import { taskService } from '../api/services/taskService';
import { ITask } from '../models/ITask';

export const useTasks = (searchValue: string) => {
  const navigate = useNavigate();
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

  const postTask = async (inputTitle: string, inputContent: string) => {
    await taskService.createTask({
      title: inputTitle,
      content: inputContent,
    } as ITask);
    navigate('/');
  };

  const onClickDelete = async (id: string) => {
    if (window.confirm('Delete task?')) {
      await taskService.deleteTask(id);
      setTaskList((prev) => prev.filter((task) => task.id !== id));
    }
  };

  return useMemo(
    () => ({
      taskList,
      postTask,
      onClickDelete,
      loading,
    }),
    [taskList]
  );
};
