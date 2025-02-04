import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';

interface HeaderProps {
  title: string;
  showBack?: boolean;
  rightComponent?: React.ReactNode;
  onBackPress?: () => void;
  className?: string;
}

export default function Header({
  title,
  showBack = false,
  rightComponent,
  onBackPress,
  className = '',
}: HeaderProps) {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const handleBackPress = () => {
    if (onBackPress) {
      onBackPress();
    } else {
      navigation.goBack();
    }
  };

  return (
    <View className={`flex-row items-center justify-between px-4 py-3 bg-white border-b border-gray-200 ${className}`}>
      <View className="flex-row items-center">
        {showBack && (
          <TouchableOpacity
            onPress={handleBackPress}
            className="mr-3"
          >
            <Icon name="chevron-back" size={24} color="#333" />
          </TouchableOpacity>
        )}
        <Text className="text-lg font-bold text-text">{title}</Text>
      </View>
      {rightComponent && (
        <View>
          {rightComponent}
        </View>
      )}
    </View>
  );
}
