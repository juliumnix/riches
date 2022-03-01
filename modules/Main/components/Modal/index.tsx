import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Modal, Platform } from 'react-native';
import { SvgXml } from 'react-native-svg';
import * as S from './styles';

type ModalCommonProps = {
  visible: boolean;
  title: string;
  closeModal: () => void;
  switchValue: (value: string) => void;
  placeholder: string;
  sendData: () => void;
  keyboardType: 'default' | 'email-address' | 'numeric' | 'phone-pad';
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

const ModalCommon = ({
  closeModal,
  title,
  visible,
  placeholder,
  sendData,
  switchValue,
  keyboardType,
  ...rest
}: ModalCommonProps) => {
  return (
    <Modal
      transparent
      animationType="slide"
      visible={visible}
      onRequestClose={function () {
        closeModal();
      }}
      {...rest}
    >
      {Platform.OS === 'android' ? (
        <StatusBar backgroundColor="rgba(0,0,0,0.6)" animated={true} />
      ) : null}
      <S.ModalContainer>
        <S.CloseModal
          onPress={function () {
            closeModal();
          }}
        />
        <S.Container>
          <S.WrapperTitle>
            <S.Title>{title}</S.Title>
          </S.WrapperTitle>
          <S.ContainerMoney>
            <S.Money
              keyboardType={keyboardType}
              onChangeText={text => {
                switchValue(text);
              }}
              placeholder={placeholder}
            />
            <S.Line></S.Line>
          </S.ContainerMoney>
          <S.Footer>
            <S.NextButton onPress={() => sendData()}>
              <ArrowSVG />
            </S.NextButton>
          </S.Footer>
        </S.Container>
      </S.ModalContainer>
    </Modal>
  );
};

export default ModalCommon;
