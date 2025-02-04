import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';
import Icon from 'react-native-vector-icons/Ionicons';

interface EditProfileScreenProps {
  navigation: NativeStackNavigationProp<any>;
}

interface ProfileData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  avatar?: string;
}

export default function EditProfileScreen({ navigation }: EditProfileScreenProps) {
  const [loading, setLoading] = useState(false);
  const [profileData, setProfileData] = useState<ProfileData>({
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+33 6 12 34 56 78',
    address: '123 Rue de la Paix, Paris',
    avatar: 'https://example.com/avatar.jpg',
  });

  const handleSave = async () => {
    setLoading(true);
    try {
      // TODO: Implement profile update logic
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigation.goBack();
    } catch (error) {
      console.error('Error updating profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChangePhoto = () => {
    // TODO: Implement photo change logic
  };

  return (
    <View className="flex-1 bg-background">
      <Header title="Modifier le profil" showBack />

      <ScrollView className="flex-1 p-4">
        {/* Profile Photo */}
        <View className="items-center mb-6">
          <View className="relative">
            <Image
              source={
                profileData.avatar
                  ? { uri: profileData.avatar }
                  : require('../../../assets/default-avatar.png')
              }
              className="w-24 h-24 rounded-full"
            />
            <TouchableOpacity
              onPress={handleChangePhoto}
              className="absolute bottom-0 right-0 bg-primary rounded-full p-2"
            >
              <Icon name="camera" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Form Fields */}
        <View className="space-y-4">
          <View>
            <Text className="text-text mb-1 ml-1">Nom complet</Text>
            <TextInput
              value={profileData.fullName}
              onChangeText={(text) => setProfileData({ ...profileData, fullName: text })}
              className="bg-white p-4 rounded-lg border border-gray-200 text-text"
              placeholderTextColor="#9CA3AF"
            />
          </View>

          <View>
            <Text className="text-text mb-1 ml-1">Email</Text>
            <TextInput
              value={profileData.email}
              onChangeText={(text) => setProfileData({ ...profileData, email: text })}
              className="bg-white p-4 rounded-lg border border-gray-200 text-text"
              placeholderTextColor="#9CA3AF"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View>
            <Text className="text-text mb-1 ml-1">Téléphone</Text>
            <TextInput
              value={profileData.phone}
              onChangeText={(text) => setProfileData({ ...profileData, phone: text })}
              className="bg-white p-4 rounded-lg border border-gray-200 text-text"
              placeholderTextColor="#9CA3AF"
              keyboardType="phone-pad"
            />
          </View>

          <View>
            <Text className="text-text mb-1 ml-1">Adresse</Text>
            <TextInput
              value={profileData.address}
              onChangeText={(text) => setProfileData({ ...profileData, address: text })}
              className="bg-white p-4 rounded-lg border border-gray-200 text-text"
              placeholderTextColor="#9CA3AF"
              multiline
              numberOfLines={3}
            />
          </View>
        </View>

        {/* Save Button */}
        <Button
          title="Enregistrer les modifications"
          onPress={handleSave}
          loading={loading}
          variant="primary"
          className="mt-6"
        />
      </ScrollView>
    </View>
  );
}
