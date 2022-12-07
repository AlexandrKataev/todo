import axios from 'axios';
import { ITask } from 'shared/models/ITask';
import { baseUrl } from '../config';

export const taskService = {
  getTaskList: async (searchValue: string) => {
    const response = await axios.get<ITask[]>(`${baseUrl}/tasks?title=${searchValue}`);

    return response.data;
  },
  getTask: async (id: string) => {
    const response = await axios.get<ITask>(`${baseUrl}/tasks/${id}`);
    return response.data;
  },
  updateTask: async (task: ITask) => {
    await axios.put(`${baseUrl}/tasks/${task.id}`, task);
  },
};
