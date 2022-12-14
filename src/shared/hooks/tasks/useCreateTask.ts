import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { taskService } from 'shared/api/services/taskService';
import { ITask } from 'shared/models/ITask';

export const useCreateTask = (inputTitle: string, inputContent: string, date: string) => {
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
