import {Image} from 'react-native';
import styled from 'styled-components/native';
import {responsiveSize, responsiveFont} from 'theme/utils';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Container = styled.View`
  flex: 1;
  margin-top: ${responsiveSize(8)}px;
  padding-left: ${responsiveSize(3)}px;
  padding-right: ${responsiveSize(3)}px;
  padding-bottom: ${responsiveSize(18)}px;
`;

export const RecipeName = styled.Text`
  font-size: ${responsiveFont(14)}px;
  font-weight: 600;
  margin-left: 8px;
  margin-top: 15px;
  padding-right: 59px;

  /* background-color: red; */
`;

export const ContainerProfile = styled.View`
  width: 100%;
  margin-top: ${responsiveSize(2)}px;
`;
export const Avatar = styled(Image)`
  width: ${responsiveSize(10)}px;
  height: ${responsiveSize(10)}px;

  border-radius: 40px;
`;

export const ContainerInfor = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
  gap: ${responsiveSize(1)}px;
`;

export const ContaineName = styled.View`
  align-items: flex-start;
  gap: 5px;
`;

export const Text = styled.Text`
  font-size: ${responsiveFont(14)}px;
  font-weight: 600;
  margin-left: 8px;
`;

export const ContaineInforLocation = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const StyledIcon = styled(Ionicons)`
  color: ${props => props.theme.COLORS.PRIMARY80};
  font-size: 30px;
`;
export const TextLocation = styled.Text`
  font-weight: 400;
  color: ${props => props.theme.COLORS.GRAY3};
  font-size: ${responsiveFont(12)}px;
`;
