import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeRoutes } from '../Home/routes/index.routes';
import { CryptoStack } from '../Crypto/routes/index.routes';
import { GoalStack } from '../Goals/routes/index.routes';

import { Ionicons, Feather, FontAwesome5 } from '@expo/vector-icons';

export type RootStackParamList = {
  CryptoPage: undefined;
  GoalsPage: undefined;
  CreateGoal: undefined;
  Home: undefined;
};

const Tab = createBottomTabNavigator();

export function MainRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#018B3C',
        tabBarInactiveTintColor: '#B0B0B0',
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopEndRadius: 20,
          borderTopStartRadius: 20,
          borderTopColor: '#fff',
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={24} color={color} />
          ),
        }}
        name="Home"
        component={HomeRoutes}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="money-bill-alt" size={24} color={color} />
          ),
        }}
        name="Crypto"
        component={CryptoStack}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="cloud-outline" size={24} color={color} />
          ),
        }}
        listeners={({ navigation, route }) => ({
          tabPress: e => {
            e.preventDefault();

            const isFocus = navigation.isFocused();

            if (isFocus) {
              navigation.navigate('GoalsPage');
            } else {
              navigation.navigate('Goal');
            }
          },
        })}
        name="Goal"
        component={GoalStack}
      />
    </Tab.Navigator>
  );
}
