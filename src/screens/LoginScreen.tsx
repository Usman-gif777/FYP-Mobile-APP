import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { useAuth } from '../context/AuthContext';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
};

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleLogin = async () => {
    if (!email.trim() || !password) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
    setLoading(true);
    try {
      await login(email, password);
      navigation.replace('MainApp');
    } catch (error) {
      Alert.alert('Login Failed', 'Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 justify-center px-6 bg-white">
      <View className="items-center mb-10">
        <View className="w-20 h-20 bg-blue-100 rounded-full items-center justify-center mb-4">
          <Text className="text-3xl">🧠</Text>
        </View>
        <Text className="text-2xl font-bold text-blue-600">Mental Health</Text>
        <Text className="text-2xl font-bold text-blue-600">Assessment</Text>
        <Text className="text-gray-500 mt-2">Sign in to continue</Text>
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
        onPress={handleLogin}
        disabled={loading}
      >
        {loading ? <ActivityIndicator color="white" /> : <Text className="text-white font-semibold text-lg">Login</Text>}
      </TouchableOpacity>
      <TouchableOpacity className="mt-6 items-center" onPress={() => navigation.navigate('Register')}>
        <Text className="text-blue-600">Don't have an account? <Text className="font-bold">Sign up</Text></Text>
      </TouchableOpacity>
    </View>
  );
}