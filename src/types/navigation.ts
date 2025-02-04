import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import type { CompositeNavigationProp } from '@react-navigation/native';

// Types pour les paramètres des écrans
export type DishType = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
};

// Types pour la navigation d'authentification
export type AuthStackParamList = {
  Splash: undefined;
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
};

// Types pour la navigation des plats
export type DishStackParamList = {
  Menu: undefined;
  DishDetails: { dish: DishType };
};

// Types pour la navigation des commandes
export type OrderStackParamList = {
  MyOrders: undefined;
  OrderDetails: { orderId: string };
  Cart: undefined;
  Checkout: undefined;
  OrderConfirmation: { orderId: string };
};

// Types pour la navigation de livraison
export type DeliveryStackParamList = {
  DeliveryHistory: undefined;
  DeliveryTracking: { orderId: string };
};

// Types pour la navigation du profil
export type ProfileStackParamList = {
  Profile: undefined;
  EditProfile: undefined;
  Settings: undefined;
  Language: undefined;
  PaymentMethods: undefined;
  Privacy: undefined;
  Help: undefined;
  About: undefined;
};

// Types pour la navigation principale (Bottom Tabs)
export type MainTabParamList = {
  Home: undefined;
  Orders: undefined;
  Delivery: undefined;
  Profile: undefined;
};

// Types pour la navigation racine
export type RootStackParamList = {
  Auth: undefined;
  MainTabs: undefined;
  DishStack: undefined;
  OrderStack: undefined;
  DeliveryStack: undefined;
  ProfileStack: undefined;
};

// Types de navigation composites
export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export type MainTabNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<MainTabParamList>,
  NativeStackNavigationProp<RootStackParamList>
>;

export type ProfileScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<MainTabParamList, 'Profile'>,
  NativeStackNavigationProp<RootStackParamList>
>;
