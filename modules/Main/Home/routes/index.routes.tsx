import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../pages/HomeScreen';
import OpeningBalanceScreen from '../../../Autentication/SignIn/pages/OpeningBalanceScreen';

export type HomeStackParamList = {
  HomeScreen: undefined;
  paginaTemporaria: undefined;
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
        name="paginaTemporaria"
        component={OpeningBalanceScreen}
      />
    </Stack.Navigator>
  );
}
