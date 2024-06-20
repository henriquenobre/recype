import {Image, TextInput, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {responsiveSize, sizeDimensions} from 'theme/utils';

export const ContainerFilter = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
`;

export const ContarinerSearch = styled.View`
  flex-direction: row;

  align-items: center;
  width: 280px;
  height: 50px;

  border-radius: 10px;
  border: 1.3px;
  border-color: ${({theme}) => theme.COLORS.GRAY4};

  background-color: white;
`;

export const IconSearch = styled(Image)`
  width: 20px;
  height: 20px;

  margin-right: 10px;
  margin-left: 10px;
`;

export const InputSearch = styled(TextInput)`
  width: 100%;
  height: 100%;
`;

export const ButtonFilter = styled(TouchableOpacity)`
  width: ${sizeDimensions(50)}px;
  height: ${sizeDimensions(50)}px;

  border-radius: 10px;

  justify-content: center;
  align-items: center;

  background-color: ${({theme}) => theme.COLORS.PRIMARY100};
`;

export const ImageFilter = styled(Image)``;
