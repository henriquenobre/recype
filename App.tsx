import React from 'react';
import {SafeAreaView} from 'react-native';
import {ThemeProvider} from 'styled-components';
import 'react-native-gesture-handler';
import RootStack from 'routes/index.routes';
import theme from 'theme/index';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <RootStack />
    </ThemeProvider>
  );
}
export default App;
