import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {Button, View} from 'react-native';
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
      <Stack.Screen
        name="tab1"
        component={() => (
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Button
              title="Navegar Para Tab"
              onPress={() => Navigation.navigate('Home')}
            />
          </View>
        )}
      />
    </Stack.Navigator>
  );
}

export default AuthStack;
