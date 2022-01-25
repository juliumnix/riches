import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import SearchPhoto from '../../components/SearchPhoto';
import { SvgXml } from 'react-native-svg';
import * as S from './styles';
import { useGoal } from '../../../hooks/goal';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../../utils/api';
import { ip } from '../../../../../ip';

function PlusSVG() {
  const svg = `
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 30C12.287 30 8.72601 28.525 6.1005 25.8995C3.475 23.274 2 19.713 2 16C2 12.287 3.475 8.72601 6.1005 6.1005C8.72601 3.475 12.287 2 16 2C19.713 2 23.274 3.475 25.8995 6.1005C28.525 8.72601 30 12.287 30 16C30 19.713 28.525 23.274 25.8995 25.8995C23.274 28.525 19.713 30 16 30ZM16 32C20.2435 32 24.3131 30.3143 27.3137 27.3137C30.3143 24.3131 32 20.2435 32 16C32 11.7565 30.3143 7.68687 27.3137 4.68629C24.3131 1.68571 20.2435 0 16 0C11.7565 0 7.68687 1.68571 4.68629 4.68629C1.68571 7.68687 0 11.7565 0 16C0 20.2435 1.68571 24.3131 4.68629 27.3137C7.68687 30.3143 11.7565 32 16 32Z" fill="#484848"/>
<path d="M16 8C16.2652 8 16.5196 8.10536 16.7071 8.29289C16.8946 8.48043 17 8.73478 17 9V15H23C23.2652 15 23.5196 15.1054 23.7071 15.2929C23.8946 15.4804 24 15.7348 24 16C24 16.2652 23.8946 16.5196 23.7071 16.7071C23.5196 16.8946 23.2652 17 23 17H17V23C17 23.2652 16.8946 23.5196 16.7071 23.7071C16.5196 23.8946 16.2652 24 16 24C15.7348 24 15.4804 23.8946 15.2929 23.7071C15.1054 23.5196 15 23.2652 15 23V17H9C8.73478 17 8.48043 16.8946 8.29289 16.7071C8.10536 16.5196 8 16.2652 8 16C8 15.7348 8.10536 15.4804 8.29289 15.2929C8.48043 15.1054 8.73478 15 9 15H15V9C15 8.73478 15.1054 8.48043 15.2929 8.29289C15.4804 8.10536 15.7348 8 16 8Z" fill="#484848"/>
</svg>
`;
  const Svg = () => <SvgXml xml={svg} width="32" height="32" />;
  return <Svg />;
}

function MinorSVG() {
  const svg = `
<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 11H15" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
  const Svg = () => <SvgXml xml={svg} width="18" height="18" />;
  return <Svg />;
}

function PlusMinorSVG() {
  const svg = `
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 30C12.287 30 8.72601 28.525 6.1005 25.8995C3.475 23.274 2 19.713 2 16C2 12.287 3.475 8.72601 6.1005 6.1005C8.72601 3.475 12.287 2 16 2C19.713 2 23.274 3.475 25.8995 6.1005C28.525 8.72601 30 12.287 30 16C30 19.713 28.525 23.274 25.8995 25.8995C23.274 28.525 19.713 30 16 30ZM16 32C20.2435 32 24.3131 30.3143 27.3137 27.3137C30.3143 24.3131 32 20.2435 32 16C32 11.7565 30.3143 7.68687 27.3137 4.68629C24.3131 1.68571 20.2435 0 16 0C11.7565 0 7.68687 1.68571 4.68629 4.68629C1.68571 7.68687 0 11.7565 0 16C0 20.2435 1.68571 24.3131 4.68629 27.3137C7.68687 30.3143 11.7565 32 16 32Z" fill="#484848"/>
<path d="M16 8C16.2652 8 16.5196 8.10536 16.7071 8.29289C16.8946 8.48043 17 8.73478 17 9V15H23C23.2652 15 23.5196 15.1054 23.7071 15.2929C23.8946 15.4804 24 15.7348 24 16C24 16.2652 23.8946 16.5196 23.7071 16.7071C23.5196 16.8946 23.2652 17 23 17H17V23C17 23.2652 16.8946 23.5196 16.7071 23.7071C16.5196 23.8946 16.2652 24 16 24C15.7348 24 15.4804 23.8946 15.2929 23.7071C15.1054 23.5196 15 23.2652 15 23V17H9C8.73478 17 8.48043 16.8946 8.29289 16.7071C8.10536 16.5196 8 16.2652 8 16C8 15.7348 8.10536 15.4804 8.29289 15.2929C8.48043 15.1054 8.73478 15 9 15H15V9C15 8.73478 15.1054 8.48043 15.2929 8.29289C15.4804 8.10536 15.7348 8 16 8Z" fill="#484848"/>
</svg>
`;
  const Svg = () => <SvgXml xml={svg} width="20" height="20" />;
  return <Svg />;
}

function ExitSVG() {
  const svg = `
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.671367 0.671367C0.883644 0.458553 1.13582 0.289707 1.41345 0.174503C1.69108 0.0592985 1.98872 0 2.2893 0C2.58989 0 2.88752 0.0592985 3.16515 0.174503C3.44278 0.289707 3.69496 0.458553 3.90723 0.671367L16.0006 12.7693L28.094 0.671367C28.3064 0.458897 28.5587 0.290356 28.8363 0.175368C29.1139 0.0603802 29.4114 0.00119646 29.7119 0.00119646C30.0124 0.00119646 30.3099 0.0603802 30.5875 0.175368C30.8651 0.290356 31.1174 0.458897 31.3298 0.671367C31.5423 0.883837 31.7108 1.13608 31.8258 1.41368C31.9408 1.69129 32 1.98882 32 2.2893C32 2.58978 31.9408 2.88732 31.8258 3.16492C31.7108 3.44253 31.5423 3.69476 31.3298 3.90723L19.2319 16.0006L31.3298 28.094C31.5423 28.3064 31.7108 28.5587 31.8258 28.8363C31.9408 29.1139 32 29.4114 32 29.7119C32 30.0124 31.9408 30.3099 31.8258 30.5875C31.7108 30.8651 31.5423 31.1174 31.3298 31.3298C31.1174 31.5423 30.8651 31.7108 30.5875 31.8258C30.3099 31.9408 30.0124 32 29.7119 32C29.4114 32 29.1139 31.9408 28.8363 31.8258C28.5587 31.7108 28.3064 31.5423 28.094 31.3298L16.0006 19.2319L3.90723 31.3298C3.69476 31.5423 3.44253 31.7108 3.16492 31.8258C2.88732 31.9408 2.58978 32 2.2893 32C1.98882 32 1.69129 31.9408 1.41368 31.8258C1.13608 31.7108 0.883837 31.5423 0.671367 31.3298C0.458897 31.1174 0.290356 30.8651 0.175368 30.5875C0.0603802 30.3099 0.00119646 30.0124 0.00119646 29.7119C0.00119646 29.4114 0.0603802 29.1139 0.175368 28.8363C0.290356 28.5587 0.458897 28.3064 0.671367 28.094L12.7693 16.0006L0.671367 3.90723C0.458553 3.69496 0.289707 3.44278 0.174503 3.16515C0.0592985 2.88752 0 2.58989 0 2.2893C0 1.98872 0.0592985 1.69108 0.174503 1.41345C0.289707 1.13582 0.458553 0.883644 0.671367 0.671367Z" fill="#FF5D5D"/>
</svg>
`;
  const Svg = () => <SvgXml xml={svg} width="32" height="32" />;
  return <Svg />;
}

function PenSVG() {
  const svg = `
<svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 2.10457C21.3502 1.75438 21.7659 1.47659 22.2235 1.28707C22.681 1.09755 23.1714 1 23.6667 1C24.1619 1 24.6523 1.09755 25.1099 1.28707C25.5674 1.47659 25.9831 1.75438 26.3333 2.10457C26.6835 2.45476 26.9613 2.8705 27.1508 3.32805C27.3404 3.78559 27.4379 4.27599 27.4379 4.77124C27.4379 5.26648 27.3404 5.75688 27.1508 6.21443C26.9613 6.67197 26.6835 7.08771 26.3333 7.4379L8.33333 25.4379L1 27.4379L3 20.1046L21 2.10457Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
  const Svg = () => <SvgXml xml={svg} width="32" height="32" />;
  return <Svg />;
}

const CreateGoal = () => {
  const navigation = useNavigation();
  const { handleSetGoal } = useGoal();
  const [goalName, setGoalName] = useState('');
  const [portion, setPortion] = useState(0);
  const [image, setImage] = useState('');
  const [visibleModal, setVisibleModal] = useState(false);
  const [goalValue, setGoalValue] = useState(0);

  function setImageSelected(imageUrl: string) {
    setImage(imageUrl);
  }

  function addPortion() {
    setPortion(portion + 1);
  }

  function removePortion() {
    if (portion == 0) {
      return 0;
    }
    setPortion(portion - 1);
  }

  function formatterGoal(text: string) {
    var atual = Number(text);
    setGoalValue(atual);
  }

  async function handleConfirm() {
    try {
      const value = await AsyncStorage.getItem('@riches:id_usuario');
      await api.post(`http://${ip}:3000/meta`, {
        id_usuario: value,
        nome: goalName,
        url_image: image,
        numero_parcela: portion,
        valor: goalValue,
      });
      const goal = {
        name: goalName,
        portion: portion,
        image: image,
        value: goalValue,
      };
      handleSetGoal(goal);
      navigation.goBack();
    } catch (error) {}
  }

  function reviewParams() {
    if (goalName == '' || portion == 0 || image == '' || goalValue == 0) {
      return false;
    }

    return true;
  }

  return (
    <>
      <S.Container>
        <SearchPhoto
          onClose={() => setVisibleModal(!visibleModal)}
          onPressItem={setImageSelected}
          visible={visibleModal}
        />
        <StatusBar backgroundColor="#fafafa" />
        <S.Header>
          <S.WrapperTitle>
            <S.Title onChangeText={text => setGoalName(text)} />
            <View style={{ paddingLeft: 10 }}>
              <PenSVG />
            </View>
          </S.WrapperTitle>

          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ExitSVG />
          </TouchableOpacity>
        </S.Header>

        {image == '' ? (
          <S.WrapperDistance>
            <S.InsertButton onPress={() => setVisibleModal(!visibleModal)}>
              <PlusSVG />
              <S.DescriptionInsertButton>
                Clique para adicionar uma foto
              </S.DescriptionInsertButton>
            </S.InsertButton>
          </S.WrapperDistance>
        ) : (
          <S.WrapperDistance>
            <TouchableOpacity onPress={() => setVisibleModal(!visibleModal)}>
              <S.ImageGoal source={{ uri: image }} />
            </TouchableOpacity>
          </S.WrapperDistance>
        )}

        <S.WrapperDistance>
          <S.TextGoal>Adicione uma meta</S.TextGoal>
          <S.WrapperGoal>
            <S.GoalTextInput onChangeText={text => formatterGoal(text)} />
          </S.WrapperGoal>
        </S.WrapperDistance>

        <S.TitlePortion>Em quantas parcelas deseja fazer?</S.TitlePortion>
        <S.WrapperPortionSelector>
          <S.PortionSelector>
            <TouchableOpacity onPress={addPortion}>
              <PlusMinorSVG />
            </TouchableOpacity>

            <S.PortionValue>{portion}</S.PortionValue>

            <TouchableOpacity onPress={removePortion}>
              <MinorSVG />
            </TouchableOpacity>
          </S.PortionSelector>
        </S.WrapperPortionSelector>
      </S.Container>

      {reviewParams() == true && (
        <S.WrapperButtonConfirm>
          <S.ButtonConfirm onPress={() => handleConfirm()}>
            <S.TextButtonConfirm>Criar meta</S.TextButtonConfirm>
          </S.ButtonConfirm>
        </S.WrapperButtonConfirm>
      )}
    </>
  );
};

export default CreateGoal;
