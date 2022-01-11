import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GoalsPage from '../pages/GoalsPage';
import CreateGoal from '../pages/CreateGoal';
import EditGoal from '../pages/EditGoal';

import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { useGoal } from '../../hooks/goal';

const Stack = createSharedElementStackNavigator();

export type GoalParamList = {
  GoalsPage: undefined;
  CreateGoal: undefined;
  EditGoal: undefined;
};

// const Stack = createNativeStackNavigator<GoalParamList>();

export function GoalStack() {
  const { getImage } = useGoal();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="GoalsPage"
        component={GoalsPage}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="CreateGoal"
        component={CreateGoal}
        sharedElements={() => {
          // const { item } = route.params;
          return [
            {
              id: getImage(),
              animation: 'fade',
              resize: 'none',
              // align: 'center-top',
            },
          ];
        }}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="EditGoal"
        component={EditGoal}
        sharedElements={(route, otherRoute, showing) => {
          // const { item } = route.params;
          return [
            {
              id: getImage(),
              animation: 'fade',
              resize: 'none',
              // align: ''left-top'
            },
          ];
        }}
      />
    </Stack.Navigator>
  );
}
