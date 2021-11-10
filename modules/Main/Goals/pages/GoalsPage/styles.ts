import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding-top: 50px;
  background-color: #fafafa;
  padding-right: 20px;
  padding-left: 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 30px;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: #1c1c1c;
`;

export const WrapperTitle = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Separator = styled.View`
  width: 20px;
  height: 20px;
`;

export const ImageItem = styled.ImageBackground`
  width: ${Dimensions.get('screen').width / 2 - 40}px;
  height: ${Dimensions.get('screen').height / 6}px;
`;

export const EmptyListWrapper = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const EmptyListTitle = styled.Text`
  font-weight: bold;
  color: #b0b0b0;
  font-size: 18px;
`;

export const EmptyListSubtitleWrapper = styled.View`
  flex-direction: row;
  padding-top: 5px;
`;

export const EmptyListSubtitle = styled.Text`
  font-weight: bold;
  color: #b0b0b0;
  font-size: 18px;
  padding-right: 5px;
`;

export const ImageDetails = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding-left: 10px;
`;

export const ImageTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;
