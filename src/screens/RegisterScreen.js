//RegisterScreen.js
//https://www.youtube.com/watch?v=ANdSdIlgsEw&ab_channel=ProgrammingwithMash
import React, {useState, useEffect} from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  View,
  Image,
} from 'react-native';

import {TextInput} from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisterScreen = ({navigation}) => {
  const nameRef = React.createRef(); //Для переводу  фокусу на це поле
  const emailRef = React.createRef();
  const passwordRef = React.createRef();
  const confirmPasswordRef = React.createRef();
  const mobileRef = React.createRef();
  const bdateRef = React.createRef();
  const [imageURI, setImageURI] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [bdate, setBdate] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [mobileError, setMobileError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  //*--------------------
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('UserData'); //обєкти
      console.log('RegisterScreen/getData/value=', value);
      if (value !== null) {
        // return navigation.replace('MaterialBottomNavigation');
      }
    } catch (e) {
      console.log(e);
    }
  };

  const setData = async () => {
    try {
      var user = {
        userName: name,
        userEmail: email,
        userPassword: password,
        userMobile: mobile,
        userDOB: bdate,
        userImage: imageURI,
        isAuth: 'true',
      };
      await AsyncStorage.setItem('UserData', JSON.stringify(user));
    } catch (error) {
      console.log(error);
    }
  };
  const showData = async () => {
    let emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let passwordRegex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    // let phoneRegex = /^(\+38[\-\s]?)?[0]?(91)?[789]\d{9}$/;
    let phoneRegex =
      /^([+]39)?((3[\d]{2})([ ,\-,\/]){0,1}([\d, ]{6,9}))|(((0[\d]{1,4}))([ ,\-,\/]){0,1}([\d, ]{5,10}))$/;

    if (emailRegex.test(email)) {
      setMobileError(false);
      if (phoneRegex.test(mobile)) {
        setMobileError(false);
        if (passwordRegex.test(password)) {
          setPasswordError(true);
          // console.log('password=|', password);
          // console.log('|confirmPassword=|', confirmPassword + '|');
          if (password === confirmPassword) {
            setPasswordError(false);
            setConfirmPasswordError(false);
            setData();
            getData();
            return navigation.replace('MaterialBottomNavigation');
          }
        }
        setPassword('');
        setConfirmPassword('');
        setPasswordError(true);
        setConfirmPasswordError(true);
        return alert('Password Not Matching');
      }
      setMobile('');
      setMobileError(true);
      return alert('Mobile Number Incorrect');
    }
    setEmailError(true);
    return alert('Email Incorrect');
  };

  const selectProfilePhoto = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setImageURI(image.path);
    });

    return null;
  };

  return (
    <View style={{flex: 1, backgroundColor: 'cyan'}}>
      <ScrollView
        style={{margin: 15, borderRadius: 30, backgroundColor: '#fff'}}
        showsVerticalScrollIndicator={false}>
        <View style={{marginTop: 20, marginLeft: 20}}>
          <Text style={styles.heading}>Hello!</Text>
          <Text style={styles.heading}>SignUp To</Text>
          <Text style={styles.heading}>Get Started</Text>
        </View>

        <View style={styles.imageStruct}>
          <TouchableOpacity onPress={() => selectProfilePhoto()}>
            {imageURI === '' ? (
              <Image
                source={require('../assets/icon.png')}
                style={styles.userImage}
              />
            ) : (
              <Image source={{uri: imageURI}} style={styles.userImage} />
            )}
          </TouchableOpacity>
          <Text style={{fontWeight: 'bold'}}>(Select Photo)</Text>
        </View>

        {/* Name */}
        <View style={styles.details}>
          <TextInput
            mode="outlined"
            label="Name"
            placeholder="Name"
            returnKeyType="next"
            blurOnSubmit={false}
            ref={nameRef} //Для переводу  фокусу на це поле
            value={name}
            onChangeText={name => setName(name)}
            onSubmitEditing={() => emailRef.current.focus()} //Фокус на поле emailRef
            style={styles.inputStyles}
          />
        </View>

        {/* Email Address */}
        <View style={styles.details}>
          <TextInput
            mode="outlined"
            label="Email Address"
            placeholder="Email Address"
            returnKeyType="next"
            blurOnSubmit={false}
            error={emailError}
            ref={emailRef}
            value={email}
            onChangeText={email => setEmail(email)}
            onSubmitEditing={() => passwordRef.current.focus()}
            style={styles.inputStyles}
          />
        </View>

        {/* Password */}
        <View style={styles.details}>
          <TextInput
            mode="outlined"
            label="Password"
            placeholder="Password"
            returnKeyType="next"
            blurOnSubmit={false}
            error={passwordError}
            ref={passwordRef}
            value={password}
            secureTextEntry={true}
            onChangeText={password => setPassword(password)}
            onSubmitEditing={() => confirmPasswordRef.current.focus()}
            style={styles.inputStyles}
          />
        </View>

        {/* Confirm Password */}
        <View style={styles.details}>
          <TextInput
            mode="outlined"
            label="Confirm Password"
            placeholder="Confirm Password"
            returnKeyType="next"
            blurOnSubmit={false}
            error={confirmPasswordError}
            ref={confirmPasswordRef}
            value={confirmPassword}
            secureTextEntry={true}
            onChangeText={confirmPassword =>
              setConfirmPassword(confirmPassword)
            }
            onSubmitEditing={() => mobileRef.current.focus()}
            style={styles.inputStyles}
          />
        </View>

        {/* Mobile */}
        <View style={styles.details}>
          <TextInput
            mode="outlined"
            label="Phone Number"
            returnKeyType="next"
            placeholder="Phone Number"
            keyboardType="phone-pad"
            blurOnSubmit={false}
            maxLength={10}
            error={mobileError}
            ref={mobileRef}
            value={mobile}
            onChangeText={mobile => setMobile(mobile)}
            onSubmitEditing={() => bdateRef.current.focus()}
            style={styles.inputStyles}
          />
        </View>

        {/* Date of Birth */}
        <View style={styles.details}>
          <TextInput
            mode="outlined"
            label="Date of Birth"
            placeholder="DD-MM-YYYY"
            keyboardType="numeric"
            returnKeyType="done"
            ref={bdateRef}
            value={bdate}
            onChangeText={bdate => {
              let bdateUpdate = bdate;
              if (bdate.length === 2 || bdate.length === 5) {
                bdateUpdate = bdateUpdate + '-';
              }
              setBdate(bdateUpdate);
            }}
            style={styles.inputStyles}
            maxLength={10}
          />
        </View>

        <View style={{marginHorizontal: 30, marginTop: 20}}>
          <TouchableOpacity
            onPress={() => showData()}
            style={{
              paddingVertical: 15,
              backgroundColor: '#000',
              paddingHorizontal: 20,
              borderRadius: 20,
            }}>
            <Text style={{textAlign: 'center', color: '#fff'}}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1B0F30',
    marginLeft: 20,
  },
  imageStruct: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  userImage: {
    height: 100,
    width: 100,
    backgroundColor: '#0bc4d9',
    borderRadius: 20,
    marginBottom: 5,
  },
  details: {
    padding: 10,
  },
  inputStyles: {
    height: 40,
  },
});
