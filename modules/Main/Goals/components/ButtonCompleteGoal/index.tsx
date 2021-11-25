import React from 'react';
import { View } from 'react-native';

import * as S from './styles';

const ButtonCompleteGoal = () => {
  return (
    <S.Container isChecked={true}>
      <S.Value>1</S.Value>
    </S.Container>
  );
};

export default ButtonCompleteGoal;
