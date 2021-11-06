import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
  Modal,
  ScrollView,
  Dimensions,
} from 'react-native';
import Svg, { Defs, Path, ClipPath, Use } from 'react-native-svg';

import api from '../../../utils/api';

import unsplash from '../../images/unsplash.png';

import * as S from './styles';
import { SvgXml } from 'react-native-svg';

function ArrowSVG() {
  const svg = `
<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 15L25 15" stroke="#018B3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.25 6.25L25 15L16.25 23.75" stroke="#018B3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`;
  const Svg = () => <SvgXml xml={svg} width="32" height="32" />;
  return <Svg />;
}

function UnsplashSVG() {
  const svg = `
<svg width="458" height="105" viewBox="0 0 458 105" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_135:582)">
<path d="M59.9 38.7H87.4V87.4H0V38.7H27.5V63H59.8V38.7H59.9ZM152.9 63.6C152.9 71.9 147.5 76.7 140 76.7C132.7 76.7 127.2 71.8 127.2 63.6V24.4H115V63.5C115 78.9 126 88.7 140.1 88.7C154.3 88.7 165.2 78.9 165.2 63.5V24.4H153V63.6H152.9ZM196.6 42.5C191.9 42.5 186.7 44.5 184 49.1V43.7H172.6V87.4H184.4V62.2C184.4 57.1 187.4 53.1 192.6 53.1C198.3 53.1 200.7 56.9 200.7 61.8V87.3H212.5V59.8C212.4 50.2 207.4 42.5 196.6 42.5ZM239.9 60.9C239.9 60.9 235.9 60.1 233.4 59.6C230.9 59.1 229.4 57.8 229.4 55.7C229.4 53.2 231.6 51.4 234.7 51.4C239.1 51.4 240.8 53.6 241.2 56.3H251.4C251.3 50.3 246.6 42.5 234.9 42.5C225.5 42.5 218.6 49 218.6 56.8C218.6 62.9 222.4 68 230.8 69.8L236.8 71.1C240.2 71.8 241.5 73.4 241.5 75.4C241.5 77.7 239.4 79.7 235.5 79.7C230.8 79.7 228.2 77 227.6 73.9H217.1C217.7 80.4 222.4 88.7 235.6 88.7C247 88.7 252.8 81.4 252.8 74.3C252.9 67.9 248.5 62.7 239.9 60.9ZM303.1 65.4C303.1 78.6 294.8 88.4 282.5 88.4C276.5 88.4 272 86 269.9 83.1V104.2H258.1V43.7H269.5V49.1C271.5 45.7 276.3 42.7 282.9 42.7C295.7 42.7 303.1 52.5 303.1 65.4ZM291.5 65.5C291.5 57.8 286.7 53.3 280.7 53.3C274.7 53.3 269.8 57.8 269.8 65.5C269.8 73.2 274.7 77.8 280.7 77.8C286.7 77.8 291.5 73.3 291.5 65.5ZM359.5 43.7H370.9V87.4H359.1V82C357.1 85.5 352.5 88.4 346.5 88.4C334.2 88.4 325.9 78.6 325.9 65.4C325.9 52.4 333.3 42.7 346 42.7C352.6 42.7 357.3 45.7 359.4 49.1V43.7H359.5ZM359.3 65.5C359.3 57.8 354.4 53.3 348.4 53.3C342.4 53.3 337.6 57.8 337.6 65.5C337.6 73.3 342.4 77.8 348.4 77.8C354.4 77.8 359.3 73.2 359.3 65.5ZM308.6 87.3H320.4V24.4H308.6V87.3ZM441 42.5C436.8 42.5 432 43.9 429.2 47.3V24.4H417.4V87.3H429.2V61.7C429.5 56.9 432.4 53.2 437.4 53.2C443.1 53.2 445.5 57 445.5 61.9V87.4H457.3V59.9C457.2 50.2 452.1 42.5 441 42.5ZM399 60.9C399 60.9 395 60.1 392.5 59.6C390 59.1 388.5 57.8 388.5 55.7C388.5 53.2 390.7 51.4 393.8 51.4C398.2 51.4 399.9 53.6 400.3 56.3H410.5C410.4 50.3 405.7 42.5 394 42.5C384.6 42.5 377.7 49 377.7 56.8C377.7 62.9 381.5 68 389.9 69.8L395.9 71.1C399.3 71.8 400.6 73.4 400.6 75.4C400.6 77.7 398.5 79.7 394.6 79.7C389.9 79.7 387.3 77 386.7 73.9H376.2C376.8 80.4 381.5 88.7 394.7 88.7C406.1 88.7 411.9 81.4 411.9 74.3C412 67.9 407.6 62.7 399 60.9ZM59.9 0H27.5V24.4H59.8V0H59.9Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_135:582">
<rect width="457.2" height="104.2" fill="white"/>
</clipPath>
</defs>
</svg>
`;
  const Svg = () => <SvgXml xml={svg} width="150" height="32" />;
  return <Svg />;
}

type PhotoProps = {
  id: string;
  urls: {
    regular: string;
  };
};

type SearchProps = {
  id: string;
  image: string;
};

type SearchPhotoProps = {
  visible: boolean;
  onClose: () => void;
  onPressItem: (item: string) => void;
};

const SearchPhoto = ({ visible, onClose, onPressItem }: SearchPhotoProps) => {
  const [photos, setPhotos] = useState([] as SearchProps[]);
  const [search, setSearch] = useState('');

  async function searchPhoto() {
    const response = await api.get(
      `?page=1&query=${search}&client_id=BcnC6FQ7-O_azu18-Jgr4AVqvDI4b2d3OzYf2wckZ9w`,
    );
    const mappedPhotos = response.data.results.map((photo: PhotoProps) => {
      return {
        id: photo.id,
        image: photo.urls.regular,
      };
    });

    setPhotos(mappedPhotos);
  }

  function clearData() {
    setSearch('');
    setPhotos([]);
  }
  return (
    <Modal
      transparent
      animationType="slide"
      onRequestClose={() => {
        onClose();
      }}
      visible={visible}
    >
      <S.ContainerModal>
        <S.CloseModal
          onPress={() => {
            onClose();
            clearData();
          }}
        />
        <S.Container>
          <S.Header>
            <S.HeaderTitle>Adicione uma imagem</S.HeaderTitle>
          </S.Header>

          <S.WrapperInput>
            <S.Input onChangeText={text => setSearch(text)} />
          </S.WrapperInput>

          <S.WrapperImages>
            <FlatList
              keyExtractor={photo => photo.id}
              data={photos}
              numColumns={2}
              ItemSeparatorComponent={() => <S.Separator />}
              columnWrapperStyle={{ justifyContent: 'space-between' }}
              style={{ width: '100%' }}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    onPressItem(item.image);
                    onClose();
                    clearData();
                  }}
                >
                  <S.ImageItem source={{ uri: item.image }} />
                </TouchableOpacity>
              )}
            />
          </S.WrapperImages>
          <S.WrapperFooter>
            <UnsplashSVG />
            <TouchableOpacity onPress={searchPhoto}>
              <ArrowSVG />
            </TouchableOpacity>
          </S.WrapperFooter>
        </S.Container>
      </S.ContainerModal>
    </Modal>
  );
};

export default SearchPhoto;
