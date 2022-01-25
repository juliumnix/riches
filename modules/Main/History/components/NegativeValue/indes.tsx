import React from 'react';
import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import * as S from './styles';

type NegativeValueProps = {
  value: string;
};

function ArrowSVG() {
  const svg = `
  <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.75 0.999996L9.75 21" stroke="#FF5D5D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M18.5 12.25L9.75 21L1 12.25" stroke="#FF5D5D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `;
  const Svg = () => <SvgXml xml={svg} width="20" height="20" />;
  return <Svg />;
}

const NegativeValue = ({ value }: NegativeValueProps) => {
  return (
    <S.Container>
      <S.Value>Rs: {value}</S.Value>
      <S.icon>
        <ArrowSVG />
      </S.icon>
    </S.Container>
  );
};

export default NegativeValue;
