import React from 'react';
import { View, Text } from 'react-native';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '@/types/navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '@/components/common/Button';

type OrderConfirmationRouteProp = RouteProp<RootStackParamList, 'OrderConfirmation'>;

export default function OrderConfirmationScreen() {
  const navigation = useNavigation();
  const route = useRoute<OrderConfirmationRouteProp>();
  const { orderId } = route.params;

  return (
    <View className="flex-1 bg-background items-center justify-center p-4">
      <View className="w-20 h-20 rounded-full bg-success/20 items-center justify-center mb-6">
        <Icon name="checkmark-circle" size={48} color="#4CAF50" />
      </View>

      <Text className="text-2xl font-bold text-text text-center mb-2">
        Commande confirmée !
      </Text>

      <Text className="text-gray-500 text-center mb-6">
        Votre commande #{orderId} a été confirmée et est en cours de préparation.
      </Text>

      <View className="w-full space-y-4">
        <Button
          title="Suivre ma commande"
          onPress={() => navigation.navigate('OrderDetails' as never, { orderId } as never)}
          variant="primary"
        />

        <Button
          title="Retour à l'accueil"
          onPress={() => navigation.navigate('MainTabs' as never)}
          variant="outline"
        />
      </View>
    </View>
  );
}
