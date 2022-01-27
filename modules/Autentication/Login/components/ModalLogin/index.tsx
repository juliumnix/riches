import React, { useState } from 'react';
import { Modal, ModalProps, Platform, StatusBar, View } from 'react-native';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import { SvgXml } from 'react-native-svg';
import { ip } from '../../../../../ip';
import api from '../../../../Main/utils/api';
import * as S from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

type Props = ModalProps & {
  visible: boolean;
  closeModal: () => void;
  openModalSignIn: () => void;
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

export default function ModalLogin({
  visible,
  closeModal,
  openModalSignIn,
  ...rest
}: Props) {
  const navigation = useNavigation();

  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailIncorrect, setEmailIncorrect] = useState(false);
  const [passwordIncorrect, setPasswordIncorrect] = useState(false);

  async function login(email: string, password: string) {
    setEmailIncorrect(false);
    setPasswordIncorrect(false);
    try {
      const response = await api.post(`http://${ip}:3000/login`, {
        email: email,
        senha: password,
      });

      await AsyncStorage.setItem('@riches:id_usuario', response.data);
      setId(response.data);
      close();
      navigation.reset({ routes: [{ name: 'HomeApp' }] });
    } catch (error) {
      setEmailIncorrect(true);
      setPasswordIncorrect(true);
    }
  }

  function showErrorEmail() {
    if (emailIncorrect == true) {
      return true;
    }
    return false;
  }

  function showErrorPassword() {
    if (passwordIncorrect == true) {
      return true;
    }
    return false;
  }

  function close() {
    closeModal();
    Platform.OS === 'android' ? (
      <StatusBar backgroundColor="rgba(0,0,0,0)" animated={true} />
    ) : null;
    setEmailIncorrect(false);
    setPasswordIncorrect(false);
    setEmail('');
    setPassword('');
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
            <S.Title>Entre em sua conta Riches</S.Title>
          </S.WrapperTitle>
          <S.ContainerInputs>
            <S.ContainerInput>
              <S.TitleInputField>Email</S.TitleInputField>
              <S.InfoLoginInput
                placeholder="Seu email aqui"
                value={email}
                onChangeText={setEmail}
              />
              <S.InputBottomBar />
              <S.ErrorText isActive={showErrorEmail()}>
                Digite um email válido
              </S.ErrorText>
            </S.ContainerInput>
            <S.ContainerInput>
              <S.TitleInputField>Senha</S.TitleInputField>
              <S.InfoLoginInput
                placeholder="********"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
              />
              <S.InputBottomBar />
              <S.ErrorText isActive={showErrorPassword()}>
                A senha esta incorreta
              </S.ErrorText>
            </S.ContainerInput>
          </S.ContainerInputs>
          <S.Footer>
            <S.CreateAccountButtom
              onPress={function () {
                openModalSignIn();
                close();
              }}
            >
              <S.CreateAccountText>Criar uma conta</S.CreateAccountText>
              <S.CreateAccountBottomBar></S.CreateAccountBottomBar>
            </S.CreateAccountButtom>
            <S.NextButton onPress={() => login(email, password)}>
              <ArrowSVG />
            </S.NextButton>
          </S.Footer>
        </S.Container>
      </S.ModalContainer>
    </Modal>
  );
}
