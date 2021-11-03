import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Wrapper = styled.TouchableOpacity``;

export const Container = styled(LinearGradient).attrs({
  colors: ['#1A9949', '#B6E2C6'],
})`
  width: 340px;
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
  font-size: 36px;
  color: #fafafa;
  margin-bottom: 10px;
`;

export const Align = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export const TodaysMoney = styled.Text`
  font-size: 20px;
  color: #fafafa;
  margin-bottom: 10px;
`;

export const Percentage = styled.Text`
  margin-top: 3px;
  font-size: 12px;
  color: #018b3c;
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
