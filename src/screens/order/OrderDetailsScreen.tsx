import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';

interface OrderDetailsScreenProps {
  navigation: NativeStackNavigationProp<any>;
  route: RouteProp<{ params: { orderId: string } }, 'params'>;
}

interface OrderDetails {
  id: string;
  date: Date;
  status: 'pending' | 'preparing' | 'delivering' | 'delivered' | 'cancelled';
  items: Array<{
    id: string;
    name: string;
    quantity: number;
    price: number;
  }>;
  total: number;
  deliveryAddress: string;
  estimatedDeliveryTime?: Date;
  deliveryFee: number;
}

export default function OrderDetailsScreen({ navigation, route }: OrderDetailsScreenProps) {
  const [order, setOrder] = useState<OrderDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Implement order fetching logic
    const fetchOrder = async () => {
      try {
        // Simulate API call
        const mockOrder: OrderDetails = {
          id: route.params.orderId,
          date: new Date(),
          status: 'delivering',
          items: [
            { id: '1', name: 'Poulet Yassa', quantity: 2, price: 12.99 },
            { id: '2', name: 'Riz', quantity: 2, price: 3.99 },
          ],
          total: 33.96,
          deliveryAddress: '123 Rue de la Paix, Paris',
          estimatedDeliveryTime: new Date(Date.now() + 30 * 60000), // +30 minutes
          deliveryFee: 2.99,
        };
        setOrder(mockOrder);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [route.params.orderId]);

  const getStatusColor = (status: OrderDetails['status']) => {
    const colors = {
      pending: 'bg-warning',
      preparing: 'bg-info',
      delivering: 'bg-primary',
      delivered: 'bg-success',
      cancelled: 'bg-error',
    };
    return colors[status];
  };

  const getStatusText = (status: OrderDetails['status']) => {
    const texts = {
      pending: 'En attente',
      preparing: 'En préparation',
      delivering: 'En livraison',
      delivered: 'Livré',
      cancelled: 'Annulé',
    };
    return texts[status];
  };

  if (loading || !order) {
    return (
      <View className="flex-1 bg-background justify-center items-center">
        <Text>Chargement...</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-background">
      <Header title={`Commande #${order.id}`} showBack />

      <ScrollView className="flex-1">
        <View className="p-4">
          {/* Status */}
          <View className="bg-white rounded-lg p-4 mb-4">
            <Text className="text-lg font-bold text-text mb-2">Statut</Text>
            <View className={`self-start px-3 py-1 rounded-full ${getStatusColor(order.status)}`}>
              <Text className="text-white">{getStatusText(order.status)}</Text>
            </View>
          </View>

          {/* Items */}
          <View className="bg-white rounded-lg p-4 mb-4">
            <Text className="text-lg font-bold text-text mb-2">Articles</Text>
            {order.items.map(item => (
              <View key={item.id} className="flex-row justify-between mb-2">
                <Text className="text-text">
                  {item.quantity}x {item.name}
                </Text>
                <Text className="text-text">
                  {(item.price * item.quantity).toLocaleString('fr-FR', {
                    style: 'currency',
                    currency: 'EUR',
                  })}
                </Text>
              </View>
            ))}
            <View className="border-t border-gray-200 my-2" />
            <View className="flex-row justify-between">
              <Text className="text-text">Livraison</Text>
              <Text className="text-text">
                {order.deliveryFee.toLocaleString('fr-FR', {
                  style: 'currency',
                  currency: 'EUR',
                })}
              </Text>
            </View>
            <View className="flex-row justify-between mt-2">
              <Text className="text-text font-bold">Total</Text>
              <Text className="text-primary font-bold">
                {(order.total + order.deliveryFee).toLocaleString('fr-FR', {
                  style: 'currency',
                  currency: 'EUR',
                })}
              </Text>
            </View>
          </View>

          {/* Delivery Info */}
          <View className="bg-white rounded-lg p-4 mb-4">
            <Text className="text-lg font-bold text-text mb-2">Livraison</Text>
            <Text className="text-text mb-2">{order.deliveryAddress}</Text>
            {order.estimatedDeliveryTime && (
              <Text className="text-text">
                Livraison estimée : {order.estimatedDeliveryTime.toLocaleTimeString('fr-FR')}
              </Text>
            )}
          </View>

          {/* Actions */}
          {order.status === 'delivering' && (
            <Button
              title="Suivre la livraison"
              onPress={() => navigation.navigate('DeliveryTracking', { orderId: order.id })}
              variant="primary"
              className="mt-4"
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
}
