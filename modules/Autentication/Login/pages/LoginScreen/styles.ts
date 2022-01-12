import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #fafafa;
  padding-left: 10%;
  padding-top: 15%;
  padding-bottom: 15%;
  padding-right: 10%;
`;

export const Message = styled.View`
  margin-top: 70%;
  margin-bottom: 70%;
`;

export const LastLineMessage = styled.View`
  flex-direction: row;
`;

export const NormalText = styled.Text`
  font-size: 40px;
  color: #018b3c;
`;

export const BoldText = styled.Text`
  font-size: 40px;
  color: #018b3c;
  font-weight: bold;
  margin-left: 10px;
`;

export const WrapperInitButton = styled.View`
  align-items: center;
`;

export const InitButton = styled.TouchableOpacity`
  width: 200px;
  height: 50px;
  border-radius: 20px;
  background-color: #018b3c;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  font-size: 16px;
  color: #fafafa;
`;
