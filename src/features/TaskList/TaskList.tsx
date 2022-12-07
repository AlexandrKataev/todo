import { FC, SetStateAction } from 'react';
import { Link } from 'react-router-dom';

import { ITask } from 'shared/models/ITask';
import { TaskRow } from 'entities/index';

interface TaskListProps {
  taskList: ITask[];
}

export const TaskList: FC<TaskListProps> = ({ taskList }) => {
  return (
    <>
      {taskList.length
        ? taskList.map((el) => (
            <div key={el.id}>
              <TaskRow title={el.title} id={el.id} />
            </div>
          ))
        : ''}
    </>
  );
};
