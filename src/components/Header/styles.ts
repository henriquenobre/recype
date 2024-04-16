import styled from 'styled-components/native';
// import {StatusBarHeight} from 'utils/StatusBar';
import {Image} from 'react-native';

export const ContainerHeader = styled.View`
  /* background-color: red; */
  flex-direction: row;

  justify-content: space-between;
  align-items: center;
  padding-left: 22px;
  padding-right: 22px;
  margin-top: 70px;
`;

export const ContainerTitle = styled.View``;

export const Title = styled.Text`
  color: ${({theme}) => theme.COLORS.BLACK};
  font-size: 20px;
  font-weight: 600;
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  margin-bottom: 10px;
`;
export const SubTitle = styled(Title)`
  color: ${({theme}) => theme.COLORS.GRAY3};
  font-weight: 400;
  font-size: 16px;
`;

export const ContainerAvatar = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.COLORS.SECONDARY40};
`;

export const Avatar = styled(Image)``;
