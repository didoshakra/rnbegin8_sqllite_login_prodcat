//RootNavigatorNativeStack.js
import * as React from 'react';
// import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ScreenA from '../screens/ScreenA';
import ScreenB from '../screens/ScreenB';

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  return (
    <Stack.Navigator
      // screenOptirons={{header: () => null}} //Забирає верхнє меню навігіції (всюди)
      initialRouteName={'ScreenA'}>
      <Stack.Screen
        // options={{header: () => null}} //Забирає верхнє меню навігіції (тільки на даному екрані)
        name="ScreenA"
        component={ScreenA}
        options={{title: 'ScreenA'}}
      />
      <Stack.Screen name="ScreenB" component={ScreenB} />
    </Stack.Navigator>
  );
};
