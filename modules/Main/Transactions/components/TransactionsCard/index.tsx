import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { SvgXml } from 'react-native-svg';

import * as S from './styles';

type CardBalanceProps = {
  value: number;
  positive: boolean;
};

function ArrowUpSVG() {
  const svg = `
  <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.75 21V1" stroke="#018B3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M1 9.75L9.75 1L18.5 9.75" stroke="#018B3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;
  const Svg = () => <SvgXml xml={svg} width="26" height="19.5" />;
  return <Svg />;
}

function ArrowDownSVG() {
  const svg = `
  <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.75 0.999996L9.75 21" stroke="#FF5D5D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M18.5 12.25L9.75 21L1 12.25" stroke="#FF5D5D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;
  const Svg = () => <SvgXml xml={svg} width="26" height="19.5" />;
  return <Svg />;
}

export default function TransactionsCard({
  value,
  positive,
}: CardBalanceProps) {
  return (
    <LinearGradient
      colors={positive ? ['#1A9949', '#B6E2C6'] : ['#FF7B7B', '#FFC6C6']}
      style={{ flex: 1, borderRadius: 20 }}
    >
      <S.Container>
        <S.MoneyContainer>
          <S.Money>R$:</S.Money>
          <S.Money>{value}</S.Money>
        </S.MoneyContainer>
        {positive ? <ArrowUpSVG /> : <ArrowDownSVG />}
      </S.Container>
    </LinearGradient>
  );
}
