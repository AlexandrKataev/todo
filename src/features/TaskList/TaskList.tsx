import { FC } from 'react';

import { TaskRow } from 'entities/index';
import { Loader, NotFound } from 'shared/ui';
import { useGetTasks } from 'shared/hooks';

interface TaskListProps {
  searchValue: string;
}

export const TaskList: FC<TaskListProps> = ({ searchValue }) => {
  const { taskList, isFetching } = useGetTasks(searchValue);

  return (
    <>
      {isFetching ? (
        <Loader />
      ) : taskList?.length ? (
        taskList
          ?.sort((a, b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime();
          })
          .map((el) => (
            <TaskRow key={el.id} title={el.title} id={el.id} taskList={taskList} date={el.date} />
          ))
      ) : (
        <NotFound />
      )}
    </>
  );
};
