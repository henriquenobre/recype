import {
  Image,
  ImageBackgroundProps,
  ImageProps,
  TouchableOpacityProps,
} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const ImageBackgroud = styled.ImageBackground<ImageBackgroundProps>`
  flex: 1;
`;

export const ContainerView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

export const ContainerInfo = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: white;
  line-height: 60px;
  font-size: 50px;
  font-weight: 600;
  text-align: center;
  padding: 62px;
`;

export const SubTitle = styled.Text`
  color: white;
  line-height: 24px;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
`;

export const Avatar = styled(Image)<ImageProps>``;
