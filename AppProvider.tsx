import React from 'react';
import { GoalProvider } from './modules/Main/hooks/goal';

const AppProvider: React.FC = ({ children }) => (
  <GoalProvider>{children}</GoalProvider>
);
export default AppProvider;
