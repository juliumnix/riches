import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Wrapper = styled.TouchableOpacity``;

export const Container = styled(LinearGradient).attrs({
  colors: ['#1A9949', '#B6E2C6'],
})`
  min-width: 110%;
  height: 182px;
  border-radius: 20px;
  padding-top: 23px;
  padding-left: 23px;
  padding-right: 23px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #fafafa;
  margin-bottom: 10px;
`;

export const AllMoney = styled.Text`
  font-size: 34px;
  color: #fafafa;
  margin-bottom: 10px;
`;

export const WrapperVisibleLineCurrency = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LineCurrency = styled.View`
  background-color: #fafafa;
  width: 75%;
  height: 3px;
  border-radius: 3px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const TodaysMoney = styled.Text`
  font-size: 20px;
  color: #fafafa;
`;

export const Percentage = styled.Text`
  font-size: 12px;
  color: #018b3c;
  margin-left: 8px;
`;

export const WrapperVisibleLineBalance = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 1px;
`;

export const LineBalance = styled.View`
  background-color: #fafafa;
  width: 80%;
  height: 5px;
  border-radius: 5px;
  margin-left: 10px;
`;

export const wrapperPercentage = styled.View`
  flex-direction: row;
`;
