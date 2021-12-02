import { Text } from 'react-native';
import styled, { css } from 'styled-components/native';

type InfoValueProps = {
  isSafe: boolean;
};

export const Container = styled.ScrollView`
  flex: 1;
  padding-top: 15%;
  background-color: #fafafa;
  padding-right: 20px;
  padding-left: 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 60px;
`;

export const WrapperTitle = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.TextInput.attrs({
  placeholder: 'Nova meta',
  placeholderTextColor: '#1C1C1C',
  maxLength: 10,
})`
  font-size: 32px;
  color: #1c1c1c;
`;

export const WrapperDistance = styled.View`
  padding-bottom: 28px;
`;

export const WrapperGoalInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const WrapperInfoBlock = styled.View``;

export const InfoTitle = styled.Text`
  font-size: 18px;
  padding-bottom: 15px;
  font-weight: bold;
`;

export const InfoValue = styled(Text)<InfoValueProps>`
  ${({ isSafe }) => css`
    font-size: 16px;
    color: ${isSafe ? '#018B3C' : '#484848'};
  `}
`;

export const InsertButton = styled.TouchableOpacity`
  background-color: #b0b0b0;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 140px;
  border-radius: 20px;
`;

export const ImageGoal = styled.Image`
  width: 100%;
  height: 140px;
  border-radius: 20px;
`;

export const DescriptionInsertButton = styled.Text`
  color: #484848;
  font-size: 18px;
  padding-top: 13px;
  font-weight: bold;
`;

export const TextGoal = styled.Text`
  font-size: 18px;
  font-weight: bold;
  padding-bottom: 14px;
`;

export const WrapperGoal = styled.View`
  border-bottom-width: 1px;
  border-color: #018b3c;
`;

export const GoalTextInput = styled.TextInput.attrs({
  placeholder: 'R$ 1,00',
  keyboardType: 'numeric',
})`
  font-size: 18px;
`;

export const TitlePortion = styled.Text`
  font-size: 18px;
  font-weight: bold;
  padding-bottom: 18px;
`;

export const WrapperPortionSelector = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-bottom: 60px;
`;

export const PortionSelector = styled.View`
  border-width: 1px;
  height: 40px;
  width: 150px;
  border-radius: 20px;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  border-color: #018b3c;
`;

export const PortionValue = styled.Text`
  font-size: 18px;
`;

export const WrapperButtonConfirm = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
  padding-bottom: 20px;
`;

export const ButtonConfirm = styled.TouchableOpacity`
  width: 200px;
  height: 50px;
  background-color: #018b3c;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

export const TextButtonConfirm = styled.Text`
  font-size: 16px;
  color: #fafafa;
`;

export const TitlePage = styled.Text`
  font-size: 32px;
  color: #1c1c1c;
`;

export const WrapperPortionInfo = styled.View``;

export const WrapperPortionInfoTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  padding-bottom: 15px;
`;

export const WrapperPortionDiscount = styled.Text`
  font-size: 16px;
  padding-bottom: 13px;
`;

export const WrapperPortionValue = styled.Text`
  font-size: 16px;
`;

export const WrapperBalls = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 35px;
  padding-bottom: 50px;
`;
