import {Image, ImageBackgroundProps, ImageProps} from 'react-native';
import styled from 'styled-components/native';
import {sizeDimensions, responsiveFont} from 'theme/utils';
import Entypo from 'react-native-vector-icons/Entypo';

export const ContainerCard = styled.View`
  width: 100%;
  height: ${sizeDimensions(190)}px;
  border-radius: 12px;
  overflow: hidden;
`;

export const ImageBackgroud = styled.ImageBackground<ImageBackgroundProps>`
  flex: 1;
`;

export const ContainerInfo = styled.View`
  height: 100%;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const ContainerTime = styled.View`
  flex-direction: row;
  padding: 10px;

  justify-content: center;
  align-items: center;
`;

export const Avatar = styled(Image)<ImageProps>``;

export const StyledIcon = styled(Entypo)`
  color: white;
  font-size: 25px;
`;

export const Text = styled.Text`
  font-weight: 500;
  font-size: ${responsiveFont(11)}px;
  color: white;

  margin-left: 7px;
`;
