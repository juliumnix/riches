import React from 'react';
import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import * as S from './styles';

function MiniPlusSVG() {
  const svg = `
  <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.0869 6L1.11769 6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6.35422 10.6665L1.11769 5.99984L6.35422 1.33317" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;
  const Svg = () => <SvgXml xml={svg} width="15" height="15" />;
  return <Svg />;
}

type GoalIndicatorProps = {
  url: string;
  titulo: string;
  meta: number;
  realizado: string;
};

const GoalIndicator = ({
  url,
  titulo,
  meta,
  realizado,
}: GoalIndicatorProps) => {
  return (
    <S.Container>
      <S.ImageGoal
        source={{
          uri: url,
        }}
      />
      <S.WrapperContent>
        <S.Title>{titulo}</S.Title>
        <S.WrapperGoal>
          <S.GoalValue>R$: {meta}</S.GoalValue>
          <MiniPlusSVG />
          <S.GoalAccomplished>
            R$: {realizado == null ? 0 : realizado}
          </S.GoalAccomplished>
        </S.WrapperGoal>
      </S.WrapperContent>
    </S.Container>
  );
};

export default GoalIndicator;
