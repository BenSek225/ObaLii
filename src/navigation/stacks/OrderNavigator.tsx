import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { OrderStackParamList } from '@/types/navigation';

// Screens
import CartScreen from '@/screens/order/CartScreen';
import CheckoutScreen from '@/screens/order/CheckoutScreen';
import OrderConfirmationScreen from '@/screens/order/OrderConfirmationScreen';
import OrderDetailsScreen from '@/screens/order/OrderDetailsScreen';
import MyOrderScreen from '@/screens/order/MyOrderScreen';

const Stack = createStackNavigator<OrderStackParamList>();

export default function OrderNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: 'white' },
      }}
    >
      <Stack.Screen name="MyOrders" component={MyOrderScreen} />
      <Stack.Screen name="OrderDetails" component={OrderDetailsScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
      <Stack.Screen 
        name="OrderConfirmation" 
        component={OrderConfirmationScreen}
        options={{
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
}
