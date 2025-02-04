import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DishStackParamList } from '@/types/navigation';

// Screens
import MenuScreen from '@/screens/dish/MenuScreen';
import DishDetailsScreen from '@/screens/dish/DishDetailsScreen';

const Stack = createStackNavigator<DishStackParamList>();

export default function DishNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: 'white' },
      }}
    >
      <Stack.Screen name="Menu" component={MenuScreen} />
      <Stack.Screen 
        name="DishDetails" 
        component={DishDetailsScreen}
        options={{
          presentation: 'modal',
        }}
      />
    </Stack.Navigator>
  );
}