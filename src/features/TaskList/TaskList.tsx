import { FC } from 'react';
import { Link } from 'react-router-dom';

import { TaskRow } from '@entities/index';
import { ITask } from '@models/ITask';

interface TaskListProps {
  taskList: ITask[];
}

export const TaskList: FC<TaskListProps> = ({ taskList }) => {
  return (
    <>
      {taskList.length
        ? taskList.map((el) => (
            <div key={el.id}>
              <Link to={`/task/${el.id}`}>
                <TaskRow title={el.title} />
              </Link>
            </div>
          ))
        : ''}
    </>
  );
};
