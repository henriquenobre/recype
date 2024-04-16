import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text} from 'react-native';
import ProfileStack from './profile.routes';
import Products from 'screens/Products';
import Cart from 'screens/Cart';
import Favourites from 'screens/Favourites';
import Profile from 'screens/Profile';
import CustomBottomTab from 'components/BottomTabs/CustomBottomTabs';

const Tab = createBottomTabNavigator();

export function HomeTabs() {
  return (
    <Tab.Navigator tabBar={props => <CustomBottomTab {...props} />}>
      <Tab.Group
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen
          options={{tabBarLabel: 'Home'}}
          name="Products"
          component={ProfileStack}
        />
        <Tab.Screen
          options={{tabBarLabel: 'Cart'}}
          name="Cart"
          component={Cart}
        />
        <Tab.Screen
          options={{tabBarLabel: 'Profile'}}
          name="Profile"
          component={Profile}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
}
