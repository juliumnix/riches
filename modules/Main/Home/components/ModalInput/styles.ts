import styled from 'styled-components/native';

export const ModalContainer = styled.View`
  flex: 1;
  background: rgba(0, 0, 0, 0.6);
  justify-content: flex-end;
`;

export const CloseModal = styled.TouchableOpacity`
  height: 46%;
  width: 100%;
`;

export const Container = styled.View`
  height: 64%;
  width: 100%;
  background-color: #fafafa;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  padding-top: 18px;
  padding-left: 40px;
  padding-right: 40px;
`;

export const WrapperTitle = styled.View`
  align-items: center;
  margin-bottom: 5px;
`;

export const Title = styled.Text`
  font-size: 22px;
  color: #018b3c;
  margin-bottom: 10%;
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
  margin-bottom: 2%;
`;

export const WrapperNextButton = styled.View`
  padding-bottom: 10%;
`;

export const Next = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  align-self: flex-end;
  justify-content: flex-end;
  padding-right: 15%;
`;

export const Subtitle = styled.Text`
  font-size: 12px;
  color: #b0b0b0;
  margin-bottom: 65%;
`;
