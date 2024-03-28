import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {Button} from 'react-native';
import {Navigation} from '../../src/services/navigation';

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="Tab1">
        {() => (
          <Button title="Button" onPress={() => Navigation.navigate('User')} />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

export default AuthStack;
