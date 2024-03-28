export type AuthRoutes = {
  Login: undefined;
};

export type HomeTabs = {
  Tab1: undefined;
  Tab2: undefined;
};

export type Profile = {
  User: undefined;
  UserEdit: undefined;
};

export type IndexStackNavigatorParamList = {
  Login: undefined;
  Home: {
    name: string;
    birthYear: string;
  };
};

export type RootStackParamList = IndexStackNavigatorParamList &
  AuthRoutes &
  HomeTabs &
  Profile;
