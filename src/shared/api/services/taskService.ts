import axios from 'axios';
import { baseUrl } from '../config';

export interface taskData {
  id: string;
  title: string;
  content: string;
}

export const taskService = {
  getTaskList: async () => {
    const response = await axios.get<taskData[]>(`${baseUrl}/tasks`);
    return response.data;
  },
  getTask: async (id: string) => {
    const response = await axios.get<taskData>(`${baseUrl}/tasks/${id}`);
    return response.data;
  },
};
