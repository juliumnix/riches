import React from 'react';
import { Text } from 'react-native';

import * as S from './styles';

export default function CardBalance() {
  return (
    <S.Container>
      <S.Title>Saldo total:</S.Title>
      <S.AllMoney>R$: 99999999,99</S.AllMoney>
      <S.Title>Hoje:</S.Title>
      <S.Align>
        <S.TodaysMoney>R$: 99999999,99</S.TodaysMoney>
        <S.Percentage>300%</S.Percentage>
      </S.Align>
    </S.Container>
  );
}
