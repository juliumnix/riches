import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import * as S from './styles';
import CardBalance from '../../components/CardBalance';
import { SvgXml } from 'react-native-svg';
import { TouchableOpacity } from 'react-native';
import { getHours } from 'date-fns';
import { useGoal } from '../../../hooks/goal';
import api from '../../../utils/api';

export default function HomeScreen() {
  const [balanceVisibility, setBalanceVisibility] = useState(false);
  const [hours, setHours] = useState(0);
  const { goalValue } = useGoal();

  function handleSetBalanceVisibility() {
    setBalanceVisibility(!balanceVisibility);
  }

  useEffect(() => {
    const result = getHours(new Date().getTime()) - 3;
    setHours(result);
  }, []);

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
            <S.Name>Usuário</S.Name>
          </S.WrapperHelloName>
          <TouchableOpacity onPress={handleSetBalanceVisibility}>
            {balanceVisibility == true ? <CloseViewSVG /> : <ViewSVG />}
          </TouchableOpacity>
        </S.WrapperFirstLine>
        {getDescriptionHours()}
      </S.WrapperTitle>
      <S.WrapperCardBalance>
        <CardBalance
          balance={goalValue}
          currency={0}
          percentage={45}
          visibleLine={balanceVisibility}
        />
      </S.WrapperCardBalance>

      <StatusBar style="auto" />
    </S.Container>
  );
}
