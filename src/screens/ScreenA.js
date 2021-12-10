//NavigationScreenA //https://reactnavigation.org/docs/hello-react-navigation/
import React from 'react';
import {StyleSheet, Button, Text, View} from 'react-native';
import ButtonRA from '../utils/ButtonRA';
// import GlobalStyle from '../utils/GlobalStyle';

const ScreenA = ({navigation, route}) => {
  const onPressHandler = () => {
    navigation.navigate('ScreenB', {
      ItemName: 'Item from ScreenA',
      ItemID: 12,
    });
  };
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text style={{fontSize: 25, fontWeight: 'bold', color: 'red'}}>
        ScreenA
      </Text>

      <ButtonRA
        title={'ScreenB'}
        color={'#8abbec'}
        // style={ {margin: 5}}
        // onPress={() => navigation.navigate('ScreenB')}
        onPress={onPressHandler}
      />
      <ButtonRA
        title={'Drawer'}
        color={'#8abbec'}
        style={{marginTop: 5, width: 150}}
        // onPress={() => navigation.replace('NavigationScreenB')}
        onPress={() => navigation.toggleDrawer()} //Відкриває ящик (бокове меню) при NavigatorDrawer
      />
      <ButtonRA
        title={'Login'}
        color={'#defaab'}
        style={{marginTop: 5, width: 350}}
        onPress={() => navigation.navigate('Login')}
      />
      <ButtonRA
        title={'LoginScreen'}
        color={'#defaab'}
        style={{marginTop: 5, width: 350}}
        onPress={() => navigation.navigate('LoginScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 15,
    color: '#8b0000',
  },
});

export default ScreenA;
