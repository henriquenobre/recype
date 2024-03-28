import {
  CommonActions,
  DrawerActions,
  type NavigationContainerRef,
  type RouteProp,
} from '@react-navigation/native';
import {createRef} from 'react';
import {RootStackParamList} from 'routes/types';

export const navigationRef =
  createRef<NavigationContainerRef<RootStackParamList | any>>();

class OptionNavigation {
  navigate(
    screen: keyof RootStackParamList,
    params?: RouteProp<RootStackParamList, keyof RootStackParamList>['params'],
  ) {
    navigationRef.current?.navigate(screen, params);
  }

  replace<T extends keyof RootStackParamList>(
    screen: T,
    params?: RouteProp<RootStackParamList, T>['params'],
  ) {
    navigationRef.current?.reset({
      index: 1,
      routes: [{name: screen, params}],
    });
  }

  replaceArray(screens: {name: string; params?: any}[]) {
    navigationRef.current?.dispatch(
      CommonActions.reset({
        index: 1,
        routes: screens.map(screen => ({
          name: screen.name,
        })),
      }),
    );
  }

  goBack() {
    navigationRef.current?.goBack();
  }

  toggleDrawer() {
    navigationRef.current?.dispatch(DrawerActions.toggleDrawer());
  }
}

export const Navigation = new OptionNavigation();
