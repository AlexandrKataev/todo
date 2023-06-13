import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { taskService } from 'shared/api/services/taskService';

export const useUpdateTask = (
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

    onMutate: async (newTodo) => {
      await queryClient.cancelQueries({ queryKey: ['todos', newTodo.id] });
      const previousTodo = queryClient.getQueryData(['todos', newTodo.id]);
      queryClient.setQueryData(['todos', newTodo.id], newTodo);
      return { previousTodo, newTodo };
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
      queryClient.invalidateQueries({ queryKey: ['todo', taskId] });
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
