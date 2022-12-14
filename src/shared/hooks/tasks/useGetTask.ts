import { useQuery } from '@tanstack/react-query';
import { taskService } from 'shared/api/services/taskService';

export const useGetTask = (id: string) => {
  const { data: task, isFetching } = useQuery(['todo', id], () => taskService.getTask(id));
  return { task, isFetching };
};
