import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '@/components/common/Header';
import Button from '@/components/common/Button';

interface DeliveryAddress {
  street: string;
  city: string;
  postalCode: string;
  instructions?: string;
}

interface PaymentMethod {
  id: string;
  type: 'card' | 'cash';
  last4?: string;
  brand?: string;
}

export default function CheckoutScreen() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [deliveryAddress, setDeliveryAddress] = useState<DeliveryAddress>({
    street: '',
    city: '',
    postalCode: '',
  });
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod>({
    id: '1',
    type: 'card',
    last4: '4242',
    brand: 'Visa',
  });

  const handleCheckout = async () => {
    setLoading(true);
    try {
      // TODO: Implémenter la logique de paiement
      await new Promise(resolve => setTimeout(resolve, 2000));
      navigation.navigate('OrderConfirmation' as never, { orderId: '123' } as never);
    } catch (error) {
      console.error('Erreur lors du paiement:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-background">
      <Header title="Paiement" showBack />
      
      <ScrollView className="flex-1">
        {/* Adresse de livraison */}
        <View className="p-4 bg-white mb-2">
          <Text className="text-lg font-bold text-text mb-4">
            Adresse de livraison
          </Text>
          
          <View className="space-y-4">
            <View>
              <Text className="text-text mb-1">Rue</Text>
              <TextInput
                value={deliveryAddress.street}
                onChangeText={text => setDeliveryAddress(prev => ({ ...prev, street: text }))}
                className="bg-gray-50 p-3 rounded-lg border border-gray-200"
                placeholder="123 rue de la Paix"
              />
            </View>
            
            <View className="flex-row space-x-2">
              <View className="flex-1">
                <Text className="text-text mb-1">Ville</Text>
                <TextInput
                  value={deliveryAddress.city}
                  onChangeText={text => setDeliveryAddress(prev => ({ ...prev, city: text }))}
                  className="bg-gray-50 p-3 rounded-lg border border-gray-200"
                  placeholder="Paris"
                />
              </View>
              
              <View className="w-32">
                <Text className="text-text mb-1">Code postal</Text>
                <TextInput
                  value={deliveryAddress.postalCode}
                  onChangeText={text => setDeliveryAddress(prev => ({ ...prev, postalCode: text }))}
                  className="bg-gray-50 p-3 rounded-lg border border-gray-200"
                  placeholder="75001"
                  keyboardType="number-pad"
                />
              </View>
            </View>
            
            <View>
              <Text className="text-text mb-1">Instructions (optionnel)</Text>
              <TextInput
                value={deliveryAddress.instructions}
                onChangeText={text => setDeliveryAddress(prev => ({ ...prev, instructions: text }))}
                className="bg-gray-50 p-3 rounded-lg border border-gray-200"
                placeholder="Digicode, étage, etc."
                multiline
                numberOfLines={2}
              />
            </View>
          </View>
        </View>
        
        {/* Méthode de paiement */}
        <View className="p-4 bg-white mb-2">
          <Text className="text-lg font-bold text-text mb-4">
            Méthode de paiement
          </Text>
          
          <TouchableOpacity
            onPress={() => {/* TODO: Gérer la sélection du paiement */}}
            className="flex-row items-center p-3 bg-gray-50 rounded-lg border border-gray-200"
          >
            <Icon
              name={selectedPayment.type === 'card' ? 'card' : 'cash'}
              size={24}
              color="#374151"
            />
            <View className="ml-3 flex-1">
              <Text className="text-text font-bold">
                {selectedPayment.type === 'card'
                  ? `${selectedPayment.brand} •••• ${selectedPayment.last4}`
                  : 'Paiement en espèces'}
              </Text>
            </View>
            <Icon name="chevron-forward" size={20} color="#9CA3AF" />
          </TouchableOpacity>
        </View>
        
        {/* Résumé de la commande */}
        <View className="p-4 bg-white">
          <Text className="text-lg font-bold text-text mb-4">
            Résumé de la commande
          </Text>
          
          <View className="space-y-2">
            <View className="flex-row justify-between">
              <Text className="text-text">Sous-total</Text>
              <Text className="text-text">25.98 €</Text>
            </View>
            
            <View className="flex-row justify-between">
              <Text className="text-text">Frais de livraison</Text>
              <Text className="text-text">2.99 €</Text>
            </View>
            
            <View className="flex-row justify-between pt-2 border-t border-gray-200">
              <Text className="text-text font-bold">Total</Text>
              <Text className="text-primary font-bold">28.97 €</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      
      {/* Bouton de paiement */}
      <View className="p-4 bg-white border-t border-gray-200">
        <Button
          title="Payer et commander"
          onPress={handleCheckout}
          loading={loading}
          variant="primary"
        />
      </View>
    </View>
  );
}
