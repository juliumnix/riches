import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ConfigScreen from '../pages/ConfigScreen';
import OpeningBalanceScreen from '../../../Autentication/SignIn/pages/OpeningBalanceScreen';
import UserNameScreen from '../../../Autentication/SignIn/pages/UserNameScreen';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { AutenticationStack } from '../../../Autentication/routes/index.routes';
import LoginScreen from '../../../Autentication/Login/pages/LoginScreen';

export type ConfigStackParamList = {
  ConfigScreen: undefined;
  OpeningBalanceScreen: undefined;
  UserNameScreen: undefined;
  ExistRoute: undefined;
  // LoginScreen: undefined;
};

const Stack = createNativeStackNavigator<ConfigStackParamList>();

export function ConfigRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="ConfigScreen"
        component={ConfigScreen}
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

      {/* <Stack.Screen
        options={{ headerShown: false }}
        name="LoginScreen"
        component={LoginScreen}
      /> */}
    </Stack.Navigator>
  );
}
