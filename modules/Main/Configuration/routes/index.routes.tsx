import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ConfigScreen from '../pages/ConfigScreen';
import OpeningBalanceScreen from '../../../Autentication/SignIn/pages/OpeningBalanceScreen';
import UserNameScreen from '../../../Autentication/SignIn/pages/UserNameScreen';

export type ConfigStackParamList = {
  ConfigScreen: undefined;
  OpeningBalanceScreen: undefined;
  UserNameScreen: undefined;
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
    </Stack.Navigator>
  );
}
