import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from "react-redux";
import store from './configureStore';
import { StyleSheet, Text, View } from 'react-native';

import Count from './containers/count';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Count />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
