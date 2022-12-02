import { TaskItem } from 'entities/TaskItem';
import React from 'react';
import { Link } from 'react-router-dom';
import { taskData } from 'shared/api/services/taskService';

interface TaskListProps {
  taskList: taskData[];
  searchValue: string;
}

export const TaskList: React.FC<TaskListProps> = ({ taskList, searchValue }) => {
  return (
    <>
      {taskList.length
        ? taskList
            .filter((el) => el.title.toLowerCase().includes(searchValue.toLowerCase()))
            .map((el) => (
              <div key={el.id}>
                <Link to={`todo/task/${el.id}`}>
                  <TaskItem title={el.title} />
                </Link>
              </div>
            ))
        : ''}
    </>
  );
};
