import React from 'react';
import { Text, View } from 'react-native';

import * as S from './styles';

type CardBalanceProps = {
  balance: number;
  currency: number;
  percentage: number;
  visibleLineBalance?: boolean;
};

export default function CardBalance({
  balance,
  currency,
  percentage,
  visibleLineBalance,
}: CardBalanceProps) {
  function navigateToTransactions() {
    console.log('navigate to transactions');
  }

  return (
    <S.Wrapper onPress={navigateToTransactions}>
      <S.Container>
        <S.Title>Saldo total:</S.Title>
        {visibleLineBalance ? (
          <S.WrapperVisibleLineBalance>
            <S.AllMoney>R$:</S.AllMoney>
            <S.LineBalance />
          </S.WrapperVisibleLineBalance>
        ) : (
          <S.AllMoney>R$: {balance}</S.AllMoney>
        )}

        <S.Title>Hoje:</S.Title>
        <S.Align>
          <S.TodaysMoney>R$: {currency}</S.TodaysMoney>
          <S.Percentage>{percentage}%</S.Percentage>
        </S.Align>
      </S.Container>
    </S.Wrapper>
  );
}
