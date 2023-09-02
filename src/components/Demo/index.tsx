import {View, Text} from 'react-native';
import React from 'react';

export default function Demo() {
  return (
    <View>
      <Text style={{fontSize: 16, fontWeight: 'bold'}}>Demo Component</Text>
      <Text>If this component is visible, then it's all good</Text>
    </View>
  );
}
