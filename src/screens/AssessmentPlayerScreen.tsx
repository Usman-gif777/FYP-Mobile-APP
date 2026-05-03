import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { colors } from '../theme/colors';

const opts = ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'];

export default function AssessmentPlayerScreen() {
  const [sel, setSel] = useState(2);
  const router = useRouter();
  return (
    <View style={{ flex: 1, backgroundColor: colors.background, padding: 20, paddingTop: 50 }}>
      <View style={s.header}>
        <TouchableOpacity onPress={() => router.back()} style={s.btn}><Ionicons name="close" size={20} color={colors.foreground} /></TouchableOpacity>
        <View style={s.timer}><Ionicons name="time-outline" size={14} color={colors.warning} /><Text style={{ fontWeight: '600', fontSize: 12, marginLeft: 4 }}>12:34</Text></View>
      </View>
      <View style={{ marginTop: 20 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 }}>
          <Text style={{ color: colors.muted, fontSize: 11 }}>Question 4 of 20</Text>
          <Text style={{ color: colors.primary, fontSize: 11, fontWeight: '600' }}>20%</Text>
        </View>
        <View style={s.barBg}><LinearGradient colors={colors.gradient} style={{ width: '20%', height: '100%' }} /></View>
      </View>
      <Text style={{ marginTop: 24, fontSize: 11, fontWeight: '700', color: colors.primary }}>COGNITIVE</Text>
      <Text style={{ fontSize: 18, fontWeight: '700', color: colors.foreground, marginTop: 8, lineHeight: 26 }}>How often do you find it difficult to concentrate on tasks for extended periods?</Text>
      <ScrollView style={{ marginTop: 20 }}>
        {opts.map((o, i) => {
          const active = i === sel;
          return (
            <TouchableOpacity key={o} onPress={() => setSel(i)} style={[s.opt, active && { borderColor: colors.primary, backgroundColor: '#EEF2FF' }]}>
              <View style={[s.radio, active && { borderColor: colors.primary, backgroundColor: colors.primary }]} />
              <Text style={{ fontSize: 14, color: active ? colors.primary : colors.foreground, fontWeight: '500' }}>{o}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <View style={{ flexDirection: 'row', gap: 10, marginTop: 12 }}>
        <TouchableOpacity style={[s.navBtn, { borderWidth: 1, borderColor: colors.border }]}><Text style={{ fontWeight: '600', color: colors.foreground }}>Previous</Text></TouchableOpacity>
        <TouchableOpacity style={{ flex: 1 }} onPress={() => router.push('/reports')}>
          <LinearGradient colors={colors.gradient} style={s.navBtn}><Text style={{ fontWeight: '600', color: '#fff' }}>Next</Text></LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const s = StyleSheet.create({
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  btn: { width: 36, height: 36, borderRadius: 12, borderWidth: 1, borderColor: colors.border, alignItems: 'center', justifyContent: 'center' },
  timer: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: colors.border, borderRadius: 20, paddingHorizontal: 12, paddingVertical: 6 },
  barBg: { height: 6, backgroundColor: colors.secondary, borderRadius: 4, overflow: 'hidden' },
  opt: { flexDirection: 'row', alignItems: 'center', gap: 12, padding: 14, borderWidth: 1, borderColor: colors.border, borderRadius: 12, marginBottom: 10 },
  radio: { width: 18, height: 18, borderRadius: 9, borderWidth: 2, borderColor: colors.border },
  navBtn: { flex: 1, paddingVertical: 14, borderRadius: 14, alignItems: 'center' },
});
