import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { Animated, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { useGoal } from '../../../hooks/goal';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../routes/index.routes';
import { StatusBar } from 'expo-status-bar';
import { SharedElement } from 'react-navigation-shared-element';
import ButtonCompleteGoal from '../../components/ButtonCompleteGoal';
import * as S from './styles';
import api from '../../../utils/api';
import { ip } from '../../../../../ip';

type homeScreenProp = StackNavigationProp<RootStackParamList, 'EditGoal'>;

type BallsProps = {
  id: number;
  isChecked: boolean;
};
let testeNumero = 0;
const EditGoal = () => {
  const { getGoalName, getGoalFinalValue, getImage, getPortion, getIdGoal } =
    useGoal();
  const navigation = useNavigation<homeScreenProp>();
  const [goalName, setGoalName] = useState('');
  const [portion, setPortion] = useState(0);
  const [image, setImage] = useState('');
  const [visibleModal, setVisibleModal] = useState(false);
  const [goalValue, setGoalValue] = useState(0);
  const [array, setArray] = useState<BallsProps[]>([]);
  const [saveValue, setSaveValue] = useState(0);
  const [totalResult, setTotalResult] = useState(
    getGoalFinalValue() - saveValue,
  );
  const [portionValue, setPortionValue] = useState<number>(
    Number((getGoalFinalValue() / getPortion()).toFixed(2)),
  );

  useEffect(() => {
    getAPIData();
    return () => {
      sendToAPI();
      testeNumero = 0;
    };
  }, []);

  async function sendToAPI() {
    try {
      await api.put(`http://${ip}:3000/meta`, {
        id_meta: getIdGoal(),
        realizado: testeNumero,
      });
    } catch (error) {}
  }

  async function getAPIData() {
    try {
      const response = await api.get(
        `http://${ip}:3000/meta/valor/${getIdGoal()}`,
      );
      testeNumero = Number(response.data.realizado);
      setSaveValue(Number(response.data.realizado));
      teste();
    } catch (error) {}
  }

  let testeTop = getPortion();
  function teste() {
    if (testeNumero > 0) {
      let numeroDeBolasPintadas = testeNumero / portionValue;

      while (numeroDeBolasPintadas > 0) {
        const objetoPintado = {
          id: testeTop,
          isChecked: true,
        };
        setArray(oldArray => [...oldArray, objetoPintado]);
        numeroDeBolasPintadas--;
        testeTop--;
      }
    }
    while (testeTop > 0) {
      const ocjeto = {
        id: testeTop,
        isChecked: false,
      };
      testeTop--;
      setArray(oldArray => [...oldArray, ocjeto]);
    }
  }

  async function setChecked(item: BallsProps) {
    setArray(oldArray => {
      return oldArray.map(item2 => {
        if (item2.id === item.id) {
          item2.isChecked = !item2.isChecked;
          if (item2.isChecked) {
            setSaveValue(saveValue + portionValue);
            testeNumero = testeNumero + portionValue;
            // setTotalResult(totalResult - portionValue);
          } else {
            setSaveValue(saveValue - portionValue);
            testeNumero = testeNumero - portionValue;
            // setTotalResult(totalResult + portionValue);
          }
        }

        return item2;
      });
    });
  }

  return (
    <S.Container>
      <StatusBar backgroundColor="#fafafa" />
      <S.Header>
        <S.WrapperTitle>
          <S.TitlePage>{getGoalName()}</S.TitlePage>
          <View style={{ paddingLeft: 10 }}></View>
        </S.WrapperTitle>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
        ></TouchableOpacity>
      </S.Header>

      <S.WrapperDistance>
        <SharedElement id={getImage()}>
          <S.ImageGoal source={{ uri: getImage() }} resizeMode="cover" />
        </SharedElement>
      </S.WrapperDistance>

      <S.WrapperDistance>
        <S.WrapperGoalInfo>
          <S.WrapperInfoBlock>
            <S.InfoTitle>Meta</S.InfoTitle>
            <S.InfoValue isSafe={false}>R$: {getGoalFinalValue()}</S.InfoValue>
          </S.WrapperInfoBlock>
          <S.WrapperInfoBlock>
            <S.InfoTitle>Salvo</S.InfoTitle>
            <S.InfoValue isSafe={true}>R$: {saveValue}</S.InfoValue>
          </S.WrapperInfoBlock>
        </S.WrapperGoalInfo>
      </S.WrapperDistance>
      <S.WrapperPortionInfo>
        <S.WrapperPortionInfoTitle>Parcelas</S.WrapperPortionInfoTitle>
        <S.WrapperPortionDiscount>
          Falta um total de:{' '}
          <S.InfoValue isSafe={true}>
            R$: {totalResult - testeNumero}
          </S.InfoValue>
        </S.WrapperPortionDiscount>
        <S.WrapperPortionValue>
          Valor de cada parcela:
          <S.InfoValue isSafe={true}> R$: {portionValue}</S.InfoValue>
        </S.WrapperPortionValue>
      </S.WrapperPortionInfo>
      <S.WrapperBalls>
        <FlatList
          keyExtractor={item => item.id.toString()}
          data={array}
          horizontal
          renderItem={({ item }) => (
            <>
              <ButtonCompleteGoal
                chave={item.id}
                onPress={() => setChecked(item)}
                check={item.isChecked}
                value={item.id}
              />
              <View style={{ width: 10 }} />
            </>
          )}
        />
      </S.WrapperBalls>
    </S.Container>
  );
};

export default EditGoal;
