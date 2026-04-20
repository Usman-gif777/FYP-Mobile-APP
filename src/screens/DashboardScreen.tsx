import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { useAuth } from '../context/AuthContext';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'MainApp'>;
};

// Mock assessment categories (match your web data)
const categories = [
  { id: 1, name: 'Depression Assessment', description: 'Evaluate depression symptoms', icon: '😔', questions: 21 },
  { id: 2, name: 'Anxiety Assessment', description: 'GAD-7 anxiety screening', icon: '😰', questions: 7 },
  { id: 3, name: 'Stress Assessment', description: 'Perceived stress scale', icon: '😫', questions: 10 },
  { id: 4, name: 'Wellness Check', description: 'General mental wellness', icon: '🌿', questions: 15 },
];

export default function DashboardScreen({ navigation }: Props) {
  const { user } = useAuth();

  return (
    <ScrollView className="flex-1 bg-gray-100">
      {/* Header */}
      <View className="bg-blue-600 px-6 pt-12 pb-6 rounded-b-3xl">
        <Text className="text-white text-2xl font-bold">Hello, {user?.name} 👋</Text>
        <Text className="text-blue-100 mt-1">How are you feeling today?</Text>
      </View>

      {/* Quick stats */}
      <View className="flex-row px-4 -mt-6 mb-6">
        <View className="flex-1 bg-white mx-2 p-4 rounded-xl shadow-sm">
          <Text className="text-2xl font-bold text-blue-600">0</Text>
          <Text className="text-gray-500">Completed</Text>
        </View>
        <View className="flex-1 bg-white mx-2 p-4 rounded-xl shadow-sm">
          <Text className="text-2xl font-bold text-green-600">0</Text>
          <Text className="text-gray-500">In Progress</Text>
        </View>
      </View>

      {/* Assessment Categories */}
      <Text className="text-xl font-bold px-4 mb-3">Available Assessments</Text>
      {categories.map((cat) => (
        <TouchableOpacity
          key={cat.id}
          className="bg-white mx-4 mb-3 p-4 rounded-xl shadow-sm flex-row items-center"
          onPress={() => navigation.navigate('AssessmentDetail', { assessmentId: cat.id })}
        >
          <Text className="text-4xl mr-4">{cat.icon}</Text>
          <View className="flex-1">
            <Text className="text-lg font-semibold">{cat.name}</Text>
            <Text className="text-gray-500 text-sm">{cat.description}</Text>
            <Text className="text-gray-400 text-xs mt-1">{cat.questions} questions</Text>
          </View>
          <Text className="text-gray-400">›</Text>
        </TouchableOpacity>
      ))}

      {/* Voice Assessment Prominent Button */}
      <TouchableOpacity
        className="bg-purple-600 mx-4 my-4 p-4 rounded-xl flex-row items-center justify-center"
        onPress={() => navigation.navigate('VoiceAssessment')}
      >
        <Text className="text-white text-lg font-semibold mr-2">🎤 Try Voice Assessment</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}