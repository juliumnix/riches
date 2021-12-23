import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ConfigScreen from '../pages/ConfigScreen';

export type ConfigStackParamList = {
  ConfigScreen: undefined;
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
    </Stack.Navigator>
  );
}
