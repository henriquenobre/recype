import {ImageBackgroundProps} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import {responsiveFont, sizeDimensions} from 'theme/utils';

export const ContainerCard = styled.TouchableOpacity`
  width: 48%;
  height: ${sizeDimensions(190)}px;
  border-radius: 12px;
  overflow: hidden;
`;

export const ImageBackgroud = styled.ImageBackground<ImageBackgroundProps>`
  flex: 1;
`;

export const GradientOverlay = styled(LinearGradient)`
  flex: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 12px; // Garanta que siga o border-radius do ContainerCard
`;

export const ContainerInformations = styled.View`
  height: 100%;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 8px;
`;

export const Text = styled.Text`
  color: ${({theme}) => theme.COLORS.WHITE};
  font-size: ${responsiveFont(12)}px;
  font-weight: 600;
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  margin-bottom: ${responsiveFont(5)}px;
`;

export const SubText = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY3};
  font-size: ${responsiveFont(10)}px;
  font-weight: 600;
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  margin-bottom: ${responsiveFont(10)}px;
`;