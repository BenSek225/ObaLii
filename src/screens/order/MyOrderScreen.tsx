import React, { useState } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Header from '../../components/common/Header';
import Icon from 'react-native-vector-icons/Ionicons';

interface Order {
  id: string;
  date: Date;
  status: 'pending' | 'preparing' | 'delivering' | 'delivered' | 'cancelled';
  items: OrderItem[];
  total: number;
}

interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

interface MyOrderScreenProps {
  navigation: NativeStackNavigationProp<any>;
}

export default function MyOrderScreen({ navigation }: MyOrderScreenProps) {
  const [orders, setOrders] = useState<Order[]>([
    {
      id: '1',
      date: new Date(),
      status: 'delivering',
      items: [
        { id: '1', name: 'Poulet Yassa', quantity: 2, price: 12.99 },
      ],
      total: 25.98,
    },
    // Ajoutez d'autres commandes ici
  ]);

  const getStatusColor = (status: Order['status']) => {
    const colors = {
      pending: 'bg-warning',
      preparing: 'bg-info',
      delivering: 'bg-primary',
      delivered: 'bg-success',
      cancelled: 'bg-error',
    };
    return colors[status];
  };

  const getStatusText = (status: Order['status']) => {
    const texts = {
      pending: 'En attente',
      preparing: 'En préparation',
      delivering: 'En livraison',
      delivered: 'Livré',
      cancelled: 'Annulé',
    };
    return texts[status];
  };

  const renderItem = ({ item }: { item: Order }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('OrderDetails', { orderId: item.id })}
      className="bg-white rounded-lg p-4 mb-4 mx-4 shadow-sm"
    >
      <View className="flex-row justify-between items-center mb-2">
        <Text className="text-text font-bold">
          Commande #{item.id}
        </Text>
        <View className={`px-3 py-1 rounded-full ${getStatusColor(item.status)}`}>
          <Text className="text-white text-sm">
            {getStatusText(item.status)}
          </Text>
        </View>
      </View>

      <View className="border-t border-gray-200 my-2" />

      <View className="space-y-1">
        {item.items.map(orderItem => (
          <View key={orderItem.id} className="flex-row justify-between">
            <Text className="text-text">
              {orderItem.quantity}x {orderItem.name}
            </Text>
            <Text className="text-text">
              {(orderItem.price * orderItem.quantity).toLocaleString('fr-FR', {
                style: 'currency',
                currency: 'EUR',
              })}
            </Text>
          </View>
        ))}
      </View>

      <View className="border-t border-gray-200 my-2" />

      <View className="flex-row justify-between items-center">
        <Text className="text-text font-bold">Total</Text>
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
        title="Mes commandes"
        rightComponent={
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Icon name="cart-outline" size={24} color="#333" />
          </TouchableOpacity>
        }
      />

      <FlatList
        data={orders}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingVertical: 20 }}
      />
    </View>
  );
}
