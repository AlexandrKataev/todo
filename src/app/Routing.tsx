import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { HomePage, TaskPage } from '@pages/index';

export const Routing: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/task/:taskId" element={<TaskPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
