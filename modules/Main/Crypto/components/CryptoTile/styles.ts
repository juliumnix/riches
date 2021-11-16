import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  padding: 20px;
  border-radius: 25px;
  flex-direction: row;
  background-color: white;
  margin-bottom: 10px;
`;

export const Image = styled.Image`
  width: 61px;
  height: 61px;
  border-radius: 10px;
`;

export const WrapperContent = styled.View`
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
  justify-content: space-between;
`;

export const TitleCard = styled.Text`
  font-size: 16px;
`;

export const SubTitleCard = styled.Text`
  color: #cdcdcd;
  font-size: 16px;
`;

export const GreenValue = styled.Text`
  color: #018b3c;
  font-size: 16px;
`;

export const RedValue = styled.Text`
  color: #ff5d5d;
  font-size: 16px;
`;

export const Separator = styled.View`
  height: 5px;
`;
