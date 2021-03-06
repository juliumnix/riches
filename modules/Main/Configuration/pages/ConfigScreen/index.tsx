import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import * as S from './styles';
import { SvgXml } from 'react-native-svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ConfigStackParamList } from '../../routes/index.routes';
import ModalCommon from '../../../components/Modal';
import { useGoal } from '../../../hooks/goal';
import api from '../../../utils/api';
import { ip } from '../../../../../ip';

function MoneySVG() {
  const svg = `
  <svg width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M43.9976 35.0098C41.9976 34.5098 39.9976 33.5098 38.4976 32.0098C36.9976 31.5098 36.4976 30.0098 36.4976 29.0098C36.4976 28.0098 36.9976 26.5098 37.9976 26.0098C39.4976 25.0098 40.9976 24.0098 42.4976 24.5098C45.4976 24.5098 47.9976 26.0098 49.4976 28.0098L53.9976 22.0098C52.4976 20.5098 50.9976 19.5098 49.4976 18.5098C47.9976 17.5098 45.9976 17.0098 43.9976 17.0098V10.0098H37.9976V17.0098C35.4976 17.5098 32.9976 19.0098 30.9976 21.0098C28.9976 23.5098 27.4976 26.5098 27.9976 29.5098C27.9976 32.5098 28.9976 35.5098 30.9976 37.5098C33.4976 40.0098 36.9976 41.5098 39.9976 43.0098C41.4976 43.5098 43.4976 44.5098 44.9976 45.5098C45.9976 46.5098 46.4976 48.0098 46.4976 49.5098C46.4976 51.0098 45.9976 52.5098 44.9976 54.0098C43.4976 55.5098 41.4976 56.0098 39.9976 56.0098C37.9976 56.0098 35.4976 55.5098 33.9976 54.0098C32.4976 53.0098 30.9976 51.5098 29.9976 50.0098L24.9976 55.5098C26.4976 57.5098 27.9976 59.0098 29.9976 60.5098C32.4976 62.0098 35.4976 63.5098 38.4976 63.5098V70.0098H43.9976V62.5098C46.9976 62.0098 49.4976 60.5098 51.4976 58.5098C53.9976 56.0098 55.4976 52.0098 55.4976 48.5098C55.4976 45.5098 54.4976 42.0098 51.9976 40.0098C49.4976 37.5098 46.9976 36.0098 43.9976 35.0098ZM40.9976 0.00976562C18.9976 0.00976562 0.997559 18.0098 0.997559 40.0098C0.997559 62.0098 18.9976 80.0098 40.9976 80.0098C62.9976 80.0098 80.9976 62.0098 80.9976 40.0098C80.9976 18.0098 62.9976 0.00976562 40.9976 0.00976562ZM40.9976 74.5098C21.9976 74.5098 6.49756 59.0098 6.49756 40.0098C6.49756 21.0098 21.9976 5.50976 40.9976 5.50976C59.9976 5.50976 75.4976 21.0098 75.4976 40.0098C75.4976 59.0098 59.9976 74.5098 40.9976 74.5098Z" fill="#B0B0B0"/>
  </svg>
`;
  const Svg = () => <SvgXml xml={svg} width="80" height="80" />;
  return <Svg />;
}

function FaceSVG() {
  const svg = `
  <svg width="85" height="85" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M42.5 2.65625C20.4956 2.65625 2.65625 20.4956 2.65625 42.5C2.65625 64.5044 20.4956 82.3438 42.5 82.3438C64.5044 82.3438 82.3438 64.5044 82.3438 42.5C82.3438 20.4956 64.5044 2.65625 42.5 2.65625ZM42.5 79.0234C22.3603 79.0234 5.97656 62.6397 5.97656 42.5C5.97656 22.3603 22.3603 5.97656 42.5 5.97656C62.6397 5.97656 79.0234 22.3603 79.0234 42.5C79.0234 62.6397 62.6397 79.0234 42.5 79.0234Z" fill="#B0B0B0"/>
  <path d="M27.2266 39.1797C30.8941 39.1797 33.8672 36.2066 33.8672 32.5391C33.8672 28.8715 30.8941 25.8984 27.2266 25.8984C23.559 25.8984 20.5859 28.8715 20.5859 32.5391C20.5859 36.2066 23.559 39.1797 27.2266 39.1797Z" fill="#B0B0B0"/>
  <path d="M57.7734 39.1797C61.441 39.1797 64.4141 36.2066 64.4141 32.5391C64.4141 28.8715 61.441 25.8984 57.7734 25.8984C54.1059 25.8984 51.1328 28.8715 51.1328 32.5391C51.1328 36.2066 54.1059 39.1797 57.7734 39.1797Z" fill="#B0B0B0"/>
  <path d="M62.6596 47.77C58.059 46.8908 51.2616 45.9863 42.5 45.9863H42.4987C33.7397 45.9863 26.941 46.8908 22.3417 47.77C20.5501 48.114 19.9219 49.4488 19.9219 50.5152C19.9219 60.172 27.374 69.8939 42.4987 69.8939H42.5C57.626 69.8939 65.0795 60.1734 65.0795 50.5152C65.0795 49.4488 64.4499 48.114 62.6596 47.77ZM61.0605 52.7996C60.9888 53.3866 60.8773 54.0959 60.7086 54.8622C60.5187 55.7122 60.3606 56.1053 59.0272 55.9459C56.4759 55.6418 28.5228 55.6418 25.9728 55.9459C24.6394 56.104 24.48 55.7109 24.2914 54.8622C24.141 54.1807 24.0235 53.4924 23.9395 52.7996C23.8199 51.8128 23.9248 51.1142 25.6434 50.826C28.5587 50.3373 34.7252 49.4806 42.4973 49.4806C50.2722 49.4806 56.4373 50.3373 59.3526 50.826C61.0738 51.1142 61.1787 51.8115 61.0605 52.7996Z" fill="#B0B0B0"/>
  </svg>
`;
  const Svg = () => <SvgXml xml={svg} width="80" height="80" />;
  return <Svg />;
}

function ExitSVG() {
  const svg = `
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5.33337 15.9998C5.33337 16.3535 5.47385 16.6926 5.7239 16.9426C5.97395 17.1927 6.31309 17.3332 6.66671 17.3332H16.7867L13.72 20.3865C13.5951 20.5105 13.4959 20.6579 13.4282 20.8204C13.3605 20.9829 13.3256 21.1572 13.3256 21.3332C13.3256 21.5092 13.3605 21.6835 13.4282 21.8459C13.4959 22.0084 13.5951 22.1559 13.72 22.2798C13.844 22.4048 13.9915 22.504 14.1539 22.5717C14.3164 22.6394 14.4907 22.6742 14.6667 22.6742C14.8427 22.6742 15.017 22.6394 15.1795 22.5717C15.342 22.504 15.4894 22.4048 15.6134 22.2798L20.9467 16.9465C21.0681 16.8197 21.1632 16.6702 21.2267 16.5065C21.3601 16.1819 21.3601 15.8178 21.2267 15.4932C21.1632 15.3295 21.0681 15.18 20.9467 15.0532L15.6134 9.71984C15.4891 9.59552 15.3415 9.49691 15.179 9.42963C15.0166 9.36234 14.8425 9.32772 14.6667 9.32772C14.4909 9.32772 14.3168 9.36234 14.1544 9.42963C13.9919 9.49691 13.8444 9.59552 13.72 9.71984C13.5957 9.84416 13.4971 9.99174 13.4298 10.1542C13.3625 10.3166 13.3279 10.4907 13.3279 10.6665C13.3279 10.8423 13.3625 11.0164 13.4298 11.1788C13.4971 11.3413 13.5957 11.4889 13.72 11.6132L16.7867 14.6665H6.66671C6.31309 14.6665 5.97395 14.807 5.7239 15.057C5.47385 15.3071 5.33337 15.6462 5.33337 15.9998ZM22.6667 2.6665H9.33337C8.27251 2.6665 7.25509 3.08793 6.50495 3.83808C5.7548 4.58822 5.33337 5.60564 5.33337 6.6665V10.6665C5.33337 11.0201 5.47385 11.3593 5.7239 11.6093C5.97395 11.8594 6.31309 11.9998 6.66671 11.9998C7.02033 11.9998 7.35947 11.8594 7.60952 11.6093C7.85956 11.3593 8.00004 11.0201 8.00004 10.6665V6.6665C8.00004 6.31288 8.14052 5.97374 8.39056 5.7237C8.64061 5.47365 8.97975 5.33317 9.33337 5.33317H22.6667C23.0203 5.33317 23.3595 5.47365 23.6095 5.7237C23.8596 5.97374 24 6.31288 24 6.6665V25.3332C24 25.6868 23.8596 26.0259 23.6095 26.276C23.3595 26.526 23.0203 26.6665 22.6667 26.6665H9.33337C8.97975 26.6665 8.64061 26.526 8.39056 26.276C8.14052 26.0259 8.00004 25.6868 8.00004 25.3332V21.3332C8.00004 20.9796 7.85956 20.6404 7.60952 20.3904C7.35947 20.1403 7.02033 19.9998 6.66671 19.9998C6.31309 19.9998 5.97395 20.1403 5.7239 20.3904C5.47385 20.6404 5.33337 20.9796 5.33337 21.3332V25.3332C5.33337 26.394 5.7548 27.4115 6.50495 28.1616C7.25509 28.9117 8.27251 29.3332 9.33337 29.3332H22.6667C23.7276 29.3332 24.745 28.9117 25.4951 28.1616C26.2453 27.4115 26.6667 26.394 26.6667 25.3332V6.6665C26.6667 5.60564 26.2453 4.58822 25.4951 3.83808C24.745 3.08793 23.7276 2.6665 22.6667 2.6665Z" fill="#FF5D5D"/>
  </svg>

`;
  const Svg = () => <SvgXml xml={svg} width="32" height="32" />;
  return <Svg />;
}

type ModalSignInProps = StackNavigationProp<
  ConfigStackParamList,
  'OpeningBalanceScreen'
>;

export default function ConfigScreen() {
  const { handleGoalValue } = useGoal();
  const [balance, setBalance] = useState(0);
  const [balanceVisible, setBalanceVisible] = useState(false);
  const [nameVisible, setNameVisible] = useState(false);
  const [name, setName] = useState('');
  const navigation = useNavigation<ModalSignInProps>();
  let id = '';

  const deleteData = async () => {
    try {
      await AsyncStorage.removeItem('@riches:id_usuario');
      navigation.reset({ routes: [{ name: 'AutenticationExitStack' }] });
    } catch (e) {
      // error reading value
    }
  };

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
    } catch (error) {}
  }

  async function updateName() {
    try {
      await getData();
      await api.put(`http://${ip}:3000/usuarios/` + id, {
        nome: name,
      });
    } catch (error) {}
  }

  return (
    <S.Container>
      <S.Header>
        <S.Title>Ajustes</S.Title>
        <TouchableOpacity onPress={deleteData}>
          <ExitSVG />
        </TouchableOpacity>
      </S.Header>
      <S.Buttons>
        <S.Button onPress={() => setBalanceVisible(true)}>
          <MoneySVG />
          <S.ButtonTitle>Ajustar o saldo</S.ButtonTitle>
        </S.Button>
        <S.Button onPress={() => setNameVisible(true)}>
          <FaceSVG />
          <S.ButtonTitle>Ajustar nome</S.ButtonTitle>
        </S.Button>
      </S.Buttons>
      <StatusBar style="auto" />
      <ModalCommon
        keyboardType="numeric"
        sendData={() => {
          updateBalance();
          setBalanceVisible(false);
        }}
        placeholder="R$: 0,00"
        title="Qual seu saldo inicial?"
        visible={balanceVisible}
        closeModal={() => {
          setBalanceVisible(false);
        }}
        switchValue={(text: string) => setBalance(Number(text))}
      />

      <ModalCommon
        keyboardType="default"
        sendData={() => {
          updateName();
          setNameVisible(false);
        }}
        placeholder="Ex: Pedro"
        title="Qual seu nome?"
        visible={nameVisible}
        closeModal={() => {
          setNameVisible(false);
        }}
        switchValue={(text: string) => setName(text)}
      />
    </S.Container>
  );
}
