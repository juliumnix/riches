import { Text } from 'react-native';
import styled, { css } from 'styled-components/native';

export const ModalContainer = styled.View`
  flex: 1;
  background: rgba(0, 0, 0, 0.6);
  justify-content: flex-end;
`;

export const CloseModal = styled.TouchableOpacity`
  height: 46%;
  width: 100%;
`;

export const Container = styled.View`
  flex: auto;
  height: 54%;
  width: 100%;
  background-color: #fafafa;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  padding-top: 18px;
  padding-left: 40px;
  padding-right: 40px;
`;

export const WrapperTitle = styled.View`
  align-items: center;
  margin-bottom: 5px;
`;

export const Title = styled.Text`
  font-size: 22px;
  color: #018b3c;
`;

export const TitleInputField = styled.Text`
  font-size: 16px;
  color: #484848;
  margin-bottom: 12px;
`;

export const InfoLoginInput = styled.TextInput`
  font-size: 14px;
  color: #b0b0b0;
`;

export const InputBottomBar = styled.View`
  width: 100%;
  height: 1px;
  background-color: #018b3c;
`;

type ErrorTextProps = {
  isActive: boolean;
};

export const ErrorText = styled(Text)<ErrorTextProps>`
  ${({ isActive }) => css`
    margin-top: 2px;
    font-size: 12px;
    color: #ff5e5e;
    opacity: ${isActive ? 1 : 0};
  `}
`;

export const ContainerInput = styled.View`
  width: 100%;
  margin-top: 32px;
`;

export const ContainerInputs = styled.View`
  margin-bottom: 50px;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  justify-content: flex-end;
`;

export const CreateAccountButtom = styled.TouchableOpacity`
  width: 100px;
`;

export const CreateAccountText = styled.Text`
  font-size: 14px;
  color: #484848;
`;

export const CreateAccountBottomBar = styled.View`
  width: 100%;
  height: 1px;
  background-color: #484848;
`;

export const NextButton = styled.TouchableOpacity``;
