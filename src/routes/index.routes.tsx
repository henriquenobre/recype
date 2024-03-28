import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import AuthStack from './auth.routes';
import {NavigationContainer} from '@react-navigation/native';
import {HomeTabs} from './homeTabs.routes';
import {navigationRef} from '../services/navigation';

const Stack = createStackNavigator();

function RootStack() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen name="AuthScreen" component={AuthStack} />
        <Stack.Screen name="Home" component={HomeTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;
