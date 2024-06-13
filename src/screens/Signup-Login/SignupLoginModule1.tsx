import {Alert, Image, StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import Button from '../../components/Button';
import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// React Navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../App';

// images
const bgImg = require('../../assets/images/bg-Wine.png');

type SignupLoginModule1Props = NativeStackScreenProps<
  RootStackParamList,
  'SignupLoginModule1'
>;

export class SignupLoginModule1 extends Component<SignupLoginModule1Props> {
  constructor(props: SignupLoginModule1Props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bgContainer}>
          <Image source={bgImg} alt="bgImg" style={styles.bgImg} />
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.formHeading}>Login</Text>
          <TextInput label="Email" left={<Icon name="email" size={30} />} />
          <TextInput
            label="Password"
            secureTextEntry={true}
            left={<TextInput.Icon icon="lock" />}
            right={<TextInput.Icon icon="eye" />}
          />

          <Text style={styles.forgetLink}>Forgot Password?</Text>
          <Button
            text={'login'}
            handlePress={() => Alert.alert('Login Pressed!')}
          />
          <Text
            style={styles.bottomLink}
            onPress={() =>
              this.props.navigation.navigate('SignupLoginModule2')
            }>
            Don't have an account?{' '}
            <Text style={styles.signupLink}>Sign up</Text>
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  bgContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 500,
  },
  bgImg: {
    objectFit: 'cover',
    height: 450,
  },
  formContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  formHeading: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
  },
  inputContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
    backgroundColor: '#e3dede',
    width: 400,
    height: 60,
    marginTop: 20,
  },
  forgetLink: {
    color: 'gray',
    fontSize: 16,
    marginVertical: 20,
  },
  signupLink: {
    color: '#fc0560',
    fontWeight: 'bold',
    fontSize: 18,
    textDecorationStyle: 'solid',
  },
  bottomLink: {
    fontSize: 16,
    color: 'gray',
    marginTop: 20,
  },
});

export default SignupLoginModule1;
