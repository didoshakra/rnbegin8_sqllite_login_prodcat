//Login.js
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';

import {TextInput} from 'react-native-paper';

import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({navigation}) => {
  const emailRef = React.createRef(); //Для переводу  фокусу на це поле
  const passwordRef = React.createRef();
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [errorText, setErrorText] = useState('');
  const [actualEmail, setActualEmail] = useState('');
  const [actualPassword, setActualPassword] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      await AsyncStorage.getItem('userEmail').then(value =>
        setActualEmail(value),
      );
      await AsyncStorage.getItem('userPassword').then(value =>
        setActualPassword(value),
      );
      console.log('userEmail=', actualEmail + '/userPassword=', actualPassword);
    } catch (e) {
      console.log(e);
    }
  };

  const dataValidation = () => {
    let passwordRegex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    let emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (emailRegex.test(userEmail)) {
      if (passwordRegex.test(userPassword)) {
        AsyncStorage.setItem('isAuth', 'true');
        if (actualEmail === userEmail && actualPassword === userPassword) {
          return navigation.replace('MaterialBottomNavigation');
        } else {
          setUserEmail('');
          setUserPassword('');
          setErrorText('User not Registered');
          return alert(errorText);
        }
      } else {
        setUserEmail('');
        setUserPassword('');
        setErrorText('User not Registered');
        return alert(errorText);
      }
    } else {
      setUserEmail('');
      setUserPassword('');
      setErrorText('Email is incorrect');
      return alert(errorText);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <KeyboardAvoidingView style={{flex: 1}}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View style={styles.headingStyles}>
            <Text style={styles.title}>Welcome Back!</Text>
            <Text style={styles.subTitle}>
              Enter your credentials to continue
            </Text>
          </View>

          {/* Login Part */}
          <View style={{flex: 3}}>
            <ScrollView
              style={{marginHorizontal: 20}}
              showsVerticalScrollIndicator={false}>
              {/* Email Address */}
              <View>
                <TextInput
                  mode="flat"
                  label="Email"
                  style={styles.inputStyles}
                  ref={emailRef}
                  value={userEmail}
                  onChangeText={userEmail => setUserEmail(userEmail)}
                  placeholder="Enter Email"
                  keyboardType="email-address"
                  returnKeyType="next"
                  onSubmitEditing={() => passwordRef.current.focus()}
                  blurOnSubmit={false}
                />
              </View>

              {/* Password */}
              <View>
                <TextInput
                  mode="flat"
                  label="Password"
                  ref={passwordRef}
                  value={userPassword}
                  style={styles.inputStyles}
                  onChangeText={userPassword => setUserPassword(userPassword)}
                  secureTextEntry={true}
                  placeholder="Enter Password"
                  returnKeyType="done"
                />
              </View>

              {/* Login Button */}
              <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={dataValidation}>
                <Text>Login</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>

          {/* Register Part */}
          <View style={{marginHorizontal: 10}}>
            <TouchableOpacity
              style={styles.registerButtonStyle}
              activeOpacity={0.5}
              onPress={() => {
                setUserEmail('');
                setUserPassword('');
                setErrorText('');
                navigation.navigate('RegisterScreen');
              }}>
              <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
                OPS... I DON'T HAVE AN ACCOUNT YET
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  headingStyles: {
    flex: 2,
    justifyContent: 'center',
    marginLeft: 30,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  subTitle: {
    fontSize: 17,
    color: 'grey',
  },
  inputStyles: {
    marginVertical: 10,
    backgroundColor: '#38c9cd',
  },
  buttonStyle: {
    marginVertical: 20,
    padding: 20,
    backgroundColor: 'lightcyan',
    borderRadius: 30,
  },
  registerButtonStyle: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderRadius: 30,
    borderColor: '#babcbe',
    paddingVertical: 15,
  },
});
