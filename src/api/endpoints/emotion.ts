import apiClient from '../client';
import { EmotionResult } from '../../types/emotion';

export const emotionApi = {
  detectFromAudio: (audioUri: string) => {
    const formData = new FormData();
    // @ts-ignore - React Native FormData expects a Blob-like object
    formData.append('audio', {
      uri: audioUri,
      type: 'audio/m4a',
      name: 'recording.m4a',
    });
    return apiClient.post<EmotionResult>('/emotions/predict-emotion', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
};