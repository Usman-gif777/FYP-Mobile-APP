import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import BottomNav from '../components/BottomNav';
import { colors } from '../theme/colors';

const cats: { icon: any; label: string; v: number; color: string }[] = [
  { icon: 'bulb-outline', label: 'Cognitive', v: 92, color: colors.primary },
  { icon: 'mic-outline', label: 'Voice', v: 78, color: colors.accent },
  { icon: 'heart-outline', label: 'Wellness', v: 84, color: colors.success },
];

export default function ReportsScreen() {
  const router = useRouter();
  const bars = [40, 65, 50, 80, 60, 90, 75];
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView contentContainerStyle={{ padding: 20, paddingTop: 50, paddingBottom: 100 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
            <TouchableOpacity onPress={() => router.back()} style={s.btn}><Ionicons name="chevron-back" size={20} color={colors.foreground} /></TouchableOpacity>
            <Text style={{ fontSize: 16, fontWeight: '700', color: colors.foreground }}>Your Report</Text>
          </View>
          <TouchableOpacity style={s.btn}><Ionicons name="share-social-outline" size={18} color={colors.foreground} /></TouchableOpacity>
        </View>
        <LinearGradient colors={colors.gradient} style={s.score}>
          <Text style={{ color: '#fff', opacity: 0.85, fontSize: 11, letterSpacing: 1 }}>OVERALL SCORE</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 4 }}>
            <View><Text style={{ color: '#fff', fontSize: 40, fontWeight: '700' }}>87</Text><Text style={{ color: '#fff', opacity: 0.85, fontSize: 11 }}>Above average</Text></View>
            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.2)', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 }}>
              <Ionicons name="trending-up" size={12} color="#fff" /><Text style={{ color: '#fff', fontSize: 11, fontWeight: '600', marginLeft: 4 }}>+12%</Text>
            </View>
          </View>
        </LinearGradient>
        <View style={s.chartCard}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 }}>
            <Text style={{ fontWeight: '700', color: colors.foreground, fontSize: 13 }}>Weekly progress</Text>
            <Text style={{ color: colors.muted, fontSize: 11 }}>Last 7 days</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', height: 100 }}>
            {bars.map((h, i) => (
              <View key={i} style={{ flex: 1, alignItems: 'center', marginHorizontal: 3 }}>
                <LinearGradient colors={colors.gradient} style={{ width: '100%', height: `${h}%`, borderTopLeftRadius: 6, borderTopRightRadius: 6 }} />
                <Text style={{ fontSize: 10, color: colors.muted, marginTop: 4 }}>{days[i]}</Text>
              </View>
            ))}
          </View>
        </View>
        <Text style={{ marginTop: 16, fontWeight: '700', color: colors.foreground, fontSize: 13 }}>Category breakdown</Text>
        {cats.map(c => (
          <View key={c.label} style={s.catCard}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
              <View style={s.catIcon}><Ionicons name={c.icon} size={18} color={colors.foreground} /></View>
              <Text style={{ flex: 1, fontWeight: '600', color: colors.foreground, fontSize: 13 }}>{c.label}</Text>
              <Text style={{ fontWeight: '700', color: colors.foreground }}>{c.v}</Text>
            </View>
            <View style={s.barBg}><View style={{ width: `${c.v}%`, height: '100%', backgroundColor: c.color, borderRadius: 4 }} /></View>
          </View>
        ))}
      </ScrollView>
      <BottomNav active="report" />
    </View>
  );
}
const s = StyleSheet.create({
  btn: { width: 36, height: 36, borderRadius: 12, borderWidth: 1, borderColor: colors.border, alignItems: 'center', justifyContent: 'center' },
  score: { marginTop: 16, padding: 18, borderRadius: 20 },
  chartCard: { marginTop: 16, padding: 14, borderRadius: 16, borderWidth: 1, borderColor: colors.border },
  catCard: { marginTop: 10, padding: 12, borderRadius: 16, borderWidth: 1, borderColor: colors.border },
  catIcon: { width: 32, height: 32, borderRadius: 10, backgroundColor: colors.secondary, alignItems: 'center', justifyContent: 'center' },
  barBg: { height: 6, backgroundColor: colors.secondary, borderRadius: 4, marginTop: 8, overflow: 'hidden' },
});
