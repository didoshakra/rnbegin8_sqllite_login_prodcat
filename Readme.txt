09.12.2021//rnbegin8_sqllite_login_prodcat
//One Person Use, No Internet Required and SQLite DB — React Native
//https://medium.com/swlh/built-your-mobile-app-in-10-days-with-react-native-abdeafce0dfc
================================================================================
//https://reactnavigation.org/docs/getting-started/
1 *** переключення між екранами /цізалежності потрібні для всіх Navigator
    npm install @react-navigation/native
    ----------------------------------------------------------------------------
    npm install react-native-safe-area-context  // !!! Без неї -помилка
    npm install react-native-screens            // !!! Без неї -помилка
    // ERROR  Invariant Violation: requireNativeComponent: "RNSScreenStackHeaderConfig" was not found in the UIManager.
---------------------------------------------------------------------------------
* Stack Navigator //https://reactnavigation.org/docs/stack-navigator/
    npm install @react-navigation/stack
    npm install react-native-gesture-handler
    npm install @react-native-masked-view/masked-view
----------------------------------------------------------------------------------
* Native Stack Navigator //https://reactnavigation.org/docs/native-stack-navigator
    npm install @react-navigation/native-stack /+ пункт 1
============================================================
 Решта це перевід Компонентів типу Class в Function з робочого прикладу:
 https://github.com/LuffyAnshul/civilApp
* LoginScreen.js
    npm i react-native-paper //import {TextInput} from 'react-native-paper';
    npm i @react-native-async-storage/async-storage
----------------------------------------------------------
* RegisterScreen.js
    npm i react-native-image-crop-picker /import ImagePicker from 'react-native-image-crop-picker';




