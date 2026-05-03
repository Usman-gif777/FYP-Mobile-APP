import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import GradientButton from '../components/GradientButton';
import { colors } from '../theme/colors';

export default function SignupScreen() {
  const [name, setName] = useState(''); const [email, setEmail] = useState(''); const [p, setP] = useState(''); const [c, setC] = useState('');
  const router = useRouter();
  const fields: { ph: string; v: string; set: (s: string) => void; icon: any; secure?: boolean }[] = [
    { ph: 'Full name', v: name, set: setName, icon: 'person-outline' },
    { ph: 'Email', v: email, set: setEmail, icon: 'mail-outline' },
    { ph: 'Password', v: p, set: setP, icon: 'lock-closed-outline', secure: true },
    { ph: 'Confirm password', v: c, set: setC, icon: 'lock-closed-outline', secure: true },
  ];
  return (
    <ScrollView contentContainerStyle={s.c} style={{ backgroundColor: colors.background }}>
      <Text style={s.h1}>Create account</Text>
      <Text style={s.sub}>Start your assessment journey today</Text>
      {fields.map(f => (
        <View key={f.ph} style={s.field}>
          <Ionicons name={f.icon} size={18} color={colors.muted} />
          <TextInput style={s.input} placeholder={f.ph} value={f.v} onChangeText={f.set} secureTextEntry={f.secure} placeholderTextColor={colors.muted} />
        </View>
      ))}
      <GradientButton title="Create Account" onPress={() => router.replace('/dashboard')} style={{ marginTop: 16 }} />
      <TouchableOpacity onPress={() => router.back()}><Text style={s.foot}>Already have an account? <Text style={{ color: colors.primary, fontWeight: '600' }}>Sign in</Text></Text></TouchableOpacity>
    </ScrollView>
  );
}
const s = StyleSheet.create({
  c: { padding: 24, paddingTop: 60, flexGrow: 1 },
  h1: { fontSize: 24, fontWeight: '700', color: colors.foreground },
  sub: { color: colors.muted, marginTop: 4, marginBottom: 20 },
  field: { flexDirection: 'row', alignItems: 'center', gap: 8, borderWidth: 1, borderColor: colors.border, borderRadius: 12, paddingHorizontal: 12, paddingVertical: 12, marginBottom: 12 },
  input: { flex: 1, color: colors.foreground, fontSize: 14 },
  foot: { textAlign: 'center', color: colors.muted, marginTop: 16, fontSize: 12 },
});
