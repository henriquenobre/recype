import React from 'react';
import {TextButon, Button, Avatar} from './styles';
import arrow from '../../assets/arrow.png';
import {Navigation} from '../../services/navigation';
import {ImageSourcePropType} from 'react-native';

type ButtonCustomProps = {
  name: string;
  icon: ImageSourcePropType;
};


export const ButtonCustom: React.FC<ButtonCustomProps> = ({name, icon}) => {
  return (
    <Button onPress={() => Navigation.navigate('Home')}>
      <TextButon>{name}</TextButon>
      <Avatar source={icon} />
    </Button>
  );
};
