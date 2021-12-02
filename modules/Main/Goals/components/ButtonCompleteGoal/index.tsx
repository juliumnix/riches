import React, { useState } from 'react';
import { View } from 'react-native';

import * as S from './styles';

type ButtonCompleteGoalProps = {
  check: boolean;
  value: number;
  onPress: (item) => void;
};
const ButtonCompleteGoal = ({
  check,
  onPress,
  value,
}: ButtonCompleteGoalProps) => {
  const [checked, setChecked] = useState(false);

  function switchCheckedState() {
    setChecked(!checked);
  }
  return (
    <View style={{ paddingBottom: 10 }}>
      <S.Container onPress={onPress} isChecked={check}>
        <S.Value isChecked={check}>{value}</S.Value>
      </S.Container>
    </View>
  );
};

export default ButtonCompleteGoal;
