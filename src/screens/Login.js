//Login.js
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Login = () => {
  return (
    <View>
      <Text style={styles.text}>textTitle</Text>
    </View>
  );
};

export default Login;

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
