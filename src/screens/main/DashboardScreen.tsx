// src/screens/main/DashboardScreen.tsx
import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { Colors } from '../../constants/colors';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

const DUMMY_ASSESSMENTS = [
  { id: '1', title: 'Stress Assessment', description: 'Evaluate your stress levels over the past two weeks.', questions: 10, category_type: 'option_based' },
  { id: '2', title: 'Anxiety Screening', description: 'Standardized GAD-7 questionnaire.', questions: 7, category_type: 'option_based' },
  { id: '3', title: 'Voice Mood Analysis', description: 'Speak naturally to assess emotional state.', questions: 5, category_type: 'audio_based' },
];

const DashboardScreen = ({ navigation }: any) => {
  const { user } = useAuth();

  const renderAssessmentItem = ({ item }: any) => (
    <Card style={styles.card}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardDescription}>{item.description}</Text>
      <View style={styles.cardFooter}>
        <Text style={styles.questionCount}>{item.questions} questions</Text>
        <Button
          title="Start"
          variant="coral"
          size="sm"
          onPress={() => {
            if (item.category_type === 'audio_based') {
              navigation.navigate('VoiceAssessment', { assessmentId: item.id, attemptId: 'dummy-attempt' });
            } else {
              navigation.navigate('OptionAssessment', { assessmentId: item.id });
            }
          }}
        />
      </View>
    </Card>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcome}>Welcome back, {user?.name?.split(' ')[0] || 'User'}!</Text>
        <Text style={styles.subtitle}>Track your mental wellness journey</Text>
      </View>

      <View style={styles.statsContainer}>
        <Card style={styles.statCard}>
          <Text style={styles.statValue}>24</Text>
          <Text style={styles.statLabel}>Total Sessions</Text>
        </Card>
        <Card style={styles.statCard}>
          <Text style={styles.statValue}>78%</Text>
          <Text style={styles.statLabel}>Avg. Wellness</Text>
        </Card>
        <TouchableOpacity style={[styles.statCard, styles.startCard]} onPress={() => navigation.navigate('Assessments')}>
          <Text style={styles.startEmoji}>▶️</Text>
          <Text style={styles.startText}>Start New</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Recommended Assessments</Text>
      <FlatList
        data={DUMMY_ASSESSMENTS}
        renderItem={renderAssessmentItem}
        keyExtractor={item => item.id}
        scrollEnabled={false}
        contentContainerStyle={styles.listContent}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background, paddingHorizontal: 16, paddingTop: 16 },
  header: { marginBottom: 24 },
  welcome: { fontSize: 28, fontFamily: 'DM Serif Display', color: Colors.text, marginBottom: 4 },
  subtitle: { fontSize: 16, color: Colors.textSecondary },
  statsContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 32, gap: 12 },
  statCard: { flex: 1, padding: 12, alignItems: 'center', backgroundColor: Colors.card },
  statValue: { fontSize: 24, fontWeight: 'bold', color: Colors.primary },
  statLabel: { fontSize: 12, color: Colors.textSecondary, marginTop: 4 },
  startCard: { backgroundColor: Colors.coral, alignItems: 'center', justifyContent: 'center' },
  startEmoji: { fontSize: 24 },
  startText: { color: Colors.primaryForeground, fontWeight: '600', marginTop: 4 },
  sectionTitle: { fontSize: 20, fontWeight: '600', color: Colors.text, marginBottom: 16 },
  listContent: { gap: 16 },
  card: { padding: 16 },
  cardTitle: { fontSize: 18, fontWeight: '600', color: Colors.text, marginBottom: 8 },
  cardDescription: { fontSize: 14, color: Colors.textSecondary, marginBottom: 12 },
  cardFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 },
  questionCount: { fontSize: 12, color: Colors.textSecondary },
});

export default DashboardScreen;