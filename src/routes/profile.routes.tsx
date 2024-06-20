import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import {Home} from 'screens/Home';
import { Recipe } from 'screens/Recipe';

const Stack = createStackNavigator();

function ProfileStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Recipe" component={Recipe} />
    </Stack.Navigator>
  );
}

export default ProfileStack;
