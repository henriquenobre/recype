import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {Text} from 'react-native';

const Stack = createStackNavigator();

function ProfileStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="User">{() => <Text>Teste User</Text>}</Stack.Screen>
    </Stack.Navigator>
  );
}

export default ProfileStack;
