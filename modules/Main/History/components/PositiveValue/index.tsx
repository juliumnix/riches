import React from 'react';
import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import * as S from './styles';

type PosiviteValueProps = {
  value: string;
};

function ArrowSVG() {
  const svg = `
  <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.75 21V1" stroke="#018B3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M1 9.75L9.75 1L18.5 9.75" stroke="#018B3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
    `;
  const Svg = () => <SvgXml xml={svg} width="20" height="20" />;
  return <Svg />;
}

const PositiveValue = ({ value }: PosiviteValueProps) => {
  return (
    <S.Container>
      <S.Value>R$: {value}</S.Value>

      <S.icon>
        <ArrowSVG />
      </S.icon>
    </S.Container>
  );
};

export default PositiveValue;
