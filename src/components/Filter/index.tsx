import React from 'react';
import {
  ButtonFilter,
  CategoryButton,
  ContainerFilter,
  ContarinerSearch,
  IconSearch,
  ImageFilter,
  InputSearch,
} from './styles';
import search from '../../assets/search.png';
import filter from '../../assets/filter.png';
import {RectButton} from 'react-native-gesture-handler';

export function Filter() {
  return (
    <ContainerFilter>
      <ContarinerSearch>
        <IconSearch source={search} />
        <InputSearch placeholder="Search recipe" />
      </ContarinerSearch>
      <ButtonFilter>
        <ImageFilter source={filter} />
      </ButtonFilter>
    </ContainerFilter>
  );
}
