import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { SvgXml } from 'react-native-svg';

import * as S from './styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeStackParamList } from '../../routes/index.routes';

type CardComponentProps = StackNavigationProp<
  HomeStackParamList,
  'HistoryPage'
>;

type CardBalanceProps = {
  balance: number;
  currency: number;
  percentage: number;
  visibleLine?: boolean;
};

function ArrowUpSVG() {
  const svg = `
    <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.00057 14.9732H19.0006C19.1828 14.9727 19.3615 14.9224 19.5173 14.8279C19.673 14.7333 19.8001 14.5981 19.8848 14.4367C19.9694 14.2753 20.0085 14.0939 19.9977 13.912C19.9869 13.73 19.9267 13.5545 19.8236 13.4042L10.8236 0.40425C10.4506 -0.13475 9.55257 -0.13475 9.17857 0.40425L0.178574 13.4042C0.0743986 13.5542 0.0133079 13.7298 0.00193892 13.912C-0.00943004 14.0943 0.0293576 14.2761 0.114088 14.4379C0.198818 14.5996 0.32625 14.735 0.482538 14.8294C0.638826 14.9238 0.817994 14.9735 1.00057 14.9732Z" fill="#018B3C"/>
    </svg>
`;
  const Svg = () => <SvgXml xml={svg} width="20" height="15" />;
  return <Svg />;
}

export default function CardBalance({
  balance,
  currency,
  percentage,
  visibleLine,
}: CardBalanceProps) {
  const navigation = useNavigation<CardComponentProps>();

  function navigateToTransactions() {
    navigation.navigate('HistoryPage');
  }

  return (
    <S.Wrapper onPress={navigateToTransactions}>
      <LinearGradient
        colors={
          balance == 0
            ? ['#484848', '#B0B0B0']
            : balance > 0
            ? ['#1A9949', '#B6E2C6']
            : ['#FF7B7B', '#FFC6C6']
        }
        style={{ flex: 1, borderRadius: 20 }}
      >
        <S.Container>
          <S.Title>Saldo total:</S.Title>
          {visibleLine ? (
            <S.WrapperVisibleLineBalance>
              <S.AllMoney>R$:</S.AllMoney>
              <S.LineBalance />
            </S.WrapperVisibleLineBalance>
          ) : (
            <S.AllMoney>R$: {balance}</S.AllMoney>
          )}

          <S.Title>Hoje:</S.Title>

          {visibleLine ? (
            <S.WrapperVisibleLineCurrency>
              <S.TodaysMoney>R$:</S.TodaysMoney>
              <S.LineCurrency></S.LineCurrency>
              <S.Percentage>🤫</S.Percentage>
            </S.WrapperVisibleLineCurrency>
          ) : (
            <S.WrapperVisibleLineCurrency>
              <S.TodaysMoney>R$: {currency}</S.TodaysMoney>
              <S.wrapperPercentage>
                {/* <ArrowUpSVG />
                <S.Percentage>{percentage}%</S.Percentage> */}
              </S.wrapperPercentage>
            </S.WrapperVisibleLineCurrency>
          )}
        </S.Container>
      </LinearGradient>
    </S.Wrapper>
  );
}
