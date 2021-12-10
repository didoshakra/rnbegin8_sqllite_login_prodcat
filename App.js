import * as React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from './src/navigators/RootNavigatorStack'; //Stack
// import {RootNavigator} from './src/navigators/RootNavigatorNativeStack'; //NativeStack

// const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={{fontSize: 16, color: '#B22222'}}>rnbegin8_sqllite_login_product_categories</Text>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
