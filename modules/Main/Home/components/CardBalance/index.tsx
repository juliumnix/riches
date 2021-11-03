import React from 'react';
import { Text, View } from 'react-native';

import * as S from './styles';

type CardBalanceProps = {
  balance: number;
  currency: number;
  percentage: number;
  visibleLine?: boolean;
};

export default function CardBalance({
  balance,
  currency,
  percentage,
  visibleLine,
}: CardBalanceProps) {
  function navigateToTransactions() {
    console.log('navigate to transactions');
  }

  return (
    <S.Wrapper onPress={navigateToTransactions}>
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
            <S.Percentage>{percentage}%</S.Percentage>
          </S.WrapperVisibleLineCurrency>
        )}
      </S.Container>
    </S.Wrapper>
  );
}
