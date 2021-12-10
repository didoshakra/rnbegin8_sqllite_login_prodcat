//ScreenB.js
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ScreenB = () => {
  return (
    <View>
      <Text style={styles.textTitle}>ScreenB</Text>
    </View>
  );
};
export default ScreenB;

const styles = StyleSheet.create({
  textTitle: {
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
  },
  text: {
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 15,
    color: '#8b0000',
  },
});
