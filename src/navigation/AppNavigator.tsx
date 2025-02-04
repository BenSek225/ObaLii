import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '@/types/navigation';

// Navigators
import AuthNavigator from './stacks/AuthNavigator';
import MainTabNavigator from './tabs/MainTabNavigator';
import DishNavigator from './stacks/DishNavigator';
import OrderNavigator from './stacks/OrderNavigator';
import ProfileNavigator from './stacks/ProfileNavigator';

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  // TODO: Implémenter la logique d'authentification
  const isAuthenticated = false;

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: 'card',
      }}
      initialRouteName={isAuthenticated ? 'MainTabs' : 'Auth'}
    >
      {/* Auth Navigator */}
      <Stack.Screen 
        name="Auth" 
        component={AuthNavigator}
        options={{
          animationTypeForReplace: isAuthenticated ? 'push' : 'pop',
        }}
      />

      {/* Main App */}
      <Stack.Screen name="MainTabs" component={MainTabNavigator} />
      
      {/* Feature Stacks */}
      <Stack.Screen 
        name="DishStack" 
        component={DishNavigator}
        options={{
          presentation: 'modal',
        }}
      />
      <Stack.Screen name="OrderStack" component={OrderNavigator} />
      <Stack.Screen name="ProfileStack" component={ProfileNavigator} />
    </Stack.Navigator>
  );
}
