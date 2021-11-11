import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CryptoPage from '../pages/CryptoPage';

export type CryptoParamList = {
  CryptoPage: undefined;
};

const Stack = createNativeStackNavigator<CryptoParamList>();

export function CryptoStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="CryptoPage"
        component={CryptoPage}
      />
    </Stack.Navigator>
  );
}
