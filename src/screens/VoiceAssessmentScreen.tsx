import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import BottomNav from '../components/BottomNav';
import { colors } from '../theme/colors';

export default function VoiceAssessmentScreen() {
  const router = useRouter();
  const pulse = useRef(new Animated.Value(1)).current;
  const [recording, setRecording] = useState(true);
  useEffect(() => {
    const loop = Animated.loop(Animated.sequence([
      Animated.timing(pulse, { toValue: 1.3, duration: 900, useNativeDriver: true }),
      Animated.timing(pulse, { toValue: 1, duration: 900, useNativeDriver: true }),
    ]));
    if (recording) loop.start();
    return () => loop.stop();
  }, [recording, pulse]);
  const heights = [18, 32, 24, 40, 28, 44, 20, 36, 30, 42, 22, 38, 26, 34, 20, 30, 24, 18];
  return (
    <View style={{ flex: 1, backgroundColor: colors.background, padding: 20, paddingTop: 50 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        <TouchableOpacity onPress={() => router.back()} style={s.back}><Ionicons name="chevron-back" size={20} color={colors.foreground} /></TouchableOpacity>
        <Text style={{ fontSize: 16, fontWeight: '700', color: colors.foreground }}>Voice Assessment</Text>
      </View>
      <View style={s.prompt}>
        <Text style={{ fontSize: 11, fontWeight: '700', color: colors.primary }}>PROMPT 2 OF 5</Text>
        <Text style={{ marginTop: 8, fontSize: 14, color: colors.foreground, fontWeight: '500', lineHeight: 22 }}>"Describe your morning routine in as much detail as you can."</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 11, fontWeight: '700', color: colors.muted, letterSpacing: 1 }}>RECORDING</Text>
        <Text style={{ fontSize: 32, fontWeight: '700', color: colors.foreground, marginTop: 4 }}>00:42</Text>
        <View style={{ width: 160, height: 160, alignItems: 'center', justifyContent: 'center', marginVertical: 24 }}>
          <Animated.View style={[s.pulse, { transform: [{ scale: pulse }] }]} />
          <TouchableOpacity onPress={() => setRecording(r => !r)}>
            <LinearGradient colors={colors.gradient} style={s.mic}><Ionicons name={recording ? 'pause' : 'mic'} size={32} color="#fff" /></LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end', gap: 4, height: 50 }}>
          {heights.map((h, i) => <View key={i} style={{ width: 4, height: h, borderRadius: 2, backgroundColor: colors.primary }} />)}
        </View>
      </View>
      <View style={{ flexDirection: 'row', gap: 10, marginBottom: 90 }}>
        <TouchableOpacity style={[s.btn, { borderWidth: 1, borderColor: colors.border, flexDirection: 'row', justifyContent: 'center', gap: 6 }]}><Ionicons name="play" size={16} color={colors.foreground} /><Text style={{ fontWeight: '600', color: colors.foreground }}>Replay</Text></TouchableOpacity>
        <TouchableOpacity style={{ flex: 1 }} onPress={() => router.push('/reports')}>
          <LinearGradient colors={colors.gradient} style={s.btn}><Text style={{ fontWeight: '600', color: '#fff', textAlign: 'center' }}>Submit</Text></LinearGradient>
        </TouchableOpacity>
      </View>
      <BottomNav active="mic" />
    </View>
  );
}
const s = StyleSheet.create({
  back: { width: 36, height: 36, borderRadius: 12, borderWidth: 1, borderColor: colors.border, alignItems: 'center', justifyContent: 'center' },
  prompt: { marginTop: 20, padding: 16, borderRadius: 16, backgroundColor: '#EEF2FF', borderWidth: 1, borderColor: colors.border },
  pulse: { position: 'absolute', width: 160, height: 160, borderRadius: 80, backgroundColor: 'rgba(79,70,229,0.15)' },
  mic: { width: 80, height: 80, borderRadius: 40, alignItems: 'center', justifyContent: 'center' },
  btn: { flex: 1, paddingVertical: 14, borderRadius: 14, alignItems: 'center' },
});
