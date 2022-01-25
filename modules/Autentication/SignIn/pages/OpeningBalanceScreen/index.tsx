import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import * as S from './styles';
import { SvgXml } from 'react-native-svg';
import { useGoal } from '../../../../Main/hooks/goal';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AutenticationParamList } from '../../../routes/index.routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ip } from '../../../../../ip';
import api from '../../../../Main/utils/api';

type UserNameScreenProps = StackNavigationProp<
  AutenticationParamList,
  'OpeningBalanceScreen'
>;

export default function OpeningBalanceScreen() {
  //remover essa desgraça aqui
  const { handleGoalValue } = useGoal();
  const [balance, setBalance] = useState(0);
  const navigation = useNavigation<UserNameScreenProps>();
  let id = '';
  function ArrowSVG() {
    const svg = `
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 15L25 15" stroke="#018B3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16.25 6.25L25 15L16.25 23.75" stroke="#018B3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
`;
    const Svg = () => <SvgXml xml={svg} width="40" height="30" />;
    return <Svg />;
  }

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@riches:id_usuario');
      if (value !== null) {
        id = value;
      }
    } catch (e) {
      // error reading value
    }
  };

  async function updateBalance() {
    try {
      await getData();
      await api.put(`http://${ip}:3000/usuarios/saldo/` + id, {
        saldo: balance,
      });
      navigation.navigate('HomeApp');
    } catch (error) {}
  }

  return (
    <S.Container>
      <S.WrapperContent>
        <S.Title>Qual seu saldo inicial</S.Title>
        <S.ContainerMoney>
          <S.Money
            onChangeText={text => {
              setBalance(Number(text));
            }}
            placeholder="R$: 0,00"
          />
          <S.Line></S.Line>
        </S.ContainerMoney>
      </S.WrapperContent>
      <S.WrapperNextButton>
        <S.Next onPress={() => updateBalance()}>
          <ArrowSVG />
        </S.Next>
      </S.WrapperNextButton>
      <StatusBar style="auto" />
    </S.Container>
  );
}
