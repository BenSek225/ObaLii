import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainTabParamList } from '@/types/navigation';
import Icon from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from '@/screens/home/HomeScreen';
import MyOrderScreen from '@/screens/order/MyOrderScreen';
import DeliveryHistoryScreen from '@/screens/delivery/DeliveryHistoryScreen';
import ProfileScreen from '@/screens/profile/ProfileScreen';

const Tab = createBottomTabNavigator<MainTabParamList>();

const TAB_ICONS = {
  Home: {
    active: 'home',
    inactive: 'home-outline',
  },
  Orders: {
    active: 'receipt',
    inactive: 'receipt-outline',
  },
  Delivery: {
    active: 'bicycle',
    inactive: 'bicycle-outline',
  },
  Profile: {
    active: 'person',
    inactive: 'person-outline',
  },
} as const;

const TAB_LABELS = {
  Home: 'Accueil',
  Orders: 'Commandes',
  Delivery: 'Livraisons',
  Profile: 'Profil',
} as const;

export default function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          const iconName = focused
            ? TAB_ICONS[route.name].active
            : TAB_ICONS[route.name].inactive;
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#4CAF50',
        tabBarInactiveTintColor: '#6B7280',
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopWidth: 1,
          borderTopColor: '#E5E7EB',
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 3,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarLabel: TAB_LABELS.Home }}
      />
      <Tab.Screen
        name="Orders"
        component={MyOrderScreen}
        options={{ tabBarLabel: TAB_LABELS.Orders }}
      />
      <Tab.Screen
        name="Delivery"
        component={DeliveryHistoryScreen}
        options={{ tabBarLabel: TAB_LABELS.Delivery }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarLabel: TAB_LABELS.Profile }}
      />
    </Tab.Navigator>
  );
}
