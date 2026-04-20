import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { useAuth } from '../context/AuthContext';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Register'>;
};

export default function RegisterScreen({ navigation }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();

  const handleRegister = async () => {
    if (!name.trim() || !email.trim() || !password) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
    setLoading(true);
    try {
      await register(name, email, password);
      navigation.replace('MainApp');
    } catch (error) {
      Alert.alert('Registration Failed', 'Please try again');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 justify-center px-6 bg-white">
      <View className="items-center mb-8">
        <Text className="text-2xl font-bold text-blue-600">Create Account</Text>
        <Text className="text-gray-500 mt-2">Sign up to get started</Text>
      </View>
      <View className="mb-4">
        <Text className="text-gray-700 font-medium mb-1">Full Name</Text>
        <TextInput
          className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-50"
          placeholder="John Doe"
          value={name}
          onChangeText={setName}
        />
      </View>
      <View className="mb-4">
        <Text className="text-gray-700 font-medium mb-1">Email</Text>
        <TextInput
          className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-50"
          placeholder="you@example.com"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
      </View>
      <View className="mb-6">
        <Text className="text-gray-700 font-medium mb-1">Password</Text>
        <TextInput
          className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-50"
          placeholder="••••••••"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <TouchableOpacity
        className={`bg-blue-600 rounded-lg py-3 items-center ${loading ? 'opacity-60' : ''}`}
        onPress={handleRegister}
        disabled={loading}
      >
        {loading ? <ActivityIndicator color="white" /> : <Text className="text-white font-semibold text-lg">Sign Up</Text>}
      </TouchableOpacity>
      <TouchableOpacity className="mt-6 items-center" onPress={() => navigation.navigate('Login')}>
        <Text className="text-blue-600">Already have an account? <Text className="font-bold">Login</Text></Text>
      </TouchableOpacity>
    </View>
  );
}