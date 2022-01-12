import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useEffect, useState } from 'react';
import * as S from './styles';
import CardBalance from '../../components/CardBalance';
import { SvgXml } from 'react-native-svg';
import { Text, TouchableOpacity, View } from 'react-native';
import { getHours } from 'date-fns';
import { useGoal } from '../../../hooks/goal';

import AsyncStorage from '@react-native-async-storage/async-storage';
import ModalInput from '../../components/ModalInput';
import ModalOutput from '../../components/ModalOutput';

import api from '../../../utils/api';
import { ip } from '../../../../../ip';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

const teste = [
  { id: 1, valor: '10' },
  { id: 2, valor: '20' },
  { id: 3, valor: '30' },
];

function CloseViewSVG() {
  const svg = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.12 14.12C13.8454 14.4148 13.5141 14.6512 13.1462 14.8151C12.7782 14.9791 12.3809 15.0673 11.9781 15.0744C11.5753 15.0815 11.1752 15.0074 10.8016 14.8565C10.4281 14.7056 10.0887 14.4811 9.80385 14.1962C9.51897 13.9113 9.29439 13.572 9.14351 13.1984C8.99262 12.8249 8.91853 12.4247 8.92563 12.0219C8.93274 11.6191 9.02091 11.2219 9.18488 10.8539C9.34884 10.4859 9.58525 10.1547 9.88 9.88003M17.94 17.94C16.2306 19.243 14.1491 19.9649 12 20C5 20 1 12 1 12C2.24389 9.68192 3.96914 7.65663 6.06 6.06003L17.94 17.94ZM9.9 4.24002C10.5883 4.0789 11.2931 3.99836 12 4.00003C19 4.00003 23 12 23 12C22.393 13.1356 21.6691 14.2048 20.84 15.19L9.9 4.24002Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M1 1L23 23" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `;
  const Svg = () => <SvgXml xml={svg} width="32" height="32" />;
  return <Svg />;
}

function HelloSVG() {
  const svg = `
    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.87969 14.9097C1.42705 18.3918 3.95161 22.5948 7.61881 23.3315C4.761 21.4124 2.97656 18.3294 2.87969 14.9097Z" fill="#018B3C"/>
    <path d="M7.61964 23.3288L7.53052 23.3105C7.54166 23.3134 7.5683 23.3176 7.61964 23.3288Z" fill="#018B3C"/>
    <path d="M0.96875 21.4336C1.20561 24.3495 4.86264 26.2182 7.48698 25.0238C4.78514 24.4435 2.99295 23.9121 0.96875 21.4336Z" fill="#018B3C"/>
    <path d="M22.5255 11.047C24.2266 7.57502 21.811 3.27958 18.1395 2.34619C20.9484 4.39655 22.6146 7.58907 22.5255 11.047Z" fill="#018B3C"/>
    <path d="M23.6691 8.63822C25.6996 6.84168 24.881 3.26747 22.5395 2.104C23.6681 4.31518 24.0658 6.18293 23.6691 8.63822Z" fill="#018B3C"/>
    <path d="M29.3139 6.94797C28.8545 6.59682 28.2922 6.40684 27.714 6.40741C24.2236 6.40741 23.5978 10.9538 22.8233 12.7285C22.8233 12.7285 19.2442 5.23571 17.9994 2.76346C16.7158 0.213222 13.9757 0.740222 13.1731 2.12844C11.2666 0.152675 7.6643 1.74772 8.12348 4.14974C5.65123 3.95986 4.65197 6.39869 5.20076 7.96225C3.28991 7.90316 2.39672 10.2664 3.04287 11.9583C3.0763 12.0465 6.46886 18.7231 7.38239 20.9978C7.48847 21.2617 7.59551 21.5441 7.70789 21.8415C8.44656 23.7945 9.45842 26.4693 11.9898 28.6175C13.0796 29.5421 14.5884 30.0309 16.3545 30.0309C19.4671 30.0309 22.9328 28.4862 25.1841 26.0948C27.2006 23.9534 28.1669 21.3247 27.979 18.4926C27.8104 15.9467 28.6203 13.5481 29.2708 11.6203C29.9765 9.52824 30.5336 7.87555 29.3139 6.94797ZM26.4333 18.4083C26.8271 24.0406 21.1817 28.7928 16.3922 28.7928C14.929 28.7928 13.4133 28.5564 12.4664 27.7528C9.75098 25.4482 9.06947 22.5962 8.28236 20.6403C7.34219 18.3003 5.03462 13.8038 3.9162 11.5418C3.45847 10.6157 4.2233 8.64474 5.55533 8.64474L9.3969 16.8152L10.8525 17.689C10.8525 17.689 7.51898 10.4243 6.46353 7.9206C5.8474 6.45875 6.90916 4.69369 8.34 4.92377L13.1092 15.1034L14.5652 15.9791L9.0065 4.24128C8.98422 2.16089 11.8309 2.12844 12.4925 3.34325C14.167 6.41807 17.3106 13.1659 17.3106 13.1659L18.7657 14.0412L13.5475 2.97658C14.5666 1.64261 16.3646 1.82958 17.1396 3.44885C18.0706 5.39361 22.0129 13.8406 22.0129 13.8406C18.121 15.2996 15.4642 19.5286 18.2459 23.6977C16.0387 19.1397 19.949 15.9186 22.259 14.8539C23.1333 14.4505 23.4549 13.6876 23.4549 13.6876L23.453 13.6881C23.7577 13.1363 23.7397 12.3986 24.103 11.2047C24.8901 8.62052 25.9698 7.25119 27.5542 7.25119C27.9194 7.25119 28.3796 7.52438 28.5907 7.83583C29.6578 9.41053 26.0672 13.1751 26.4333 18.4083Z" fill="#018B3C"/>
    </svg>
    `;
  const Svg = () => <SvgXml xml={svg} width="32" height="32" />;
  return <Svg />;
}

function ViewSVG() {
  const svg = `
    <svg width="34" height="26" viewBox="0 0 34 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32.4083 10.9236C33.1972 11.9556 33.1972 13.3487 32.4083 14.379C29.9232 17.6231 23.9611 24.3026 17.0003 24.3026C10.0394 24.3026 4.07728 17.6231 1.59223 14.379C1.20837 13.8849 1 13.277 1 12.6513C1 12.0256 1.20837 11.4177 1.59223 10.9236C4.07728 7.67953 10.0394 1 17.0003 1C23.9611 1 29.9232 7.67953 32.4083 10.9236V10.9236Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M17.0003 17.6446C19.758 17.6446 21.9937 15.4089 21.9937 12.6511C21.9937 9.89334 19.758 7.65771 17.0003 7.65771C14.2425 7.65771 12.0068 9.89334 12.0068 12.6511C12.0068 15.4089 14.2425 17.6446 17.0003 17.6446Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `;
  const Svg = () => <SvgXml xml={svg} width="32" height="32" />;
  return <Svg />;
}

function WithoutGoalsSVG() {
  const svg = `
  <svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M56.3428 53.6347C50.1069 49.3955 42.0771 48.0141 34.7099 49.9202C32.7692 50.4449 34.1938 54.9845 36.0094 54.5217C42.7929 52.7952 49.3451 54.7243 53.4649 57.5174C54.9959 58.5955 57.8824 54.7071 56.3428 53.6347Z" fill="#B0B0B0"/>
  <path d="M71.4222 24.4922L71.2224 24.1946L70.8846 24.0753C65.3789 22.1261 58.4761 21.9176 52.6283 23.5535L52.2776 23.6513L52.0591 23.9416C50.4941 25.9965 49.6481 28.5088 49.6513 31.0918C49.6513 37.6453 54.9829 42.977 61.5365 42.977C68.0915 42.977 73.4246 37.6453 73.4246 31.0918C73.4257 28.7421 72.7287 26.4451 71.4222 24.4922ZM61.5351 40.8193C58.9557 40.8163 56.4829 39.7903 54.659 37.9664C52.8351 36.1425 51.8091 33.6697 51.8061 31.0903C51.8061 29.2934 52.3207 27.5771 53.2579 26.0504C53.2321 26.2574 53.1846 26.4544 53.1846 26.6686C53.1846 28.1021 53.7541 29.4768 54.7677 30.4905C55.7813 31.5041 57.1561 32.0736 58.5896 32.0736C60.0231 32.0736 61.3979 31.5041 62.4115 30.4905C63.4252 29.4768 63.9946 28.1021 63.9946 26.6686C63.9946 25.9829 63.8509 25.336 63.6166 24.7337C65.7829 24.9249 67.8931 25.3403 69.8194 25.9872C70.7672 27.5204 71.2681 29.2878 71.2655 31.0903C71.2625 33.6699 70.2363 36.143 68.4121 37.9669C66.5879 39.7908 64.1147 40.8167 61.5351 40.8193Z" fill="#B0B0B0"/>
  <path d="M42.3502 31.0918C42.3535 28.742 41.6569 26.4444 40.3492 24.4922L40.1493 24.1946L39.8115 24.0753C34.3059 22.1261 27.403 21.9176 21.5553 23.5535L21.2045 23.6513L20.9846 23.9416C19.4197 25.9965 18.5736 28.5088 18.5768 31.0918C18.5768 37.6453 23.9085 42.977 30.462 42.977C37.017 42.9756 42.3502 37.6453 42.3502 31.0918ZM30.462 40.8193C27.8827 40.8163 25.4098 39.7903 23.586 37.9664C21.7621 36.1425 20.7361 33.6697 20.733 31.0903C20.733 29.2934 21.2477 27.5771 22.1849 26.0504C22.159 26.2574 22.1116 26.4544 22.1116 26.6686C22.1116 28.1021 22.6811 29.4768 23.6947 30.4905C24.7083 31.5041 26.0831 32.0736 27.5166 32.0736C28.9501 32.0736 30.3249 31.5041 31.3385 30.4905C32.3521 29.4768 32.9216 28.1021 32.9216 26.6686C32.9216 25.9829 32.7779 25.336 32.5435 24.7337C34.7099 24.9249 36.8201 25.3403 38.7463 25.9872C39.6942 27.5204 40.195 29.2878 40.1925 31.0903C40.1939 36.4551 35.8297 40.8193 30.462 40.8193Z" fill="#B0B0B0"/>
  <path d="M46 2.875C23.7633 2.875 5.75 20.8912 5.75 43.125C5.74754 50.3128 7.68167 57.3686 11.3491 63.5504C10.7856 64.8384 10.2796 66.2069 10.212 67.9305C10.1976 68.2223 10.1789 68.5371 10.1588 68.8706C9.96475 71.8276 9.67869 76.2968 13.6318 81.8987C16.1834 85.5097 20.1451 87.8816 25.0873 88.7498C26.8396 89.056 28.6336 89.1739 30.5814 89.1092C33.7683 88.9999 36.0051 88.8849 37.2298 86.6611C38.2677 84.7794 37.0731 83.5921 37.9586 82.5556C40.605 83.0964 43.2989 83.3708 46 83.375C68.2367 83.375 86.25 65.3588 86.25 43.125C86.25 20.8912 68.2367 2.875 46 2.875ZM35.9533 83.3304C36.3515 85.7728 34.9629 88.0814 25.5803 86.388C10.1401 83.6021 11.1881 68.9942 13.6821 63.7316C15.5135 59.8661 15.2346 58.2216 14.1766 53.4233C13.2149 49.0691 21.4403 51.0399 21.6761 56.2609C21.85 60.1335 20.3593 62.1086 22.2151 63.8121C26.3638 67.6214 38.3338 65.5342 46.4255 63.8178C49.887 63.0833 51.6666 66.5936 49.1007 68.3819C46.3579 70.2981 43.1509 71.0758 38.4071 71.4236C35.9303 71.6033 38.7248 72.4011 38.3367 74.7529C38.1254 76.0437 36.7727 75.9992 36.8244 77.3418C36.8518 78.0563 38.3252 78.8081 37.3233 80.6049C37.0257 81.1411 35.6946 81.7564 35.9533 83.3304ZM46 79.7812C43.792 79.7812 41.6343 79.5699 39.5327 79.1919C39.4644 78.7753 39.3295 78.3724 39.1331 77.9987C38.5911 76.9379 41.2864 75.8425 40.1911 72.9934C44.298 72.3192 47.3527 71.5271 50.1831 69.9186C53.2263 68.1892 53.3284 66.3047 53.1199 65.3358C52.7663 63.7215 51.1017 62.3904 48.9699 62.0166C48.1668 61.8688 47.342 61.8869 46.5463 62.0698C42.0541 63.1594 31.303 64.6271 25.8649 63.6726C24.3369 63.4024 23.8381 63.0387 23.6972 62.8949C22.908 62.1029 23.0575 60.5877 23.4442 57.454C23.9186 53.6015 20.4571 49.4946 17.388 48.9555L17.1911 48.9224C15.4977 48.7097 13.9869 49.197 13.0468 50.2651C11.9945 51.4524 11.7588 53.2277 12.3956 55.1281C12.8973 56.6217 13.0108 57.8206 12.9131 58.8872C10.5592 53.9663 9.3395 48.5799 9.34375 43.125C9.34375 33.0223 13.4521 23.8611 20.0862 17.2241C20.1998 17.2558 20.3047 17.2557 20.3924 17.2026C22.8197 15.7921 25.5282 14.9342 28.3249 14.69C31.1216 14.4457 33.9378 14.8212 36.5729 15.7895C37.3089 16.0741 38.4819 13.3702 37.5834 13.0295C34.1192 11.7665 30.393 11.3948 26.7476 11.9485C32.5275 8.36009 39.1968 6.46185 46 6.46875C56.1531 6.46875 65.3545 10.6217 72.0001 17.3132C68.9692 16.2135 65.7339 15.7925 62.5226 16.0799C59.3112 16.3673 56.2021 17.3561 53.4146 18.9764C52.5924 19.4681 54.2153 21.9219 54.8938 21.5179C57.3208 20.1068 60.0291 19.2481 62.8259 19.0032C65.6226 18.7582 68.4389 19.1329 71.0743 20.1006C71.691 20.3406 72.5981 18.4992 72.3537 17.6856C78.7247 24.2837 82.6562 33.2508 82.6562 43.125C82.6562 63.3377 66.2127 79.7812 46 79.7812Z" fill="#B0B0B0"/>
  </svg>
    `;
  const Svg = () => <SvgXml xml={svg} width="92" height="92" />;
  return <Svg />;
}

export default function HomeScreen() {
  const [balanceVisibility, setBalanceVisibility] = useState(false);
  const [hours, setHours] = useState(0);
  const { goalValue, handleGoalValue } = useGoal();
  const [modalInputVisibility, setModalInputVisibility] = useState(false);
  const [modalOutputVisibility, setModalOutputVisibility] = useState(false);
  const [name, setName] = useState('');
  const [balance, setBalance] = useState(0);

  const navigation = useNavigation();

  function handleSetBalanceVisibility() {
    setBalanceVisibility(!balanceVisibility);
  }

  function handleSetModalInputVisibility() {
    setModalInputVisibility(!modalInputVisibility);
  }

  function handleSetModalOutputVisibility() {
    setModalOutputVisibility(!modalOutputVisibility);
  }

  function addGoalValue(value: string) {
    const numeredValue = Number(value);
    if (numeredValue > 0) {
      const oldGoal = goalValue;
      const newGoal = oldGoal + numeredValue;
      handleGoalValue(newGoal);
    }
  }

  function removeGoalValue(value: string) {
    const numeredValue = Number(value);
    if (numeredValue > 0) {
      const oldGoal = goalValue;
      const newGoal = oldGoal - numeredValue;
      handleGoalValue(newGoal);
    }
  }

  useFocusEffect(
    useCallback(() => {
      if (navigation.isFocused()) {
        const result = getHours(new Date().getTime()) - 3;
        setHours(result);
        getInfoFromDatabase();
      }
    }, []),
  );

  async function getInfoFromDatabase() {
    try {
      const value = await AsyncStorage.getItem('@riches:id_usuario');
      const result = await api.get(`http://${ip}:3000/usuarios/${value}`);
      setName(result.data.nome);
      setBalance(Number(result.data.saldo));
    } catch (error) {
      console.log(error);
    }
  }

  function getDescriptionHours() {
    if (hours >= 6 && hours < 12) {
      return <S.Welcome>Bom dia</S.Welcome>;
    }
    if (hours >= 12 && hours < 19) {
      return <S.Welcome>Boa tarde</S.Welcome>;
    }
    return <S.Welcome>Boa noite</S.Welcome>;
  }

  return (
    <S.Container>
      <S.WrapperTitle>
        <S.WrapperFirstLine>
          <S.WrapperHelloName>
            <HelloSVG />
            <S.Name>{name}</S.Name>
          </S.WrapperHelloName>
          <TouchableOpacity onPress={handleSetBalanceVisibility}>
            {balanceVisibility == true ? <CloseViewSVG /> : <ViewSVG />}
          </TouchableOpacity>
        </S.WrapperFirstLine>
        {getDescriptionHours()}
      </S.WrapperTitle>
      <S.WrapperCardBalance>
        <CardBalance
          balance={balance}
          currency={balance}
          percentage={0}
          visibleLine={balanceVisibility}
        />
      </S.WrapperCardBalance>
      <S.ButtonsBalance>
        <S.ButtonBalance onPress={() => handleSetModalInputVisibility()}>
          <S.TitleButtonBalanceUp>Entrada</S.TitleButtonBalanceUp>
        </S.ButtonBalance>
        <S.ButtonBalance onPress={() => handleSetModalOutputVisibility()}>
          <S.TitleButtonBalanceDown>Saída</S.TitleButtonBalanceDown>
        </S.ButtonBalance>
      </S.ButtonsBalance>
      <S.GoalsHeader>
        <S.GoalsHeaderFirstLine>
          <S.GoalTitle>Metas</S.GoalTitle>
          <TouchableOpacity>
            <S.GoalsSeeAll>Veja todos</S.GoalsSeeAll>
          </TouchableOpacity>
        </S.GoalsHeaderFirstLine>
        <S.GoalsSubtitle>Principais metas</S.GoalsSubtitle>
      </S.GoalsHeader>
      <S.Goals>
        {teste == [] ? (
          <S.WrapperWithoutGoals>
            <WithoutGoalsSVG />
            <S.WithoutGoalsText>
              Você não possui metas registradas
            </S.WithoutGoalsText>
          </S.WrapperWithoutGoals>
        ) : (
          <S.ListGoals
            data={teste}
            renderItem={({ item }) => (
              <View style={{ backgroundColor: 'red' }}>
                <Text style={{ height: 100, padding: 20 }}>{item.valor}</Text>
              </View>
            )}
          />
        )}
      </S.Goals>
      <ModalInput
        sendData={addGoalValue}
        visible={modalInputVisibility}
        closeModal={() => handleSetModalInputVisibility()}
      />
      <ModalOutput
        sendData={removeGoalValue}
        visible={modalOutputVisibility}
        closeModal={() => handleSetModalOutputVisibility()}
      />
      <StatusBar style="auto" />
    </S.Container>
  );
}
