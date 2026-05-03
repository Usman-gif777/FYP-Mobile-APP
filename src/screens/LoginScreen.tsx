import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import GradientButton from '../components/GradientButton';
import { colors } from '../theme/colors';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const router = useRouter();
  return (
    <ScrollView contentContainerStyle={s.c} style={{ backgroundColor: colors.background }}>
      <LinearGradient colors={colors.gradient} style={s.logo}><Text style={s.logoTxt}>A</Text></LinearGradient>
      <Text style={s.h1}>Welcome back</Text>
      <Text style={s.sub}>Sign in to continue your assessment</Text>
      <View style={s.field}><Ionicons name="mail-outline" size={18} color={colors.muted} /><TextInput style={s.input} placeholder="you@email.com" value={email} onChangeText={setEmail} placeholderTextColor={colors.muted} /></View>
      <View style={s.field}><Ionicons name="lock-closed-outline" size={18} color={colors.muted} /><TextInput style={s.input} placeholder="Password" secureTextEntry value={pass} onChangeText={setPass} placeholderTextColor={colors.muted} /></View>
      <GradientButton title="Sign In" onPress={() => router.replace('/dashboard')} style={{ marginTop: 16 }} />
      <TouchableOpacity onPress={() => router.push('/signup')}><Text style={s.foot}>Don't have an account? <Text style={{ color: colors.primary, fontWeight: '600' }}>Sign up</Text></Text></TouchableOpacity>
    </ScrollView>
  );
}
const s = StyleSheet.create({
  c: { padding: 24, paddingTop: 60, flexGrow: 1 },
  logo: { width: 56, height: 56, borderRadius: 16, alignItems: 'center', justifyContent: 'center', marginBottom: 24 },
  logoTxt: { color: '#fff', fontSize: 22, fontWeight: '700' },
  h1: { fontSize: 24, fontWeight: '700', color: colors.foreground },
  sub: { color: colors.muted, marginTop: 4, marginBottom: 24 },
  field: { flexDirection: 'row', alignItems: 'center', gap: 8, borderWidth: 1, borderColor: colors.border, borderRadius: 12, paddingHorizontal: 12, paddingVertical: 12, marginBottom: 12 },
  input: { flex: 1, color: colors.foreground, fontSize: 14 },
  foot: { textAlign: 'center', color: colors.muted, marginTop: 24, fontSize: 12 },
});
