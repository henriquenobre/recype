import React from 'react';
import {SafeAreaView} from 'react-native';
import {ThemeProvider} from 'styled-components';
import 'react-native-gesture-handler';
import RootStack from 'routes/index.routes';
import theme from 'theme/index';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{flex: 1}}>
        <RootStack />
      </SafeAreaView>
    </ThemeProvider>
  );
}
export default App;
