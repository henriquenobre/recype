import React from 'react';
import {SafeAreaView} from 'react-native';

import RootStack from 'routes/index.routes';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <RootStack />
    </SafeAreaView>
  );
}
export default App;
