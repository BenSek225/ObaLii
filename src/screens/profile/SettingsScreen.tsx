import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, ScrollView, Alert } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Header from '../../components/common/Header';
import Icon from 'react-native-vector-icons/Ionicons';

interface SettingsScreenProps {
  navigation: NativeStackNavigationProp<any>;
}

interface SettingsItem {
  id: string;
  title: string;
  type: 'toggle' | 'button' | 'navigation';
  icon: string;
  value?: boolean;
  onPress?: () => void;
  screen?: string;
  danger?: boolean;
}

export default function SettingsScreen({ navigation }: SettingsScreenProps) {
  const [settings, setSettings] = useState<SettingsItem[]>([
    {
      id: 'notifications',
      title: 'Notifications',
      type: 'toggle',
      icon: 'notifications-outline',
      value: true,
    },
    {
      id: 'location',
      title: 'Localisation',
      type: 'toggle',
      icon: 'location-outline',
      value: true,
    },
    {
      id: 'darkMode',
      title: 'Mode sombre',
      type: 'toggle',
      icon: 'moon-outline',
      value: false,
    },
    {
      id: 'language',
      title: 'Langue',
      type: 'navigation',
      icon: 'language-outline',
      screen: 'Language',
    },
    {
      id: 'payment',
      title: 'Méthodes de paiement',
      type: 'navigation',
      icon: 'card-outline',
      screen: 'PaymentMethods',
    },
    {
      id: 'privacy',
      title: 'Confidentialité',
      type: 'navigation',
      icon: 'lock-closed-outline',
      screen: 'Privacy',
    },
    {
      id: 'help',
      title: 'Aide & Support',
      type: 'navigation',
      icon: 'help-circle-outline',
      screen: 'Help',
    },
    {
      id: 'about',
      title: 'À propos',
      type: 'navigation',
      icon: 'information-circle-outline',
      screen: 'About',
    },
    {
      id: 'logout',
      title: 'Déconnexion',
      type: 'button',
      icon: 'log-out-outline',
      danger: true,
      onPress: () => {
        Alert.alert(
          'Déconnexion',
          'Êtes-vous sûr de vouloir vous déconnecter ?',
          [
            {
              text: 'Annuler',
              style: 'cancel',
            },
            {
              text: 'Déconnexion',
              style: 'destructive',
              onPress: () => {
                // TODO: Implement logout logic
                navigation.reset({
                  index: 0,
                  routes: [{ name: 'Login' }],
                });
              },
            },
          ],
        );
      },
    },
  ]);

  const handleToggle = (id: string) => {
    setSettings(prevSettings =>
      prevSettings.map(item =>
        item.id === id ? { ...item, value: !item.value } : item
      )
    );
  };

  const renderItem = (item: SettingsItem) => (
    <TouchableOpacity
      key={item.id}
      onPress={() => {
        if (item.type === 'navigation' && item.screen) {
          navigation.navigate(item.screen);
        } else if (item.type === 'button' && item.onPress) {
          item.onPress();
        }
      }}
      className={`flex-row items-center justify-between p-4 bg-white border-b border-gray-100
        ${item.type === 'button' ? '' : 'active:bg-gray-50'}`}
    >
      <View className="flex-row items-center">
        <Icon
          name={item.icon}
          size={24}
          color={item.danger ? '#EF4444' : '#374151'}
          className="mr-3"
        />
        <Text className={`text-base ${item.danger ? 'text-error' : 'text-text'}`}>
          {item.title}
        </Text>
      </View>

      {item.type === 'toggle' && (
        <Switch
          value={item.value}
          onValueChange={() => handleToggle(item.id)}
          trackColor={{ false: '#D1D5DB', true: '#4CAF50' }}
          thumbColor="white"
        />
      )}

      {item.type === 'navigation' && (
        <Icon name="chevron-forward" size={24} color="#9CA3AF" />
      )}
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-background">
      <Header title="Paramètres" showBack />

      <ScrollView>
        <View className="py-2">
          {settings.map(renderItem)}
        </View>

        <Text className="text-center text-gray-400 mt-4 mb-8">
          Version 1.0.0
        </Text>
      </ScrollView>
    </View>
  );
}
