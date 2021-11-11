import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as S from './styles';

export default function OpeningBalanceScreen() {
  return (
    <S.Container>
      <S.Title>Qual seu saldo inicial</S.Title>
      <S.ContainerMoney>
        <S.Money>R$ 0,00</S.Money>
        <S.Line></S.Line>
      </S.ContainerMoney>
      <S.Next>
        <S.Arrow>➡</S.Arrow>
      </S.Next>
      <StatusBar style="auto" />
    </S.Container>
  );
}
