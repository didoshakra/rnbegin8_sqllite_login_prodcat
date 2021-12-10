//RootNavigatorStack.js(Stack.Navigator)// //https://www.youtube.com/watch?v=ANdSdIlgsEw&ab_channel=ProgrammingwithMash
import * as React from 'react';
// import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import ScreenA from '../screens/ScreenA';
import ScreenB from '../screens/ScreenB';
import Login from '../screens/Login';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <Stack.Navigator
      // screenOptirons={{header: () => null}} //Забирає верхнє меню навігіції (всюди)
      initialRouteName={'ScreenA'}
      screenOptions={{
        //Шапка
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: {backgroundColor: 'tomato'},
      }}>
      <Stack.Screen
        // options={{header: () => null}} //Забирає верхнє меню навігіції (тільки на даному екрані)
        name="ScreenA"
        component={ScreenA}
        options={{title: 'ScreenA'}}
      />
      <Stack.Screen name="ScreenB" component={ScreenB} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    </Stack.Navigator>
  );
};
