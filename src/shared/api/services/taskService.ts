import axios from 'axios';
import { ITask } from 'shared/models/ITask';
import { API_URL } from '../config';

axios.defaults.baseURL = API_URL;

export const taskService = {
  getTaskList: async (searchValue: string) => {
    const response = await axios.get<ITask[]>(`/tasks?title=${searchValue}`);
    return response.data;
  },
  getTask: async (id: string) => {
    const response = await axios.get<ITask>(`/tasks/${id}`);
    return response.data;
  },
  updateTask: async (task: ITask) => {
    await axios.put(`/tasks/${task.id}`, task);
  },
  createTask: async (task: ITask) => {
    await axios.post(`/tasks`, task);
  },
  deleteTask: async (id: string) => {
    await axios.delete(`/tasks/${id}`);
  },
};
