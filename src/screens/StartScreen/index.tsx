import React from 'react';
import {
  Avatar,
  Container,
  ContainerInfo,
  ContainerView,
  ImageBackgroud,
  SubTitle,
  Title,
} from './styles';
import backgroud from '../../assets/backgroud.png';
import logo from '../../assets/logo.png';
import arrow from '../../assets/arrow.png';
import {Navigation} from '../../services/navigation';
import {ButtonCustom} from 'components/Button';

export const StartScreen = () => {
  return (
    <Container>
      <ImageBackgroud source={backgroud}>
        <ContainerView>
          <Avatar source={logo} />
          <ContainerInfo>
            <Title>Get Cooking</Title>
            <ButtonCustom name="Start Cooking" icon={arrow} />
          </ContainerInfo>
        </ContainerView>
      </ImageBackgroud>
    </Container>
  );
};
