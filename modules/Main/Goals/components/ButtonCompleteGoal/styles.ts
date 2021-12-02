import { Text, TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

type ButtonProps = {
  isChecked: boolean;
};

export const WrapperButton = styled.View`
  padding-left: 10px;
`;

export const Container = styled(TouchableOpacity)<ButtonProps>`
  ${({ isChecked }) => css`
    background-color: ${isChecked ? '#018B3C' : '#fff'};
    width: 50px;
    height: 50px;
    border-radius: 25px;
    justify-content: center;
    align-items: center;
  `}
`;

export const Value = styled(Text)<ButtonProps>`
  ${({ isChecked }) => css`
    font-size: 18px;
    color: ${isChecked ? '#fff' : '#000'};
  `}
`;
