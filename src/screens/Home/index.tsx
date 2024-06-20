import React from 'react';
import {
  CategoryButton,
  Container,
  ContainerCardFood,
  ContainerCategory,
  ContainerRecipes,
  Text,
  TextHome,
} from './styles';
import {Header} from 'components/Header';
import {Filter} from 'components/Filter';
import {ScrollView} from 'react-native-gesture-handler';
import {CardFood} from 'components/CardFood';
import {FlatList} from 'react-native';
import {CardRecipe} from 'components/CardRecipe';
import food1 from '../../assets/food1.png';
import food2 from '../../assets/food2.png';
import food3 from '../../assets/food3.png';
import food4 from '../../assets/food4.png';

export const Home = () => {
  const fakeData = [
    {
      name: 'ALL',
    },
    {name: 'Indian'},
    {name: 'Italian'},
    {name: 'Brasilian'},
  ];

  const recipes = [
    {
      recipeName: 'Traditional spare ribs baked',
      cheff: 'Chef John',
      image: food1,
    },
    {
      recipeName: 'Lamb chops with fruity couscous and mint',
      cheff: 'Spicy Nelly',
      image: food2,
    },
    {
      recipeName: 'spice roasted chicken with flavored rice',
      cheff: 'Mark Kelvin',
      image: food3,
    },
    {
      recipeName: 'Chinese style Egg fried rice with sliced',
      cheff: 'laura wilson',
      image: food4,
    },
    
  ];

  return (
    <ScrollView>
      <Container>
        <Header />
        <Filter />
        {/* <ContainerCategory>
          <FlatList
            horizontal
            data={fakeData}
            keyExtractor={item => item.name}
            renderItem={({item}) => (
              <CategoryButton check key={item.name}>
                <Text check>{item.name}</Text>
              </CategoryButton>
            )}
            showsHorizontalScrollIndicator={false}
          />
        </ContainerCategory>
        <ContainerCardFood>
          <FlatList
            horizontal
            data={fakeData}
            keyExtractor={item => item.name}
            renderItem={({}) => <CardFood />}
            contentContainerStyle={{paddingTop: 53}}
            showsHorizontalScrollIndicator={false}
          />
        </ContainerCardFood> */}
        <TextHome> Recent Search</TextHome>
        <ContainerRecipes>
          {recipes.map(recipe => (
            <CardRecipe
              key={recipe.recipeName}
              recipeName={recipe.recipeName}
              cheff={recipe.cheff}
              image={recipe.image}
            />
          ))}
        </ContainerRecipes>
      </Container>
    </ScrollView>
  );
};
