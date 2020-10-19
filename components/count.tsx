import React from 'react';
import { View, Button, Text } from 'react-native';

const Count = (props: any) => {
  return (
    <View>
      <Button title='+' onPress={() => props.addCount(props.count.count)} />
      <Text>Count : {props.count.count}</Text>
    </View>
  );
};

export default Count;
