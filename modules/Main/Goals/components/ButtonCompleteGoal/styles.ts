import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

type ButtonProps = {
  isChecked: boolean;
};

export const Container = styled(TouchableOpacity)<ButtonProps>`
  ${({ isChecked }) => css`
    background-color: red;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    justify-content: center;
    align-items: center;
  `}
`;

export const Value = styled.Text`
  font-size: 18px;
`;
