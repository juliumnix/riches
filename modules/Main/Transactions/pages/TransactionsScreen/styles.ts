import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fafafa;
  padding-left: 20px;
  padding-top: 15%;
  padding-right: 20px;
`;

export const WrapperArrowSVG = styled.TouchableOpacity`
  margin-top: 5%;
  margin-left: 5%;
  margin-bottom: 5%;
`;

export const WrapperCardBalance = styled.View`
  align-items: center;
  justify-content: flex-start;
  padding-right: 15px;
  padding-left: 15px;
`;

export const TitleTransactions = styled.Text`
  font-size: 26px;
  color: #000000;
  margin-top: 5%;
  margin-bottom: 5%;
`;

export const TransactionsCards = styled.View`
  flex: 1;
  align-items: center;
`;

export const WrapperTransactionsCard = styled.View`
  width: 340px;
  height: 72px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 20px;
`;
