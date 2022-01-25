import React, { useEffect, useState } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as S from './styles';
import { ip } from '../../../ip';
import api from '../utils/api';
import CardBalance from '../Home/components/CardBalance';
import PositiveValue from './components/PositiveValue';
import NegativeValue from './components/NegativeValue/indes';
import { SvgXml } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

type historyDataProps = {
  id_movimentacao: number;
  valor: string;
  entrada: boolean;
  saida: boolean;
};

function ArrowSVG() {
  const svg = ` 
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M25 15L5 15" stroke="#018B3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13.75 23.75L5 15L13.75 6.25" stroke="#018B3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
    `;
  const Svg = () => <SvgXml xml={svg} width="30" height="30" />;
  return <Svg />;
}

const History = () => {
  const navigation = useNavigation();
  const [balance, setBalance] = useState(0);
  const [historyData, setHistoryData] = useState<historyDataProps[]>([]);

  useEffect(() => {
    getInfoFromDatabase();
    getHistory();
  }, []);

  async function getInfoFromDatabase() {
    try {
      const value = await AsyncStorage.getItem('@riches:id_usuario');
      const result = await api.get(`http://${ip}:3000/usuarios/${value}`);
      setBalance(Number(result.data.saldo));
    } catch (error) {
      // console.log(error);
    }
  }

  async function getHistory() {
    try {
      const value = await AsyncStorage.getItem('@riches:id_usuario');
      const result = await api.get(`http://${ip}:3000/saldo/${value}`);
      setHistoryData(result.data);
    } catch (error) {}
  }
  return (
    <S.Container>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <>
            <S.Header>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <ArrowSVG />
              </TouchableOpacity>
            </S.Header>
            <S.WrapperCardBalance>
              <CardBalance
                balance={balance}
                currency={balance}
                percentage={0}
                visibleLine={false}
              />
            </S.WrapperCardBalance>
            <S.Subtitle>Transações</S.Subtitle>
          </>
        )}
        data={historyData}
        keyExtractor={item => String(item.id_movimentacao)}
        renderItem={({ item }) => (
          <View style={{ paddingBottom: 22 }}>
            {item.entrada ? (
              <PositiveValue value={item.valor} />
            ) : (
              <NegativeValue value={item.valor} />
            )}
          </View>
        )}
      />
    </S.Container>
  );
};

export default History;
