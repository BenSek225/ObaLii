import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Button from '../../components/common/Button';

interface RegisterScreenProps {
  navigation: NativeStackNavigationProp<any>;
}

export default function RegisterScreen({ navigation }: RegisterScreenProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
  });

  const handleRegister = () => {
    // TODO: Implement registration logic
    navigation.navigate('Login');
  };

  return (
    <ScrollView className="flex-1 bg-background">
      <View className="p-6">
        <View className="items-center mb-8">
          <Text className="text-3xl font-heading text-primary mb-2">Inscription</Text>
          <Text className="text-text text-base">Créez votre compte Ôba-lii</Text>
        </View>

        <View className="space-y-4">
          <TextInput
            placeholder="Nom complet"
            value={formData.fullName}
            onChangeText={(text) => setFormData({ ...formData, fullName: text })}
            className="bg-white p-4 rounded-lg border border-gray-200 text-text"
            placeholderTextColor="#9CA3AF"
          />

          <TextInput
            placeholder="Email"
            value={formData.email}
            onChangeText={(text) => setFormData({ ...formData, email: text })}
            className="bg-white p-4 rounded-lg border border-gray-200 text-text"
            placeholderTextColor="#9CA3AF"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            placeholder="Téléphone"
            value={formData.phone}
            onChangeText={(text) => setFormData({ ...formData, phone: text })}
            className="bg-white p-4 rounded-lg border border-gray-200 text-text"
            placeholderTextColor="#9CA3AF"
            keyboardType="phone-pad"
          />

          <TextInput
            placeholder="Mot de passe"
            value={formData.password}
            onChangeText={(text) => setFormData({ ...formData, password: text })}
            className="bg-white p-4 rounded-lg border border-gray-200 text-text"
            placeholderTextColor="#9CA3AF"
            secureTextEntry
          />

          <TextInput
            placeholder="Confirmer le mot de passe"
            value={formData.confirmPassword}
            onChangeText={(text) => setFormData({ ...formData, confirmPassword: text })}
            className="bg-white p-4 rounded-lg border border-gray-200 text-text"
            placeholderTextColor="#9CA3AF"
            secureTextEntry
          />

          <Button
            title="S'inscrire"
            onPress={handleRegister}
            variant="primary"
          />

          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            className="items-center mt-4"
          >
            <Text className="text-text">
              Déjà un compte ?{' '}
              <Text className="text-primary font-bold">Se connecter</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
