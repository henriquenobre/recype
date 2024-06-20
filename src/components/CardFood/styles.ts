import {Image} from 'react-native';
import styled from 'styled-components/native';
import {sizeDimensions} from 'theme/utils';

export const ContainerCard = styled.TouchableOpacity`
  width: 170px;
  border-radius: 12px;
  background-color: ${({theme}) => theme.COLORS.GRAY5};

  justify-content: center;
  align-items: center;
  padding: 12px;
  margin-left: 12px;
`;

export const ContainerImage = styled.View`
  margin-top: -60px;
`;

export const Avatar = styled(Image)``;

export const ContainerText = styled.View`
  margin-bottom: 26px;
`;

export const Text = styled.Text`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`;

export const ContainerCardBottom = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContainerTime = styled.View`
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
`;

export const TextTime = styled(Text)`
  font-weight: 400;
  color: ${({theme}) => theme.COLORS.GRAY3};
`;

export const ContainerFavorite = styled.View`
  width: ${sizeDimensions(50)}px;
  height: ${sizeDimensions(50)}px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.COLORS.WHITE};
`;
