import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { HomePage, TaskPage } from 'pages/index';

export const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/task/:taskId" element={<TaskPage />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
};
