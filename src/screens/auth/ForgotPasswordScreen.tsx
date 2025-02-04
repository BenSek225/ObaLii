import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Button from '../../components/common/Button';

interface ForgotPasswordScreenProps {
  navigation: NativeStackNavigationProp<any>;
}

export default function ForgotPasswordScreen({ navigation }: ForgotPasswordScreenProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleResetPassword = async () => {
    setIsLoading(true);
    try {
      // TODO: Implement password reset logic
      navigation.navigate('Login');
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-background p-6">
      <View className="flex-1 justify-center">
        <View className="items-center mb-8">
          <Text className="text-3xl font-heading text-primary mb-2">
            Mot de passe oublié
          </Text>
          <Text className="text-text text-base text-center">
            Entrez votre email pour réinitialiser votre mot de passe
          </Text>
        </View>

        <View className="space-y-4">
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            className="bg-white p-4 rounded-lg border border-gray-200 text-text"
            placeholderTextColor="#9CA3AF"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Button
            title="Réinitialiser le mot de passe"
            onPress={handleResetPassword}
            loading={isLoading}
            variant="primary"
          />

          <Button
            title="Retour à la connexion"
            onPress={() => navigation.navigate('Login')}
            variant="outline"
          />
        </View>
      </View>
    </View>
  );
}
