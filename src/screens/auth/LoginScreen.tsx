import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/navigation';
import Button from '@/components/common/Button';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function LoginScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
      // TODO: Implement actual login logic here
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      navigation.reset({
        index: 0,
        routes: [{ name: 'MainTabs' }],
      });
    } catch (error) {
      console.error('Login error:', error);
      // TODO: Show error message to user
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-background p-6">
      <View className="flex-1 justify-center">
        <View className="items-center mb-8">
          <Text className="text-3xl font-bold text-primary mb-2">Ôba-lii</Text>
          <Text className="text-text text-base">Connectez-vous à votre compte</Text>
        </View>

        <View className="space-y-4">
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            className="bg-white p-4 rounded-lg border border-gray-200 text-text"
            placeholderTextColor="#9CA3AF"
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <TextInput
            placeholder="Mot de passe"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            className="bg-white p-4 rounded-lg border border-gray-200 text-text"
            placeholderTextColor="#9CA3AF"
          />

          <Button
            title="Se connecter"
            onPress={handleLogin}
            loading={loading}
            variant="primary"
          />

          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPassword')}
            className="items-center mt-2"
          >
            <Text className="text-primary">Mot de passe oublié ?</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="mt-8">
        <TouchableOpacity
          onPress={() => navigation.navigate('Register')}
          className="items-center"
        >
          <Text className="text-text">
            Pas encore de compte ?{' '}
            <Text className="text-primary font-bold">S'inscrire</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
