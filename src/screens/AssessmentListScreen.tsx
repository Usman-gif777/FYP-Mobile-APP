import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import BottomNav from '../components/BottomNav';
import { colors } from '../theme/colors';

const items: { icon: any; title: string; q: string; time: string; color: string }[] = [
  { icon: 'bulb-outline', title: 'Cognitive Assessment', q: '20 questions', time: '15 min', color: colors.primary },
  { icon: 'mic-outline', title: 'Voice Analysis', q: '5 prompts', time: '8 min', color: colors.accent },
  { icon: 'heart-outline', title: 'Emotional Wellness', q: '15 questions', time: '10 min', color: colors.destructive },
  { icon: 'pulse-outline', title: 'Stress Level Test', q: '12 questions', time: '7 min', color: colors.warning },
  { icon: 'sparkles-outline', title: 'Personality Profile', q: '30 questions', time: '20 min', color: colors.success },
];

export default function AssessmentListScreen() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView contentContainerStyle={{ padding: 20, paddingTop: 50, paddingBottom: 100 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
          <TouchableOpacity onPress={() => router.back()} style={s.back}><Ionicons name="chevron-back" size={20} color={colors.foreground} /></TouchableOpacity>
          <Text style={{ fontSize: 18, fontWeight: '700', color: colors.foreground }}>Assessments</Text>
        </View>
        <View style={s.search}><Ionicons name="search-outline" size={16} color={colors.muted} /><TextInput placeholder="Search assessments..." placeholderTextColor={colors.muted} style={{ flex: 1, marginLeft: 8, color: colors.foreground }} /></View>
        {items.map(it => (
          <View key={it.title} style={s.row}>
            <View style={[s.iconBox, { backgroundColor: colors.secondary }]}><Ionicons name={it.icon} size={20} color={it.color} /></View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: '700', color: colors.foreground, fontSize: 13 }}>{it.title}</Text>
              <Text style={{ color: colors.muted, fontSize: 11, marginTop: 2 }}>{it.q} • {it.time}</Text>
            </View>
            <TouchableOpacity onPress={() => router.push('/player')}>
              <LinearGradient colors={colors.gradient} style={s.startBtn}><Text style={{ color: '#fff', fontWeight: '600', fontSize: 11 }}>Start</Text></LinearGradient>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <BottomNav active="list" />
    </View>
  );
}
const s = StyleSheet.create({
  back: { width: 36, height: 36, borderRadius: 12, borderWidth: 1, borderColor: colors.border, alignItems: 'center', justifyContent: 'center' },
  search: { marginTop: 16, flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: colors.border, borderRadius: 12, paddingHorizontal: 12, paddingVertical: 10 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 12, borderWidth: 1, borderColor: colors.border, borderRadius: 16, padding: 12, marginTop: 10 },
  iconBox: { width: 44, height: 44, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  startBtn: { paddingHorizontal: 14, paddingVertical: 8, borderRadius: 10 },
});
