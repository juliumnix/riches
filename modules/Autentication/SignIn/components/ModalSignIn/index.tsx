import React, { useState } from 'react';
import { Modal, ModalProps, Platform, StatusBar, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import api from '../../../../Main/utils/api';
import * as S from './styles';
import { useNavigation } from '@react-navigation/core';
import { AutenticationParamList } from '../../../routes/index.routes';
import { StackNavigationProp } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

type ModalSignInProps = StackNavigationProp<
  AutenticationParamList,
  'LoginScreen'
>;

type Props = ModalProps & {
  visible: boolean;
  closeModal: () => void;
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

export default function ModalSignIn({ visible, closeModal, ...rest }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailIncorrect, setEmailIncorrect] = useState(false);
  const [passwordIncorrect, setPasswordIncorrect] = useState(false);
  const navigation = useNavigation<ModalSignInProps>();

  async function signIn(email: string, password: string) {
    setEmailIncorrect(false);
    setPasswordIncorrect(false);
    try {
      const response = await api.post('http://192.168.0.110:3000/usuarios', {
        email: email,
        senha: password,
      });
      storeData(response.data.id_usuario);
      navigation.navigate('UserNameScreen');
      close();
    } catch (error) {
      setEmailIncorrect(true);
      setPasswordIncorrect(true);
    }
  }

  const storeData = async (value: string) => {
    try {
      await AsyncStorage.setItem('@riches:id_usuario', value);
    } catch (e) {
      // saving error
    }
  };

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
            <S.Title>Crie sua conta Riches</S.Title>
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
                A senha deve ter pelo menos 8 dígitos
              </S.ErrorText>
            </S.ContainerInput>
          </S.ContainerInputs>
          <S.Footer>
            <S.NextButton onPress={() => signIn(email, password)}>
              <ArrowSVG />
            </S.NextButton>
          </S.Footer>
        </S.Container>
      </S.ModalContainer>
    </Modal>
  );
}
