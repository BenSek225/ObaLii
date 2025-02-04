import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen: React.FC = () => {
  const navigation = useNavigation();

  const menuOptions = [
    {
      title: 'Informations personnelles',
      icon: 'person-outline',
      bgColor: 'bg-blue-100',
      iconColor: '#3B82F6',
      screen: 'PersonalInfo',
    },
    {
      title: 'Documents d\'identité',
      icon: 'folder-open',
      bgColor: 'bg-orange-100',
      iconColor: '#F97316',
      screen: 'IdentityDocuments',
    },
    {
      title: 'Point relais',
      icon: 'location-on',
      bgColor: 'bg-green-100',
      iconColor: '#10B981',
      screen: 'PickupPoints',
    },
    {
      title: 'Contacter le service client',
      icon: 'support-agent',
      bgColor: 'bg-purple-100',
      iconColor: '#8B5CF6',
    },
  ];

  const userInfo = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+123456789',
    image: require('../../assets/logo/logo.png'),
  };

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-orange-500 pt-12 pb-6 px-6">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="w-10 h-10 rounded-full bg-white/20 justify-center items-center mb-6"
        >
          <Icon name="chevron-left" size={24} color="white" />
        </TouchableOpacity>
        <Text className="text-white text-2xl font-bold">Mon profil</Text>
      </View>

      <ScrollView className="flex-1 px-6 pt-6">
        {/* Profil utilisateur */}
        <View className="bg-white rounded-xl shadow-sm p-6 mb-6 items-center">
          <Image
            source={userInfo.image}
            className="w-24 h-24 rounded-full mb-4"
          />
          <Text className="text-xl font-semibold text-gray-800">userInfo.name</Text>
          <Text className="text-gray-500 mb-4">userInfo.email</Text>
          <View className="flex-row space-x-4">
            <TouchableOpacity className="bg-blue-100 px-4 py-2 rounded-full">
              <Text className="text-blue-600 font-semibold">Modifier le profil</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-red-100 px-4 py-2 rounded-full">
              <Text className="text-red-600 font-semibold">Déconnexion</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Liens vers les sections */}
        <View>
          {menuOptions.map((option, index) => (
            <TouchableOpacity
              key={index}
              //onPress={() => navigation.navigate(option.screen)}
              className="flex-row items-center bg-white p-4 rounded-xl mb-4 shadow-sm"
            >
              <View
                // style={{ opacity: 100, backgroundColor: option.color }}
                className={`w-12 h-12 rounded-full ${option.bgColor} justify-center items-center`}
              >
                <MaterialIcons name={option.icon} size={24} color={option.iconColor} />
              </View>
              <Text className="flex-1 text-lg font-semibold text-gray-800 ml-4">
                {option.title}
              </Text>
              <Icon name="chevron-right" size={24} color="#9CA3AF" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Footer */}
        <View className="items-center mt-10">
          <Text className="text-gray-400 text-sm">Version 1.0.0</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
