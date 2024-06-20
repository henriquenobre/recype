import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {Button, View} from 'react-native';
import {Navigation} from '../../src/services/navigation';
import {Home} from 'screens/Home';
import {StartScreen} from 'screens/StartScreen';

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="tab1" component={StartScreen} />
    </Stack.Navigator>
  );
}

export default AuthStack;

// <View
//   style={{
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   }}>
//   <Button
//     title="Navegar Para Tab"
//     onPress={() => Navigation.navigate('Home')}
//   />
// </View>
