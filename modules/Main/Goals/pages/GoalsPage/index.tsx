import { useFocusEffect, useNavigation } from '@react-navigation/core';
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View, Animated } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { useGoal } from '../../../hooks/goal';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../routes/index.routes';
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as S from './styles';
import { StatusBar } from 'expo-status-bar';

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

function MiniPlusSVG() {
  const svg = `
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 16.875C6.91142 16.875 4.90838 16.0453 3.43153 14.5685C1.95468 13.0916 1.125 11.0886 1.125 9C1.125 6.91142 1.95468 4.90838 3.43153 3.43153C4.90838 1.95468 6.91142 1.125 9 1.125C11.0886 1.125 13.0916 1.95468 14.5685 3.43153C16.0453 4.90838 16.875 6.91142 16.875 9C16.875 11.0886 16.0453 13.0916 14.5685 14.5685C13.0916 16.0453 11.0886 16.875 9 16.875ZM9 18C11.3869 18 13.6761 17.0518 15.364 15.364C17.0518 13.6761 18 11.3869 18 9C18 6.61305 17.0518 4.32387 15.364 2.63604C13.6761 0.948212 11.3869 0 9 0C6.61305 0 4.32387 0.948212 2.63604 2.63604C0.948212 4.32387 0 6.61305 0 9C0 11.3869 0.948212 13.6761 2.63604 15.364C4.32387 17.0518 6.61305 18 9 18Z" fill="#B0B0B0"/>
<path d="M9 4.5C9.14918 4.5 9.29226 4.55926 9.39775 4.66475C9.50324 4.77024 9.5625 4.91332 9.5625 5.0625V8.4375H12.9375C13.0867 8.4375 13.2298 8.49676 13.3352 8.60225C13.4407 8.70774 13.5 8.85082 13.5 9C13.5 9.14918 13.4407 9.29226 13.3352 9.39775C13.2298 9.50324 13.0867 9.5625 12.9375 9.5625H9.5625V12.9375C9.5625 13.0867 9.50324 13.2298 9.39775 13.3352C9.29226 13.4407 9.14918 13.5 9 13.5C8.85082 13.5 8.70774 13.4407 8.60225 13.3352C8.49676 13.2298 8.4375 13.0867 8.4375 12.9375V9.5625H5.0625C4.91332 9.5625 4.77024 9.50324 4.66475 9.39775C4.55926 9.29226 4.5 9.14918 4.5 9C4.5 8.85082 4.55926 8.70774 4.66475 8.60225C4.77024 8.49676 4.91332 8.4375 5.0625 8.4375H8.4375V5.0625C8.4375 4.91332 8.49676 4.77024 8.60225 4.66475C8.70774 4.55926 8.85082 4.5 9 4.5Z" fill="#B0B0B0"/>
</svg>

`;
  const Svg = () => <SvgXml xml={svg} width="22" height="22" />;
  return <Svg />;
}

type homeScreenProp = StackNavigationProp<RootStackParamList, 'GoalsPage'>;

import { SharedElement } from 'react-navigation-shared-element';
import api from '../../../utils/api';
import { ip } from '../../../../../ip';
import Loading from '../../../components/Loading';

type GoalPropsPage = {
  id_meta: number;
  url_image: string;
  nome: string;
  numero_parcela: number;
  valor: number;
};

const GoalsPage = () => {
  const {
    goal,
    getGoal,
    setGoalName,
    setImage,
    setPortion,
    setGoalFinalValue,
    setIdGoal,
  } = useGoal();
  const navigation = useNavigation<homeScreenProp>();
  const [goals, setGoals] = useState<GoalPropsPage[]>([]);
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      if (navigation.isFocused()) {
        setLoading(true);
        getGoalsFromAPI();
        setGoals(getGoal());
      }
    }, []),
  );

  async function getGoalsFromAPI() {
    try {
      const value = await AsyncStorage.getItem('@riches:id_usuario');
      const response = await api.get(`http://${ip}:3000/meta/${value}`);
      setGoals(response.data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }

  function handleItemNavigation(item: GoalPropsPage) {
    setGoalName(item.nome);
    setImage(item.url_image);
    setPortion(item.numero_parcela);
    setGoalFinalValue(item.valor);
    setIdGoal(item.id_meta);
    navigation.navigate('EditGoal');
  }

  return (
    <S.Container>
      <StatusBar backgroundColor="#fafafa" />
      {loading ? (
        <>
          <Loading visible={loading} />
        </>
      ) : (
        <>
          <S.Header>
            <S.WrapperTitle>
              <S.Title>Metas</S.Title>
            </S.WrapperTitle>
            <TouchableOpacity onPress={() => navigation.navigate('CreateGoal')}>
              <PlusSVG />
            </TouchableOpacity>
          </S.Header>
          <View style={{ flex: 1, marginBottom: 10 }}>
            {goals.length > 0 ? (
              <FlatList
                keyExtractor={photo => photo.nome}
                data={goals}
                numColumns={2}
                ItemSeparatorComponent={() => <S.Separator />}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                style={{ width: '100%' }}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => handleItemNavigation(item)}>
                    <Animated.View style={{ borderRadius: 20 }}>
                      <SharedElement
                        id={item.url_image}
                        style={{ borderRadius: 20 }}
                      >
                        <S.ImageItem
                          source={{ uri: item.url_image }}
                          imageStyle={{ borderRadius: 20, opacity: 0.6 }}
                          resizeMode="cover"
                        >
                          <S.ImageDetails>
                            <S.ImageTitle> {item.nome}</S.ImageTitle>
                          </S.ImageDetails>
                        </S.ImageItem>
                      </SharedElement>
                    </Animated.View>
                  </TouchableOpacity>
                )}
              />
            ) : (
              <S.EmptyListWrapper>
                <S.EmptyListTitle>
                  Você não possui metas registradas
                </S.EmptyListTitle>
                <S.EmptyListSubtitleWrapper>
                  <S.EmptyListSubtitle>
                    Adicione metas no botão
                  </S.EmptyListSubtitle>
                  <MiniPlusSVG />
                </S.EmptyListSubtitleWrapper>
              </S.EmptyListWrapper>
            )}
          </View>
        </>
      )}
    </S.Container>
  );
};

export default GoalsPage;
