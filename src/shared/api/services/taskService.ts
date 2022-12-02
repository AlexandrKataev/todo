import axios from 'axios';

export interface taskData {
  id: string;
  title: string;
  content: string;
}

export const taskService = {
  getTaskList: async () => {
    try {
      const response = await axios.get<taskData[]>(
        'https://6367d292d1d09a8fa61b5b19.mockapi.io/tasks',
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
  getTask: async (id: string) => {
    try {
      const response = await axios.get<taskData>(
        `https://6367d292d1d09a8fa61b5b19.mockapi.io/tasks/${id}`,
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
};
