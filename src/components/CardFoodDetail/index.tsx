import React from 'react';
import {ContainerCard, ImageBackgroud, ContainerInfo, ContainerTime, Avatar, StyledIcon, Text} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import food5 from '../../assets/food5.png';

export const CardFoodDetail = () => {
  return (
    <ContainerCard>
      <ImageBackgroud source={food5}>
        <LinearGradient
          colors={['transparent', 'rgba(0, 0, 0, 0.8)']}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          style={{flex: 1, borderRadius: 12}}>
            <ContainerInfo>
              <ContainerTime>
                <StyledIcon name='stopwatch'/>
                <Text>20 min</Text>
              </ContainerTime>
            </ContainerInfo>
          </LinearGradient>
      </ImageBackgroud>
    </ContainerCard>
  );
};
