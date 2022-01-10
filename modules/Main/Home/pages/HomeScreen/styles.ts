import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fafafa;
  padding-left: 20px;
  padding-top: 15%;
  padding-right: 20px;
`;

export const CenterLabel = styled.Text`
  color: #ff69ff;
`;

export const WrapperTitle = styled.View`
  margin-bottom: 23px;
`;

export const WrapperFirstLine = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const WrapperHelloName = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Name = styled.Text`
  margin-left: 14px;
  font-size: 32px;
`;

export const Welcome = styled.Text`
  font-size: 26px;
`;

export const WrapperCardBalance = styled.View`
  align-items: center;
  justify-content: flex-start;
  padding-right: 15px;
  padding-left: 15px;
`;

export const ButtonsBalance = styled.View`
  margin-top: 7%;
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonBalance = styled.TouchableOpacity`
  width: 150px;
  height: 50px;
  border-radius: 20px;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
`;

export const TitleButtonBalanceUp = styled.Text`
  font-size: 16px;
  color: #018b3c;
`;

export const TitleButtonBalanceDown = styled.Text`
  font-size: 16px;
  color: #ff5d5d;
`;

export const GoalsHeader = styled.View`
  margin-top: 7%;
`;

export const GoalsHeaderFirstLine = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const GoalTitle = styled.Text`
  font-size: 26px;
  color: #000000;
  font-weight: bold;
`;

export const GoalsSeeAll = styled.Text`
  font-size: 16px;
  color: #6c6c6c;
  font-weight: 300;
`;

export const GoalsSubtitle = styled.Text`
  margin-top: 2%;
  font-size: 18px;
  color: #000000;
`;

export const Goals = styled.View`
  margin-top: 2%;
  flex: 1;
`;

export const WrapperWithoutGoals = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const WithoutGoalsText = styled.Text`
  font-size: 18px;
  color: #b0b0b0;
  margin-top: 2%;
`;

export const ListGoals = styled.FlatList`
  flex: 1;
`;
