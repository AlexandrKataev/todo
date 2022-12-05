import React from 'react';

export const TaskCard = () => {
  return (
    <div className={s.container}>
      <ItemIcon className={s.icon} />
      <div className={s.title}>{taskData.title}</div>
      <div className={s.content}>{taskData.content}</div>
    </div>
  );
};
