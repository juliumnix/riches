import React from 'react';
import { View, Text } from 'react-native';

import * as S from './styles';

type CryptoTileProps = {
  title: string;
  valueTotal: string;
  slug: string;
  growth: string;
  images: string;
};

const CryptoTile = ({
  title,
  valueTotal,
  slug,
  growth,
  images,
}: CryptoTileProps) => {
  return (
    <S.Container>
      <S.Image
        source={{
          uri: images,
        }}
      />
      <View style={{ width: '80%' }}>
        <S.WrapperContent>
          <S.TitleCard>{title}</S.TitleCard>
          <S.TitleCard>R$: {valueTotal}</S.TitleCard>
        </S.WrapperContent>
        <S.Separator />
        <S.WrapperContent>
          <S.SubTitleCard>{slug}</S.SubTitleCard>
          {Number(growth) > 0 ? (
            <S.GreenValue>R$: {growth}</S.GreenValue>
          ) : (
            <S.RedValue>R$: {growth}</S.RedValue>
          )}
        </S.WrapperContent>
      </View>
    </S.Container>
  );
};

export default CryptoTile;
