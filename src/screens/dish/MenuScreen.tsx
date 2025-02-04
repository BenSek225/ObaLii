import React, { useState } from 'react';
import { View, FlatList, TextInput, RefreshControl } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Card from '../../components/common/Card';
import Header from '../../components/common/Header';
import Icon from 'react-native-vector-icons/Ionicons';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
}

interface MenuScreenProps {
  navigation: NativeStackNavigationProp<any>;
}

export default function MenuScreen({ navigation }: MenuScreenProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    {
      id: '1',
      name: 'Poulet Yassa',
      description: 'Poulet mariné avec oignons et citron',
      price: 12.99,
      imageUrl: 'https://example.com/yassa.jpg',
      category: 'Plats principaux',
    },
    // Ajoutez d'autres plats ici
  ]);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    try {
      // TODO: Implement menu refresh logic
      await new Promise(resolve => setTimeout(resolve, 1000));
    } finally {
      setRefreshing(false);
    }
  }, []);

  const filteredItems = menuItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({ item }: { item: MenuItem }) => (
    <Card
      title={item.name}
      description={item.description}
      price={item.price}
      imageUrl={item.imageUrl}
      onPress={() => navigation.navigate('DishDetails', { dish: item })}
      className="mb-4 mx-4"
    />
  );

  return (
    <View className="flex-1 bg-background">
      <Header
        title="Menu"
        showBack
        rightComponent={
          <Icon name="cart-outline" size={24} color="#333" onPress={() => navigation.navigate('Cart')} />
        }
      />
      
      <View className="px-4 py-2">
        <View className="flex-row items-center bg-white rounded-lg px-4 mb-4">
          <Icon name="search-outline" size={20} color="#9CA3AF" />
          <TextInput
            placeholder="Rechercher un plat..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            className="flex-1 ml-2 py-2 text-text"
            placeholderTextColor="#9CA3AF"
          />
        </View>
      </View>

      <FlatList
        data={filteredItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}
