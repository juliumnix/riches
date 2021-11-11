import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as S from './styles';
import CardBalance from '../../components/CardBalance';

export default function HomeScreen() {
  return (
    <S.Container>
      <CardBalance balance={99} currency={78} percentage={10} visibleLine />
      <StatusBar style="auto" />
    </S.Container>
  );
}
