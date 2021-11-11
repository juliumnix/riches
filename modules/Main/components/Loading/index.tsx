import React from 'react';
import { View, Modal } from 'react-native';
import LottieView from 'lottie-react-native';
import * as S from './styles';
import loading from './assets/loading.json';

type LoadingProps = {
  visible: boolean;
};

const Loading = ({ visible }: LoadingProps) => {
  return (
    <Modal animationType="fade" visible={visible} transparent={true}>
      <S.ContainerModal>
        <S.Container>
          <S.LoadingContainer>
            <LottieView source={loading} autoPlay loop />
          </S.LoadingContainer>
        </S.Container>
      </S.ContainerModal>
    </Modal>
  );
};

export default Loading;
