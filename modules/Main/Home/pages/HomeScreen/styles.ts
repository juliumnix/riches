import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  padding-left: 42px;
  padding-right: 42px;
`;

export const CenterLabel = styled.Text`
  color: #ff69ff;
`;

export const WrapperTitle = styled.View`
  margin-top: 73px;
  /* padding-left: 42px;
  padding-right: 42px; */
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
`;
