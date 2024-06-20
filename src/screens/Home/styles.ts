import {TouchableOpacity} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import {responsiveSize} from 'theme/utils';

interface StyledComponentProps {
  check?: boolean;
}

export const Container = styled.View`
  flex: 1;
  margin-top: ${responsiveSize(8)}px;

  padding-left: ${responsiveSize(3)}px;
  padding-right: ${responsiveSize(3)}px;
  padding-bottom: ${responsiveSize(18)}px;;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY2};
  font-size: 40px;
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
`;

export const ContainerCategory = styled.View`
  flex-direction: row;
  margin-top: 20px;
  white-space: break-spaces;
  margin-bottom: ${responsiveSize(3)}px;
`;

export const CategoryButton = styled(TouchableOpacity)<StyledComponentProps>`
  width: 84px;
  height: 41px;
  border-radius: 20px;
  margin-right: 15px;

  /* background-color: ${({theme}) => theme.COLORS.PRIMARY100}; */
  background-color: ${props =>
    props.check ? props.theme.COLORS.PRIMARY100 : props.theme.COLORS.WHITE};

  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text<StyledComponentProps>`
  color: ${props =>
    props.check ? props.theme.COLORS.WHITE : props.theme.COLORS.PRIMARY80};
  font-size: 14px;
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  font-weight: bold;
`;

export const TextHome = styled.Text`
  color: ${props => props.theme.COLORS.BLACK};
  font-size: 22px;
  font-weight: 600;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const ContainerCardFood = styled.View`
  flex-direction: row;
  gap: 10px;
`;

export const ContainerRecipes = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
`;
