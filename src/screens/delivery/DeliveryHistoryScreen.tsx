import React, { useState } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Header from '@/components/common/Header';
import Icon from 'react-native-vector-icons/Ionicons';

interface DeliveryHistoryItem {
  id: string;
  orderId: string;
  date: Date;
  status: 'delivered' | 'cancelled';
  address: string;
  items: Array<{
    name: string;
    quantity: number;
  }>;
  total: number;
}

interface DeliveryHistoryScreenProps {
  navigation: NativeStackNavigationProp<any>;
}

export default function DeliveryHistoryScreen({ navigation }: DeliveryHistoryScreenProps) {
  const [deliveries, setDeliveries] = useState<DeliveryHistoryItem[]>([
    {
      id: '1',
      orderId: 'CMD-001',
      date: new Date(),
      status: 'delivered',
      address: '123 Rue de la Paix, Paris',
      items: [
        { name: 'Poulet Yassa', quantity: 2 },
        { name: 'Riz', quantity: 2 },
      ],
      total: 33.96,
    },
    // Ajoutez d'autres livraisons ici
  ]);

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  const renderItem = ({ item }: { item: DeliveryHistoryItem }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('OrderDetails', { orderId: item.orderId })}
      className="bg-white rounded-lg p-4 mb-4 mx-4"
    >
      <View className="flex-row justify-between items-center mb-2">
        <Text className="text-text font-bold">
          Commande #{item.orderId}
        </Text>
        <View className={`px-3 py-1 rounded-full ${
          item.status === 'delivered' ? 'bg-success' : 'bg-error'
        }`}>
          <Text className="text-white text-sm">
            {item.status === 'delivered' ? 'Livré' : 'Annulé'}
          </Text>
        </View>
      </View>

      <Text className="text-gray-500 mb-2">
        {formatDate(item.date)}
      </Text>

      <View className="border-t border-gray-200 my-2" />

      <View className="space-y-1">
        {item.items.map((orderItem, index) => (
          <Text key={index} className="text-text">
            {orderItem.quantity}x {orderItem.name}
          </Text>
        ))}
      </View>

      <View className="border-t border-gray-200 my-2" />

      <View className="flex-row justify-between items-center">
        <Text className="text-text">{item.address}</Text>
        <Text className="text-primary font-bold">
          {item.total.toLocaleString('fr-FR', {
            style: 'currency',
            currency: 'EUR',
          })}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-background">
      <Header 
        title="Historique des livraisons"
        rightComponent={
          <TouchableOpacity
            onPress={() => navigation.navigate('Settings')}
            className="p-2"
          >
            <Icon name="settings-outline" size={24} color="#333" />
          </TouchableOpacity>
        }
      />

      <FlatList
        data={deliveries}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingVertical: 20 }}
      />
    </View>
  );
}
