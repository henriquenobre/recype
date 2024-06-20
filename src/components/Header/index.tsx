import React from 'react';
import {
  Avatar,
  ContainerAvatar,
  ContainerHeader,
  ContainerTitle,
  SubTitle,
  Title,
} from './styles';
import myAvatar from '../../assets/avatar.png';

export function Header() {
  return (
    <ContainerHeader>
      <ContainerTitle>
        <Title>Hello Lázaro </Title>
        <SubTitle>What are you cooking today? </SubTitle>
      </ContainerTitle>
      <ContainerAvatar>
        <Avatar source={myAvatar} />
      </ContainerAvatar>
    </ContainerHeader>
  );
}
