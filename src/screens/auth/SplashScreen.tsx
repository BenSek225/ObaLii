import React, { useEffect } from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '@/types/navigation';

type NavigationProp = NativeStackNavigationProp<AuthStackParamList, 'Splash'>;

const SplashScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  useEffect(() => {
    // Simuler un temps de chargement et rediriger vers Login
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 3000); // 3 secondes de délai

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View className="flex-1 bg-purple-500 items-center justify-center px-6">
      {/* Logo */}
      <Image
        source={require('../../assets/logo/logo.png')}
        className="w-48 h-48 mb-8"
        resizeMode="contain"
      />

      {/* Texte d'accroche */}
      <Text className="text-white text-xl text-center font-medium mb-12">
        Bienvenue sur VegaPlay, votre plateforme de jeux de société en ligne
      </Text>

      {/* Indicateur de chargement */}
      <ActivityIndicator size="large" color="white" />
    </View>
  );
};

export default SplashScreen;
