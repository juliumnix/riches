import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as S from './styles';
import { SvgXml } from 'react-native-svg';
import { useGoal } from '../../../../Main/hooks/goal';

export default function OpeningBalanceScreen() {
  //remover essa desgraça aqui
  const { handleGoalValue } = useGoal();
  function ArrowSVG() {
    const svg = `
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 15L25 15" stroke="#018B3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16.25 6.25L25 15L16.25 23.75" stroke="#018B3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
`;
    const Svg = () => <SvgXml xml={svg} width="40" height="30" />;
    return <Svg />;
  }

  return (
    <S.Container>
      <S.WrapperContent>
        <S.Title>Qual seu saldo inicial</S.Title>
        <S.ContainerMoney>
          <S.Money
            onChangeText={text => {
              handleGoalValue(Number(text));
            }}
            placeholder="R$: 0,00"
          />
          <S.Line></S.Line>
        </S.ContainerMoney>
      </S.WrapperContent>
      <S.WrapperNextButton>
        <S.Next>
          <ArrowSVG />
        </S.Next>
      </S.WrapperNextButton>
      <StatusBar style="auto" />
    </S.Container>
  );
}
