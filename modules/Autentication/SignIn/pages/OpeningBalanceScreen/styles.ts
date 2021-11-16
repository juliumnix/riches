import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fafafa;
`;

export const WrapperContent = styled.View`
  flex: 1;
  justify-content: center;
`;

export const WrapperNextButton = styled.View`
  padding-bottom: 10%;
`;

export const Title = styled.Text`
  color: #1c1c1c;
  font-size: 24px;
  text-align: center;
  padding-bottom: 10%;
`;

export const Money = styled.TextInput`
  font-size: 40px;
  color: #484848;
`;

export const Line = styled.View`
  width: 100%;
  height: 1px;
  background-color: #018b3c;
`;

export const ContainerMoney = styled.View`
  height: 47px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Next = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  align-self: flex-end;
  justify-content: flex-end;
  padding-right: 15%;
`;
