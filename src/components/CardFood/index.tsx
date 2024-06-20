import React from 'react';
import {
  ContainerCard,
  Text,
  ContainerCardBottom,
  Avatar,
  ContainerImage,
  ContainerText,
  ContainerFavorite,
  ContainerTime,
  TextTime,
} from './styles.ts';
import plate from '../../assets/prato1.png';
import favorite from '../../assets/favorite.png';

export const CardFood = () => {
  return (
    <ContainerCard>
      <ContainerImage>
        <Avatar source={plate} />
      </ContainerImage>
      <ContainerText>
        <Text>Classic Greek Salad</Text>
      </ContainerText>
      <ContainerCardBottom>
        <ContainerTime>
          <TextTime>Time</TextTime>
          <Text>15 Mins</Text>
        </ContainerTime>
        {/* <ContainerFavorite></ContainerFavorite> */}
      </ContainerCardBottom>
    </ContainerCard>
  );
};
