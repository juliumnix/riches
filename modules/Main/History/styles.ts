import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fafafa;
  padding-top: 15%;
  padding-right: 20px;
  padding-left: 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 30px;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: #1c1c1c;
`;

export const WrapperCardBalance = styled.View`
  align-items: center;
  justify-content: flex-start;
  padding-right: 15px;
  padding-left: 15px;
`;

export const Subtitle = styled.Text`
  padding-top: 26px;
  padding-bottom: 26px;
  font-size: 26px;
  font-weight: 500;
  color: #1c1c1c;
`;
