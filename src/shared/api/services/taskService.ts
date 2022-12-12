import { ITask } from 'shared/models/ITask';
import { instance } from '../config/axios';

export const taskService = {
  getTaskList: async (searchValue: string) => {
    const response = await instance.get<ITask[]>(`/tasks?title=${searchValue}`);
    return response.data;
  },
  getTask: async (id: string) => {
    const response = await instance.get<ITask>(`/tasks/${id}`);
    return response.data;
  },
  updateTask: async (task: ITask) => {
    await instance.put(`/tasks/${task.id}`, task);
  },
  createTask: async (task: ITask) => {
    await instance.post(`/tasks`, task);
  },
  deleteTask: async (id: string) => {
    await instance.delete(`/tasks/${id}`);
  },
};
