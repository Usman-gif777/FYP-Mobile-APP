import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'AssessmentDetail'>;
  route: any;
};

export default function AssessmentPlayerScreen({ navigation, route }: Props) {
  const { assessmentId } = route.params;
  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold text-blue-600 mb-4">Assessment {assessmentId}</Text>
      <Text className="text-gray-600 mb-6">Questionnaire will appear here. (Mock data)</Text>
      <TouchableOpacity
        className="bg-blue-600 rounded-lg py-3 items-center mt-4"
        onPress={() => navigation.goBack()}
      >
        <Text className="text-white font-semibold">Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}