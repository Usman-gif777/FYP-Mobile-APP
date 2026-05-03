import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import BottomNav from '../components/BottomNav';
import { colors } from '../theme/colors';

export default function DashboardScreen() {
  const router = useRouter();
  const actions: { icon: any; label: string; route: string }[] = [
    { icon: 'extension-puzzle-outline', label: 'Tests', route: '/assessments' },
    { icon: 'mic-outline', label: 'Voice', route: '/voice' },
    { icon: 'document-text-outline', label: 'Reports', route: '/reports' },
  ];
  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView contentContainerStyle={{ padding: 20, paddingTop: 50, paddingBottom: 100 }}>
        <View style={s.row}>
          <View><Text style={s.muted}>Good morning</Text><Text style={s.h2}>Shahid Ali 👋</Text></View>
          <View style={s.bell}><Ionicons name="notifications-outline" size={18} color={colors.foreground} /></View>
        </View>
        <LinearGradient colors={colors.gradient} style={s.progress}>
          <Text style={{ color: '#fff', opacity: 0.85, fontSize: 12 }}>Your progress</Text>
          <Text style={{ color: '#fff', fontSize: 28, fontWeight: '700', marginTop: 4 }}>68%</Text>
          <View style={s.barBg}><View style={s.barFill} /></View>
          <Text style={{ color: '#fff', opacity: 0.85, fontSize: 11, marginTop: 8 }}>12 of 18 assessments completed</Text>
        </LinearGradient>
        <Text style={s.section}>Quick actions</Text>
        <View style={{ flexDirection: 'row', gap: 8 }}>
          {actions.map(a => (
            <TouchableOpacity key={a.label} style={s.card} onPress={() => router.push(a.route as any)}>
              <View style={s.iconBox}><Ionicons name={a.icon} size={18} color={colors.primary} /></View>
              <Text style={s.cardLbl}>{a.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={s.section}>Recent activity</Text>
        {[{ t: 'Cognitive Test', time: '2h ago', score: 92 }, { t: 'Voice Analysis', time: 'Yesterday', score: 85 }].map(it => (
          <View key={it.t} style={s.activity}>
            <View style={s.iconBox}><Ionicons name="trending-up-outline" size={18} color={colors.success} /></View>
            <View style={{ flex: 1 }}><Text style={{ fontWeight: '600', color: colors.foreground, fontSize: 13 }}>{it.t}</Text><Text style={{ color: colors.muted, fontSize: 11 }}>{it.time}</Text></View>
            <Text style={{ fontWeight: '700', color: colors.success }}>{it.score}</Text>
          </View>
        ))}
      </ScrollView>
      <BottomNav active="home" />
    </View>
  );
}
const s = StyleSheet.create({
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  muted: { color: colors.muted, fontSize: 12 },
  h2: { fontSize: 18, fontWeight: '700', color: colors.foreground },
  bell: { width: 40, height: 40, borderRadius: 20, borderWidth: 1, borderColor: colors.border, alignItems: 'center', justifyContent: 'center' },
  progress: { borderRadius: 20, padding: 16, marginTop: 20 },
  barBg: { height: 6, backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: 4, marginTop: 12, overflow: 'hidden' },
  barFill: { width: '68%', height: '100%', backgroundColor: '#fff' },
  section: { marginTop: 20, marginBottom: 10, fontSize: 14, fontWeight: '700', color: colors.foreground },
  card: { flex: 1, borderWidth: 1, borderColor: colors.border, borderRadius: 16, padding: 12, alignItems: 'center', gap: 6 },
  iconBox: { width: 36, height: 36, borderRadius: 12, backgroundColor: colors.secondary, alignItems: 'center', justifyContent: 'center' },
  cardLbl: { fontSize: 11, fontWeight: '500', color: colors.foreground },
  activity: { flexDirection: 'row', alignItems: 'center', gap: 12, borderWidth: 1, borderColor: colors.border, borderRadius: 16, padding: 12, marginBottom: 8 },
});
