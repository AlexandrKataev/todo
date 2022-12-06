import { FC } from 'react';
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
              <Link to={`/task/${el.id}`}>
                <TaskRow title={el.title} />
              </Link>
            </div>
          ))
        : ''}
    </>
  );
};
