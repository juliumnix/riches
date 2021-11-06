import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AppProvider from './AppProvider';
import LoginScreen from './modules/Autentication/Login/pages/LoginScreen';
import HomeScreen from './modules/Main/Home/pages/HomeScreen';
import { MainRoutes } from './modules/Main/routes/index.routes';

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <MainRoutes />
      </NavigationContainer>
    </AppProvider>
  );
}
