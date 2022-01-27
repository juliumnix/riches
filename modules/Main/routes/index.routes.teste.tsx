import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import OpeningBalanceScreen from '../SignIn/pages/OpeningBalanceScreen';
// import UserNameScreen from '../SignIn/pages/UserNameScreen';
// import LoginScreen from '../Login/pages/LoginScreen';
import { MainRoutes } from '../../Main/routes/index.routes';
import { AutenticationStack } from '../../Autentication/routes/index.routes';
import { AutenticationExitStack } from '../../Autentication/routes/index.routes.exit';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

type AutenticationParamList = {
  AutenticationStack: undefined;
  HomeApp: undefined;
};

const Stack = createNativeStackNavigator<AutenticationParamList>();

export function RouteTestStack() {
  return (
    <Stack.Navigator initialRouteName="HomeApp">
      <Stack.Screen
        options={({ route }) => ({
          headerShown: false,
        })}
        name="AutenticationExitStack"
        component={AutenticationExitStack}
      />

      <Stack.Screen
        options={({ route }) => ({
          headerShown: false,
        })}
        name="HomeApp"
        component={MainRoutes}
      />
    </Stack.Navigator>
  );
}
