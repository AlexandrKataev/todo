import { useMutation, useQueryClient } from '@tanstack/react-query';
import { taskService } from 'shared/api/services/taskService';

export const useDeleteTask = (taskId: string) => {
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
