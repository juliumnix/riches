import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as S from './styles';

export default function App() {
  return (
    <S.Container>
      <S.CenterLabel>
        Open up App.tsx to start working on your app!
      </S.CenterLabel>
      <StatusBar style="auto" />
    </S.Container>
  );
}
