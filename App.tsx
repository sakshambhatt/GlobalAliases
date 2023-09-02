import React from 'react';
import {SafeAreaView} from 'react-native';
import Demo from '@components/Demo';

function App(): JSX.Element {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Demo />
    </SafeAreaView>
  );
}

export default App;
