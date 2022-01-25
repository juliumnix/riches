import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../pages/HomeScreen';
import OpeningBalanceScreen from '../../../Autentication/SignIn/pages/OpeningBalanceScreen';
import History from '../../History';

export type HomeStackParamList = {
  HomeScreen: undefined;
  HistoryPage: undefined;
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

export function HomeRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="HomeScreen"
        component={HomeScreen}
      />

      {/* //PAGINA TEMPORARIA, APOS A APRESENTACAO REMOVER DAQUI */}
      <Stack.Screen
        options={{ headerShown: false }}
        name="HistoryPage"
        component={History}
      />
    </Stack.Navigator>
  );
}
