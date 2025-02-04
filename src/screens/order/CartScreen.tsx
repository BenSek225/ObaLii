import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '@/components/common/Header';
import Button from '@/components/common/Button';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
  notes?: string;
}

export default function CartScreen() {
  const navigation = useNavigation();
  const [cartItems, setCartItems] = React.useState<CartItem[]>([
    // Exemple de données
    {
      id: '1',
      name: 'Poulet Yassa',
      price: 12.99,
      quantity: 2,
      imageUrl: 'https://example.com/yassa.jpg',
    },
  ]);

  const updateQuantity = (id: string, change: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(0, item.quantity + change),
            }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const getTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const renderItem = ({ item }: { item: CartItem }) => (
    <View className="flex-row p-4 bg-white mb-2 rounded-lg">
      <Image
        source={{ uri: item.imageUrl }}
        className="w-20 h-20 rounded-lg"
        resizeMode="cover"
      />
      
      <View className="flex-1 ml-4">
        <Text className="text-text font-bold mb-1">{item.name}</Text>
        <Text className="text-primary font-bold">
          {item.price.toLocaleString('fr-FR', {
            style: 'currency',
            currency: 'EUR',
          })}
        </Text>
        
        {item.notes && (
          <Text className="text-gray-500 text-sm mt-1">{item.notes}</Text>
        )}
        
        <View className="flex-row items-center mt-2">
          <TouchableOpacity
            onPress={() => updateQuantity(item.id, -1)}
            className="w-8 h-8 bg-gray-100 rounded-full items-center justify-center"
          >
            <Icon name="remove" size={20} color="#374151" />
          </TouchableOpacity>
          
          <Text className="mx-4 text-text">{item.quantity}</Text>
          
          <TouchableOpacity
            onPress={() => updateQuantity(item.id, 1)}
            className="w-8 h-8 bg-gray-100 rounded-full items-center justify-center"
          >
            <Icon name="add" size={20} color="#374151" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View className="flex-1 bg-background">
      <Header title="Panier" showBack />
      
      {cartItems.length > 0 ? (
        <>
          <FlatList
            data={cartItems}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            contentContainerStyle={{ padding: 16 }}
          />
          
          <View className="p-4 bg-white border-t border-gray-200">
            <View className="flex-row justify-between mb-4">
              <Text className="text-text font-bold">Total</Text>
              <Text className="text-primary font-bold text-lg">
                {getTotal().toLocaleString('fr-FR', {
                  style: 'currency',
                  currency: 'EUR',
                })}
              </Text>
            </View>
            
            <Button
              title="Passer à la commande"
              onPress={() => navigation.navigate('Checkout' as never)}
              variant="primary"
            />
          </View>
        </>
      ) : (
        <View className="flex-1 items-center justify-center p-4">
          <Icon name="cart-outline" size={64} color="#9CA3AF" />
          <Text className="text-text text-lg font-bold mt-4">
            Votre panier est vide
          </Text>
          <Text className="text-gray-500 text-center mt-2">
            Ajoutez des plats à votre panier pour commencer votre commande
          </Text>
          <Button
            title="Parcourir le menu"
            onPress={() => navigation.goBack()}
            variant="outline"
            className="mt-6"
          />
        </View>
      )}
    </View>
  );
}
