import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

interface CardProps {
  title: string;
  description?: string;
  price?: number;
  imageUrl?: string;
  onPress?: () => void;
  className?: string;
}

export default function Card({
  title,
  description,
  price,
  imageUrl,
  onPress,
  className = '',
}: CardProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`bg-white rounded-xl shadow-sm overflow-hidden ${className}`}
    >
      {imageUrl && (
        <Image
          source={{ uri: imageUrl }}
          className="w-full h-48"
          resizeMode="cover"
        />
      )}
      <View className="p-4">
        <Text className="text-lg font-bold text-text mb-1">{title}</Text>
        {description && (
          <Text className="text-gray-600 text-sm mb-2">{description}</Text>
        )}
        {price !== undefined && (
          <Text className="text-primary font-bold text-lg">
            {price.toLocaleString('fr-FR', {
              style: 'currency',
              currency: 'EUR',
            })}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
}
