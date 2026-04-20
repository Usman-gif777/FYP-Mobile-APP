import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'VoiceAssessment'>;
};

export default function VoiceAssessmentScreen({ navigation }: Props) {
  const [recording, setRecording] = useState(false);

  const startRecording = () => {
    setRecording(true);
    Alert.alert('Recording', 'Voice recording started (mock)');
  };

  const stopRecording = () => {
    setRecording(false);
    Alert.alert('Recording', 'Voice recording stopped. Emotion analysis would run here.');
  };

  return (
    <View className="flex-1 justify-center items-center bg-white p-4">
      <Text className="text-2xl font-bold text-purple-600 mb-4">Voice Assessment</Text>
      <Text className="text-gray-600 text-center mb-8">
        Answer the following question by speaking naturally.
      </Text>
      <Text className="text-lg font-medium mb-8 text-center">
        "How have you been feeling over the past two weeks?"
      </Text>
      <TouchableOpacity
        className={`w-24 h-24 rounded-full items-center justify-center ${recording ? 'bg-red-600' : 'bg-purple-600'}`}
        onPress={recording ? stopRecording : startRecording}
      >
        <Text className="text-white text-lg">{recording ? '⏹' : '🎤'}</Text>
      </TouchableOpacity>
      <Text className="mt-4 text-gray-500">{recording ? 'Recording... tap to stop' : 'Tap to start recording'}</Text>
      <TouchableOpacity
        className="mt-10 bg-gray-300 rounded-lg py-2 px-6"
        onPress={() => navigation.goBack()}
      >
        <Text className="text-gray-700">Back</Text>
      </TouchableOpacity>
    </View>
  );
}