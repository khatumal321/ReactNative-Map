import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Map from './Screens/Map'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>working App design by khatumal</Text>
      <Map/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
