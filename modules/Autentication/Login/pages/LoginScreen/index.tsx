import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as S from './styles';

export default function LoginScreen() {
  return (
    <S.Container>
      <S.CenterLabel>
        Open up App.tsx to start working on your app!
      </S.CenterLabel>
      <StatusBar style="auto" />
    </S.Container>
  );
}
