import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import * as S from './styles';
import { SvgXml } from 'react-native-svg';
import { useNavigation } from '@react-navigation/core';
import { AutenticationParamList } from '../../../routes/index.routes';
import { StackNavigationProp } from '@react-navigation/stack';
import api from '../../../../Main/utils/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

type UserNameScreenProps = StackNavigationProp<
  AutenticationParamList,
  'UserNameScreen'
>;

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

export default function UserNameScreen() {
  const [name, setName] = useState('');
  const [alreadyClicked, setAlreadyClicked] = useState(false);
  const navigation = useNavigation<UserNameScreenProps>();
  let id = '';

  function verifyNameEmpty() {
    if (name === '' && alreadyClicked == true) {
      return true;
    }
    return false;
  }

  async function updateName() {
    setAlreadyClicked(true);
    if (!verifyNameEmpty()) {
      try {
        await getData();
        await api.put('http://192.168.1.124:3000/usuarios/' + id, {
          nome: name,
        });
        navigation.navigate('HomeApp');
      } catch (error) {}
    }
  }

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@riches:id_usuario');
      if (value !== null) {
        console.log(value);
        id = value;
      }
    } catch (e) {
      // error reading value
    }
  };

  return (
    <S.Container>
      <S.WrapperContent>
        <S.Title>Como podemos lhe chamar?</S.Title>
        <S.ContainerName>
          <S.Name
            placeholder="Primeiro Nome"
            value={name}
            onChangeText={setName}
          />
          <S.Line></S.Line>
          <S.ErrorText isActive={verifyNameEmpty() ? true : false}>
            O nome não pode ser vazio.
          </S.ErrorText>
        </S.ContainerName>
      </S.WrapperContent>
      <S.WrapperNextButton>
        <S.Next onPress={() => updateName()}>
          <ArrowSVG />
        </S.Next>
      </S.WrapperNextButton>
      <StatusBar style="auto" />
    </S.Container>
  );
}