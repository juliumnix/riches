import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OpeningBalanceScreen from '../SignIn/pages/OpeningBalanceScreen';
import UserNameScreen from '../SignIn/pages/UserNameScreen';
import LoginScreen from '../Login/pages/LoginScreen';
import { MainRoutes } from '../../Main/routes/index.routes';

export type AutenticationParamList = {
  OpeningBalanceScreen: undefined;
  UserNameScreen: undefined;
  LoginScreen: undefined;
  HomeApp: undefined;
};

const Stack = createNativeStackNavigator<AutenticationParamList>();

export function AutenticationExitStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="LoginScreen"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="OpeningBalanceScreen"
        component={OpeningBalanceScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="UserNameScreen"
        component={UserNameScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="HomeApp"
        component={MainRoutes}
      />
    </Stack.Navigator>
  );
}
