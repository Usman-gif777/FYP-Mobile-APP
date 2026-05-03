import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { colors } from '../theme/colors';

type Active = 'home' | 'list' | 'mic' | 'report';

const items: { id: Active; icon: keyof typeof Ionicons.glyphMap; label: string; route: string }[] = [
  { id: 'home', icon: 'home-outline', label: 'Home', route: '/dashboard' },
  { id: 'list', icon: 'list-outline', label: 'Tests', route: '/assessments' },
  { id: 'mic', icon: 'mic-outline', label: 'Voice', route: '/voice' },
  { id: 'report', icon: 'bar-chart-outline', label: 'Reports', route: '/reports' },
];

export default function BottomNav({ active }: { active: Active }) {
  const router = useRouter();
  return (
    <View style={styles.bar}>
      {items.map((it) => {
        const isActive = it.id === active;
        return (
          <TouchableOpacity key={it.id} style={styles.item} onPress={() => router.push(it.route as any)}>
            {isActive ? (
              <LinearGradient colors={colors.gradient} style={styles.iconWrap}>
                <Ionicons name={it.icon} size={18} color="#fff" />
              </LinearGradient>
            ) : (
              <View style={styles.iconWrap}>
                <Ionicons name={it.icon} size={18} color={colors.muted} />
              </View>
            )}
            <Text style={[styles.label, { color: isActive ? colors.primary : colors.muted }]}>{it.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    position: 'absolute', bottom: 0, left: 0, right: 0,
    flexDirection: 'row', justifyContent: 'space-around',
    backgroundColor: colors.card, borderTopWidth: 1, borderTopColor: colors.border,
    paddingVertical: 8, paddingBottom: 18,
  },
  item: { alignItems: 'center', paddingHorizontal: 12 },
  iconWrap: { padding: 6, borderRadius: 12 },
  label: { fontSize: 10, marginTop: 2, fontWeight: '500' },
});
