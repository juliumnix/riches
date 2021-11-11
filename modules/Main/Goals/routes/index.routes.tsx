import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GoalsPage from '../pages/GoalsPage';
import CreateGoal from '../pages/CreateGoal';

export type GoalParamList = {
  GoalsPage: undefined;
  CreateGoal: undefined;
};

const Stack = createNativeStackNavigator<GoalParamList>();

export function GoalStack() {
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
      />
    </Stack.Navigator>
  );
}
