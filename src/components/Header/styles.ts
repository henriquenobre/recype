import styled from 'styled-components/native';
import {Image} from 'react-native';
import {responsiveFont, responsiveSize, sizeDimensions} from 'theme/utils';

export const ContainerHeader = styled.View`
  flex-direction: row;

  justify-content: space-between;
  align-items: center;
`;

export const ContainerTitle = styled.View``;

export const Title = styled.Text`
  color: ${({theme}) => theme.COLORS.BLACK};
  font-size: ${responsiveFont(16)}px;
  font-weight: 600;
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  margin-bottom: ${responsiveFont(10)}px;
`;
export const SubTitle = styled(Title)`
  color: ${({theme}) => theme.COLORS.GRAY3};
  font-weight: 400;

  font-size: ${responsiveFont(14)}px;
`;

export const ContainerAvatar = styled.View`
  width: ${sizeDimensions(50)}px;
  height: ${sizeDimensions(50)}px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.COLORS.SECONDARY40};
`;

export const Avatar = styled(Image)``;
