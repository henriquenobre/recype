import { Image, ImageProps, TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';

export const Avatar = styled(Image)<ImageProps>``;

export const Button = styled.TouchableOpacity<TouchableOpacityProps>`
  width: 250px;
  border-radius: 12px;
  background-color: ${({theme}) => theme.COLORS.PRIMARY100};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 18px;
  margin-left: 12px;
  gap: 12px;
`;

export const TextButon = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`;
