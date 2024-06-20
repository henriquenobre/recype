import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import {Home} from 'screens/Home';

const Stack = createStackNavigator();

function ProfileStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default ProfileStack;
