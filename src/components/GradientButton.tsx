import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../theme/colors';

export default function GradientButton({ title, onPress, style }: { title: string; onPress?: () => void; style?: ViewStyle }) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.85} style={style}>
      <LinearGradient colors={colors.gradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.btn}>
        <Text style={styles.txt}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  btn: { paddingVertical: 14, borderRadius: 14, alignItems: 'center' },
  txt: { color: '#fff', fontWeight: '600', fontSize: 15 },
});
