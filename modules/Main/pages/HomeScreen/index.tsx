import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as S from './styles';
import CardBalance from '../../Home/components/CardBalance';

export default function LoginScreen() {
  return (
    <S.Container>
      <CardBalance
        balance={99}
        currency={78}
        percentage={10}
        visibleLineBalance
      />
      <StatusBar style="auto" />
    </S.Container>
  );
}
