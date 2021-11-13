import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as S from './styles';
import { SvgXml } from 'react-native-svg';

export default function OpeningBalanceScreen() {
  function ArrowSVG() {
    const svg = `
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 15L25 15" stroke="#018B3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16.25 6.25L25 15L16.25 23.75" stroke="#018B3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
`;
    const Svg = () => <SvgXml xml={svg} width="20" height="15" />;
    return <Svg />;
  }

  return (
    <S.Container>
      <S.Title>Qual seu saldo inicial</S.Title>
      <S.ContainerMoney>
        <S.Money>R$ 0,00</S.Money>
        <S.Line></S.Line>
      </S.ContainerMoney>
      <S.Next>
        <ArrowSVG />
      </S.Next>
      <StatusBar style="auto" />
    </S.Container>
  );
}
