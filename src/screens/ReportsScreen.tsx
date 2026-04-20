import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Reports'>;
};

// Mock data
const reports = [
  { id: '1', date: '2025-04-15', score: 12, level: 'Moderate' },
  { id: '2', date: '2025-04-01', score: 18, level: 'Severe' },
];

export default function ReportsScreen({ navigation }: Props) {
  return (
    <View className="flex-1 bg-gray-100 p-4">
      <Text className="text-2xl font-bold text-blue-600 mb-4">Assessment History</Text>
      {reports.length === 0 ? (
        <Text className="text-gray-500 text-center mt-10">No reports yet. Complete an assessment to see results.</Text>
      ) : (
        <FlatList
          data={reports}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity className="bg-white p-4 rounded-xl mb-3 shadow-sm">
              <Text className="font-semibold text-lg">{item.date}</Text>
              <Text>Score: {item.score}</Text>
              <Text>Level: {item.level}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}