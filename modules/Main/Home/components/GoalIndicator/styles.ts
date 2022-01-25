import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  padding: 15px;
  border-radius: 25px;
  background-color: #fff;
`;

export const ImageGoal = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 10px;
`;

export const WrapperContent = styled.View`
  padding-left: 10px;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 500;
`;

export const GoalValue = styled.Text`
  color: #b0b0b0;
  font-size: 18px;
  padding-right: 10px;
`;

export const GoalAccomplished = styled.Text`
  font-size: 18px;
  padding-left: 10px;
`;

export const WrapperGoal = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
