import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  /* background-color: ${({theme}) => theme.COLORS.BACKGROUD};
  align-items: center;
  justify-content: center; */
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY2};
  font-size: 40px;
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
`;
