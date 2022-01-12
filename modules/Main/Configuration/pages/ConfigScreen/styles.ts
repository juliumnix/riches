import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fafafa;
  padding-top: 15%;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: #1c1c1c;
`;

export const Buttons = styled.View`
  margin-top: 25px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
  width: 150px;
  height: 150px;
  background-color: #ffffff;
  border-radius: 20px;
  justify-content: space-between;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 20px;
  padding-bottom: 15px;
`;

export const ButtonIcon = styled.View``;

export const ButtonTitle = styled.Text`
  font-size: 18px;
  color: #484848;
`;
