import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const ContainerModal = styled.View`
  flex: 1;
  background: rgba(0, 0, 0, 0.6);
  justify-content: flex-end;
`;

export const Container = styled.View`
  height: 60%;
  width: 100%;
  padding: 20px 25px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  background: #fafafa;
`;

export const CloseModal = styled.TouchableOpacity`
  height: 100%;
  width: 100%;
`;

export const Header = styled.View`
  justify-content: center;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  color: #018b3c;
  font-size: 22px;
  font-weight: 500;
  padding-bottom: 28px;
`;

export const WrapperInput = styled.View`
  background-color: #e3e3e3;
  height: 50px;
  justify-content: center;
  border-radius: 10px;
  border-width: 1px;
  border-color: #cccccc;
`;

export const Input = styled.TextInput.attrs({
  placeholder: 'O que deseja pesquisar',
})`
  color: #484848;
  padding-left: 10px;
  font-size: 16px;
`;

export const WrapperImages = styled.View`
  flex: 1;
  background-color: #fafafa;
  padding-top: 10px;
  align-items: center;
`;

export const Separator = styled.View`
  width: 20px;
  height: 20px;
`;

export const ImageItem = styled.Image`
  width: ${Dimensions.get('screen').width / 2 - 40}px;
  height: ${Dimensions.get('screen').height / 6}px;
  border-radius: 20px;
`;

export const WrapperFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
`;

export const LogoUnsplash = styled.Image`
  width: 45%;
  height: 47%;
`;

export const PlaceholderArrow = styled.Text`
  font-size: 50px;
`;
