import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Home/pages/HomeScreen';
import GoalsPage from '../Goals/pages/GoalsPage';
import CreateGoal from '../Goals/pages/CreateGoal';
import CryptoPage from '../Crypto/pages/CryptoPage';

export type RootStackParamList = {
  CryptoPage: undefined;
  GoalsPage: undefined;
  CreateGoal: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function MainRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="CryptoPage"
        component={CryptoPage}
      />

      {/* rotas de goals */}
      <Stack.Screen
        options={{ headerShown: false }}
        name="GoalsPage"
        component={GoalsPage}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="CreateGoal"
        component={CreateGoal}
      />

      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
}
