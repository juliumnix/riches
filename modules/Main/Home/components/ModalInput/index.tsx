import React, { useState } from 'react';
import { Modal, ModalProps, Platform, StatusBar, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { ip } from '../../../../../ip';
import api from '../../../utils/api';
import * as S from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = ModalProps & {
  visible: boolean;
  closeModal: () => void;
  sendData: () => void;
  balance: number;
};

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

export default function ModalInput({
  sendData,
  visible,
  closeModal,
  balance,
  ...rest
}: Props) {
  const [inputValue, setInputValue] = useState('');
  function close() {
    closeModal();
    Platform.OS === 'android' ? (
      <StatusBar backgroundColor="rgba(0,0,0,0)" animated={true} />
    ) : null;
  }

  async function sendToAPI() {
    try {
      const value = await AsyncStorage.getItem('@riches:id_usuario');
      await api.post(`http://${ip}:3000/saldo/entrada`, {
        id_usuario: value,
        valor: inputValue,
        entrada: true,
      });
      try {
        await api.put(`http://${ip}:3000/usuarios/saldo/` + value, {
          saldo: balance + Number(inputValue),
        });
        sendData();
        closeModal();
      } catch (error) {}
    } catch (error) {}
  }

  return (
    <Modal
      transparent
      animationType="slide"
      visible={visible}
      onRequestClose={function () {
        close();
      }}
      {...rest}
    >
      {Platform.OS === 'android' ? (
        <StatusBar backgroundColor="rgba(0,0,0,0.6)" animated={true} />
      ) : null}
      <S.ModalContainer>
        <S.CloseModal
          onPress={function () {
            close();
          }}
        />
        <S.Container>
          <S.WrapperTitle>
            <S.Title>Qual valor da entrada</S.Title>
          </S.WrapperTitle>
          <S.ContainerMoney>
            <S.Money
              keyboardType="numeric"
              onChangeText={text => {
                setInputValue(text);
              }}
              placeholder="R$: 0,00"
            />
            <S.Line></S.Line>
          </S.ContainerMoney>
          <S.Subtitle>Digite uma quantia maior que R$ 0,00</S.Subtitle>
          <S.WrapperNextButton>
            <S.Next onPress={() => sendToAPI()}>
              <ArrowSVG />
            </S.Next>
          </S.WrapperNextButton>
        </S.Container>
      </S.ModalContainer>
    </Modal>
  );
}
