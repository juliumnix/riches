import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AppProvider from './AppProvider';

import './ReactotronConfig';
import AppRoutes from './AppRoutes/index.routes';

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </AppProvider>
  );
}
