import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as S from './styles';
import { SvgXml } from 'react-native-svg';
import CardBalance from '../../../Home/components/CardBalance';
import { useGoal } from '../../../hooks/goal';
import TransactionsCard from '../../components/TransactionsCard';

function ArrowSVG() {
  const svg = `
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M25 15L5 15" stroke="#018B3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13.75 23.75L5 15L13.75 6.25" stroke="#018B3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>

    `;
  const Svg = () => <SvgXml xml={svg} width="32" height="32" />;
  return <Svg />;
}
export default function TransactionsScreen() {
  const { goalValue } = useGoal();
  return (
    <S.Container>
      <S.WrapperArrowSVG>
        <ArrowSVG />
      </S.WrapperArrowSVG>
      <S.WrapperCardBalance>
        <CardBalance
          balance={goalValue}
          currency={0}
          percentage={45}
          visibleLine={false}
        />
      </S.WrapperCardBalance>
      <S.TitleTransactions>Transações</S.TitleTransactions>
      <S.TransactionsCards>
        <S.WrapperTransactionsCard>
          <TransactionsCard value={300.0} positive={true} />
        </S.WrapperTransactionsCard>
        <S.WrapperTransactionsCard>
          <TransactionsCard value={300.0} positive={false} />
        </S.WrapperTransactionsCard>
      </S.TransactionsCards>
      <StatusBar style="auto" />
    </S.Container>
  );
}
