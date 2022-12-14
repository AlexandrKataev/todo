import { useQuery } from '@tanstack/react-query';
import { taskService } from 'shared/api/services/taskService';
import { useDebounce } from '../useDebounce';

export const useGetTasks = (searchValue: string) => {
  const debouncedValue = useDebounce(searchValue, 500);

  const { data: taskList, isFetching } = useQuery(['todos', debouncedValue], () =>
    taskService.getTaskList(debouncedValue)
  );
  return { taskList, isFetching };
};
