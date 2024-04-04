import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {Button} from 'react-native';
import {Navigation} from '../../src/services/navigation';
import {Home} from 'screens/Home';

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="tab1" component={Home} />
    </Stack.Navigator>
  );
}

export default AuthStack;
