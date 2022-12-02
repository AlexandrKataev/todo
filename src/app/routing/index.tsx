import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { HomePage, TaskPage } from 'pages/index';

export const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path="/todo/home" element={<HomePage />} />
      <Route path="/todo/task/:taskId" element={<TaskPage />} />
      <Route path="*" element={<Navigate to="/todo/home" replace />} />
    </Routes>
  );
};
