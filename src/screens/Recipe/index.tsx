import React from 'react';
import {
  Avatar,
  ContaineInforLocation,
  ContaineName,
  Container,
  ContainerInfor,
  ContainerProfile,
  RecipeName,
  StyledIcon,
  Text,
  TextLocation,
} from './styles';
import {CardFoodDetail} from 'components/CardFoodDetail';
import cheff from '../../assets/cheff.png';

export function Recipe() {
  return (
    <Container>
      <CardFoodDetail />
      <RecipeName>Spicy chicken burger with French fries</RecipeName>

      <ContainerProfile>
        <ContainerInfor>
          <Avatar source={cheff} />
          <ContaineName>
            <Text>Laura Wilson</Text>
            <ContaineInforLocation>
              <StyledIcon name="location-sharp" />
              <TextLocation>Lagos, Nigeria</TextLocation>
            </ContaineInforLocation>
          </ContaineName>
        </ContainerInfor>
      </ContainerProfile>
    </Container>
  );
}
