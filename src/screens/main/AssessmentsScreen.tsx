// src/screens/main/AssessmentsScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

const AssessmentsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Assessments Library</Text>
      <Text style={styles.subtitle}>Coming soon in Phase 1 – full list of assessments with start drawers</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background, justifyContent: 'center', alignItems: 'center', padding: 24 },
  title: { fontSize: 24, fontWeight: 'bold', color: Colors.text, marginBottom: 8 },
  subtitle: { fontSize: 16, color: Colors.textSecondary, textAlign: 'center' },
});

export default AssessmentsScreen;