import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { taskService } from 'shared/api/services/taskService';
import { ITask } from 'shared/models/ITask';
import { useDebounce } from './useDebounce';

export const useQueryTasks = (searchValue: string) => {
  const debouncedValue = useDebounce(searchValue, 500);

  const { data: taskList, isFetching } = useQuery(['todos', debouncedValue], () =>
    taskService.getTaskList(debouncedValue)
  );
  return { taskList, isFetching };
};

export const useQueryTask = (id: string) => {
  const { data: task, isFetching } = useQuery(['todos', id], () => taskService.getTask(id));
  return { task, isFetching };
};

export const useQueryUpdateTask = (
  taskId: string,
  inputTitle: string,
  inputContent: string,
  date: string,
  isChangedTitle: boolean,
  isChangedContent: boolean,
  isChangedDate: boolean
) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: taskService.updateTask,
    onSuccess: async () => {
      await queryClient.invalidateQueries(['todos']);
      navigate('/');
    },
  });
  const updateTask = async () => {
    if (inputTitle && inputContent && (isChangedTitle || isChangedContent || isChangedDate)) {
      mutation.mutate({
        id: taskId,
        title: inputTitle,
        content: inputContent,
        date: date,
      });
    }
  };
  return updateTask;
};

export const useQueryCreateTask = (inputTitle: string, inputContent: string, date: string) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: taskService.createTask,
    onSuccess: async () => {
      await queryClient.invalidateQueries(['todos']);
      navigate('/');
    },
  });
  const createTask = async () => {
    if (inputTitle && inputContent) {
      mutation.mutate({
        title: inputTitle,
        content: inputContent,
        date: date,
      } as ITask);
    }
  };
  return createTask;
};

export const useQueryDeleteTask = (taskId: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: taskService.deleteTask,
    onSuccess: async () => {
      await queryClient.invalidateQueries(['todos']);
    },
  });

  const onClickDelete = async (event: any) => {
    event.stopPropagation();
    if (window.confirm('Delete task?')) {
      mutation.mutate(taskId);
    }
  };

  return { onClickDelete };
};
