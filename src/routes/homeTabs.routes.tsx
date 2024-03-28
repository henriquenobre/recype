import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import ProfileStack from './profile.routes';

const Tab = createBottomTabNavigator();

export function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarItemStyle: {
          width: 'auto',
        },
        tabBarLabelStyle: {},
      }}>
      <Tab.Screen name="Home">{() => <Text>Teste Tab1</Text>}</Tab.Screen>
      <Tab.Screen name="Pedido" component={ProfileStack} />
      <Tab.Screen name="Novo" component={ProfileStack} />
      <Tab.Screen name="Pedidos" component={ProfileStack} />
      <Tab.Screen name="Pedid" component={ProfileStack} />
    </Tab.Navigator>
  );
}
