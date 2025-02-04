import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '@/types/navigation';
import Header from '@/components/common/Header';
import Button from '@/components/common/Button';

type DishDetailsRouteProp = RouteProp<RootStackParamList, 'DishDetails'>;

export default function DishDetailsScreen() {
  const route = useRoute<DishDetailsRouteProp>();
  const { dish } = route.params;

  return (
    <View className="flex-1 bg-background">
      <Header title="Détails du plat" showBack />
      
      <ScrollView>
        <Image
          source={{ uri: dish.imageUrl }}
          className="w-full h-64"
          resizeMode="cover"
        />
        
        <View className="p-4">
          <Text className="text-2xl font-bold text-text mb-2">
            {dish.name}
          </Text>
          
          <Text className="text-gray-600 mb-4">
            {dish.description}
          </Text>
          
          <Text className="text-xl font-bold text-primary mb-6">
            {dish.price.toLocaleString('fr-FR', {
              style: 'currency',
              currency: 'EUR',
            })}
          </Text>
          
          {/* Options et personnalisation */}
          <View className="mb-6">
            <Text className="text-lg font-bold text-text mb-2">
              Options
            </Text>
            {/* TODO: Ajouter les options du plat */}
          </View>
          
          {/* Notes spéciales */}
          <View className="mb-6">
            <Text className="text-lg font-bold text-text mb-2">
              Notes spéciales
            </Text>
            {/* TODO: Ajouter un champ de texte pour les notes */}
          </View>
        </View>
      </ScrollView>
      
      {/* Bouton d'ajout au panier */}
      <View className="p-4 bg-white border-t border-gray-200">
        <Button
          title="Ajouter au panier"
          onPress={() => {
            // TODO: Implémenter l'ajout au panier
          }}
          variant="primary"
        />
      </View>
    </View>
  );
}
