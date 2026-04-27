// src/navigation/AppNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useAuth } from '../context/AuthContext';
import { Colors } from '../constants/colors';

// Auth Screens
import LoginScreen from '../screens/auth/LoginScreen';
import SignupScreen from '../screens/auth/SignupScreen';

// Main App Screens
import DashboardScreen from '../screens/main/DashboardScreen';
import AssessmentsScreen from '../screens/main/AssessmentsScreen';
import ReportsScreen from '../screens/main/ReportsScreen';
import ProfileScreen from '../screens/main/ProfileScreen';

// Icons (you need to install lucide-react-native or use a different icon set)
// For simplicity we use emoji/text, but in real project use a proper icon library
const TabBarIcon = ({ name, color, size }: { name: string; color: string; size: number }) => {
  const emoji = {
    Dashboard: '🏠',
    Assessments: '📋',
    Reports: '📊',
    Profile: '👤',
  }[name] || '●';
  return <Text style={{ fontSize: size, color }}>{emoji}</Text>;
};

import { Text } from 'react-native';

export type RootStackParamList = {
  Auth: undefined;
  MainTabs: undefined;
  OptionAssessment: { assessmentId: string };
  VoiceAssessment: { assessmentId: string; attemptId: string };
};

export type MainTabParamList = {
  Dashboard: undefined;
  Assessments: undefined;
  Reports: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = '';
          if (route.name === 'Dashboard') iconName = 'Dashboard';
          else if (route.name === 'Assessments') iconName = 'Assessments';
          else if (route.name === 'Reports') iconName = 'Reports';
          else if (route.name === 'Profile') iconName = 'Profile';
          return <TabBarIcon name={iconName} color={color} size={size} />;
        },
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.textSecondary,
        tabBarStyle: {
          backgroundColor: Colors.card,
          borderTopColor: Colors.border,
          height: 60,
          paddingBottom: 8,
        },
        headerStyle: {
          backgroundColor: Colors.background,
        },
        headerTitleStyle: {
          color: Colors.text,
          fontFamily: 'DM Serif Display', // you'll need to load custom fonts later
        },
      })}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Assessments" component={AssessmentsScreen} />
      <Tab.Screen name="Reports" component={ReportsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  const { isLoggedIn, isLoading } = useAuth();

  if (isLoading) {
    // You can show a splash screen here
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isLoggedIn ? (
          <Stack.Screen name="Auth" component={AuthStack} />
        ) : (
          <>
            <Stack.Screen name="MainTabs" component={MainTabs} />
            {/* Later we'll add assessment player screens */}
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}