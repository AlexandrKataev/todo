import axios from 'axios';
import { baseUrl } from '../config';

export interface taskData {
  id: string;
  title: string;
  content: string;
}

export const taskService = {
  getTaskList: async () => {
    try {
      const response = await axios.get<taskData[]>(`${baseUrl}/tasks`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
  getTask: async (id: string) => {
    try {
      const response = await axios.get<taskData>(`${baseUrl}/tasks/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
};
