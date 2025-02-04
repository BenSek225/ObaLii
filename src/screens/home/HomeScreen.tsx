import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MainTabNavigationProp } from '@/types/navigation';
import Button from '@/components/common/Button';

export default function HomeScreen() {
  const navigation = useNavigation<MainTabNavigationProp>();

  return (
    <ScrollView className="flex-1 bg-background">
      <View className="p-4">
        <Text className="text-2xl font-bold text-text mb-6">
          Bienvenue sur Ôba-lii
        </Text>

        <View className="space-y-4">
          <Button
            title="Voir le menu"
            onPress={() => navigation.navigate('DishStack')}
            variant="primary"
          />

          <Button
            title="Mes commandes"
            onPress={() => navigation.navigate('OrderStack')}
            variant="secondary"
          />

          <Button
            title="Mon profil"
            onPress={() => navigation.navigate('ProfileStack')}
            variant="outline"
          />
        </View>
      </View>
    </ScrollView>
  );
}
