import React from 'react';
import {
  ContainerCard,
  ContainerInformations,
  GradientOverlay,
  ImageBackgroud,
  SubText,
  Text,
} from './styles.ts';
import plate from '../../assets/prato1.png';
import favorite from '../../assets/favorite.png';
import food1 from '../../assets/food1.png';
import food2 from '../../assets/food2.png';
import LinearGradient from 'react-native-linear-gradient';
import {ImageSourcePropType} from 'react-native';
import {Navigation} from '../../../src/services/navigation/index.ts';

type CardRecipeProps = {
  recipeName: string;
  cheff: string;
  image: ImageSourcePropType;
};

export const CardRecipe: React.FC<CardRecipeProps> = ({
  recipeName,
  cheff,
  image,
}) => {
  return (
    <ContainerCard onPress={() => Navigation.navigate('Recipe')}>
      <ImageBackgroud source={image}>
        <LinearGradient
          colors={['transparent', 'rgba(0, 0, 0, 0.8)']}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          style={{flex: 1, borderRadius: 12}}>
          <ContainerInformations>
            <Text>{recipeName}</Text>
            <SubText>By {cheff}</SubText>
          </ContainerInformations>
        </LinearGradient>
      </ImageBackgroud>
    </ContainerCard>
  );
};
