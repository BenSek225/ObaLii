import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';
import Header from '../../components/common/Header';
import Icon from 'react-native-vector-icons/Ionicons';

interface DeliveryTrackingScreenProps {
  navigation: NativeStackNavigationProp<any>;
  route: RouteProp<{ params: { orderId: string } }, 'params'>;
}

interface DeliveryStatus {
  status: 'preparing' | 'ready' | 'picked_up' | 'delivering' | 'delivered';
  currentLocation?: {
    latitude: number;
    longitude: number;
  };
  estimatedTime?: number; // en minutes
  deliveryPerson?: {
    name: string;
    phone: string;
    photo?: string;
  };
}

const DELIVERY_STEPS = [
  { key: 'preparing', title: 'Préparation', icon: 'restaurant-outline' },
  { key: 'ready', title: 'Prêt à être livré', icon: 'checkmark-circle-outline' },
  { key: 'picked_up', title: 'Pris en charge', icon: 'bicycle-outline' },
  { key: 'delivering', title: 'En cours de livraison', icon: 'navigate-outline' },
  { key: 'delivered', title: 'Livré', icon: 'home-outline' },
];

export default function DeliveryTrackingScreen({ navigation, route }: DeliveryTrackingScreenProps) {
  const [deliveryStatus, setDeliveryStatus] = useState<DeliveryStatus>({
    status: 'preparing',
    estimatedTime: 45,
  });

  useEffect(() => {
    // TODO: Implement real-time delivery tracking
    const mockTracking = () => {
      setDeliveryStatus({
        status: 'delivering',
        estimatedTime: 15,
        currentLocation: {
          latitude: 48.8566,
          longitude: 2.3522,
        },
        deliveryPerson: {
          name: 'Jean Dupont',
          phone: '+33 6 12 34 56 78',
          photo: 'https://example.com/photo.jpg',
        },
      });
    };

    mockTracking();
  }, [route.params.orderId]);

  const getStepStyle = (stepKey: string) => {
    const isCompleted = DELIVERY_STEPS.findIndex(step => step.key === stepKey) <=
      DELIVERY_STEPS.findIndex(step => step.key === deliveryStatus.status);

    return isCompleted ? 'text-primary' : 'text-gray-400';
  };

  return (
    <View className="flex-1 bg-background">
      <Header title="Suivi de livraison" showBack />

      <ScrollView className="flex-1 p-4">
        {/* Estimated Time */}
        {deliveryStatus.estimatedTime && (
          <View className="bg-white rounded-lg p-4 mb-4">
            <Text className="text-lg font-bold text-text mb-2">
              Temps estimé
            </Text>
            <Text className="text-primary text-2xl font-bold">
              {deliveryStatus.estimatedTime} minutes
            </Text>
          </View>
        )}

        {/* Delivery Steps */}
        <View className="bg-white rounded-lg p-4 mb-4">
          <Text className="text-lg font-bold text-text mb-4">
            Statut de la livraison
          </Text>
          
          {DELIVERY_STEPS.map((step, index) => (
            <View key={step.key} className="flex-row items-center mb-4">
              <View className={`w-10 h-10 rounded-full items-center justify-center border-2 ${
                getStepStyle(step.key) === 'text-primary' ? 'border-primary' : 'border-gray-300'
              }`}>
                <Icon
                  name={step.icon}
                  size={20}
                  className={getStepStyle(step.key)}
                />
              </View>
              <View className="ml-4 flex-1">
                <Text className={`font-bold ${getStepStyle(step.key)}`}>
                  {step.title}
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* Delivery Person Info */}
        {deliveryStatus.deliveryPerson && (
          <View className="bg-white rounded-lg p-4">
            <Text className="text-lg font-bold text-text mb-4">
              Livreur
            </Text>
            <View className="flex-row items-center">
              <View className="flex-1">
                <Text className="text-text font-bold">
                  {deliveryStatus.deliveryPerson.name}
                </Text>
                <Text className="text-text mt-1">
                  {deliveryStatus.deliveryPerson.phone}
                </Text>
              </View>
              <Icon name="call" size={24} color="#4CAF50" />
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
