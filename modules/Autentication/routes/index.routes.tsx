import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OpeningBalanceScreen from '../SignIn/pages/OpeningBalanceScreen';
import UserNameScreen from '../SignIn/pages/UserNameScreen';
import LoginScreen from '../Login/pages/LoginScreen';
import { MainRoutes } from '../../Main/routes/index.routes';
import { AutenticationExitStack } from './index.routes.exit';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

export type AutenticationParamList = {
  // OpeningBalanceScreen: undefined;
  // UserNameScreen: undefined;
  AutenticationExitStack: undefined;
  HomeApp: undefined;
};

const Stack = createNativeStackNavigator<AutenticationParamList>();

const getTabBarStyle = (route: any) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Goal';
  let display = routeName === 'CreateGoal' ? 'none' : 'flex';
  return { display };
};

export function AutenticationStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={({ route }) => ({
          tabBarStyle: getTabBarStyle(route),
          headerShown: false,
        })}
        name="AutenticationExitStack"
        component={AutenticationExitStack}
      />

      <Stack.Screen
        options={({ route }) => ({
          tabBarStyle: getTabBarStyle(route),
          headerShown: false,
        })}
        name="HomeApp"
        component={MainRoutes}
      />
    </Stack.Navigator>
  );
}
