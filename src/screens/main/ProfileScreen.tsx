// src/screens/main/ProfileScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { Colors } from '../../constants/colors';

const ProfileScreen = () => {
  const { user, logout } = useAuth();

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{user?.name?.charAt(0) || 'U'}</Text>
      </View>
      <Text style={styles.name}>{user?.name}</Text>
      <Text style={styles.email}>{user?.email}</Text>
      <TouchableOpacity style={styles.logoutButton} onPress={logout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background, alignItems: 'center', paddingTop: 60 },
  avatar: { width: 80, height: 80, borderRadius: 40, backgroundColor: Colors.primary, alignItems: 'center', justifyContent: 'center', marginBottom: 16 },
  avatarText: { fontSize: 36, color: Colors.primaryForeground, fontWeight: 'bold' },
  name: { fontSize: 24, fontWeight: '600', color: Colors.text, marginBottom: 4 },
  email: { fontSize: 16, color: Colors.textSecondary, marginBottom: 32 },
  logoutButton: { backgroundColor: Colors.destructive, paddingHorizontal: 24, paddingVertical: 12, borderRadius: 30 },
  logoutText: { color: '#fff', fontWeight: '600' },
});

export default ProfileScreen;