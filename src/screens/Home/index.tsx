import React from 'react';
import {Container, Title} from './styles';
import {Navigation} from '../../services/navigation';
import {Button} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const Home = () => {
  return (
    <Container>
      <Title>Testes de fonte</Title>
      <Button title="Button" onPress={() => Navigation.navigate('Home')} />
      <AntDesign name="caretup" size={30} />
    </Container>
  );
};
