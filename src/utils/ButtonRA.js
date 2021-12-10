import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const ButtonRA = props => {
  return (
    <Pressable
      // disabled={pressed}
      style={({pressed}) => [
        {backgroundColor: pressed ? '#dddddd' : props.color},
        styles.button,
        {...props.style},
      ]}
      onPress={props.onPress}
      // onPressOut={() => Alert.alert('onPressOut')}
      onPressOut={props.onLongPress}
      onLongPress={props.onLongPress}
      hitSlop={{top: 10, bottom: 10, right: 10, left: 10}} //Відстань поза елементом, на якій можна виявити натискання.
      android_ripple={{color: '#00f'}} //колір при натисканні
    >
      {/* <Text style={[styles.text,GlobalStyle.ButtonText,  {...props.style}]}> */}
      <Text style={[styles.text,  {...props.style}]}>
        {props.title}
      </Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
    color: '#000000',
  },
  button: {
    width: 150,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 20,
  },
});

export default ButtonRA;
