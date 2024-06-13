import {StyleSheet, Text, View, Image} from 'react-native';
import React, {Component} from 'react';
import Button from '../../components/Button';

// React Navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../App';

// images
const bgImg = require('../../assets/images/bg-Wine.png');

type SignupLoginModule2Props = NativeStackScreenProps<
  RootStackParamList,
  'SignupLoginModule2'
>;

export class SignupLoginModule2 extends Component<SignupLoginModule2Props> {
  constructor(props: SignupLoginModule2Props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bgContainer}>
          <Image source={bgImg} alt="bgImg" style={styles.bgImg} />
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.heading}>Learn, Train, Remember </Text>
          <Text style={styles.para}>
            EtOH Coach is your partner to pass wines, beers and spirits
            certifications with success!{' '}
          </Text>
          <Button
            text={'Create Account'}
            handlePress={() =>
              this.props.navigation.navigate('SignupLoginModule3')
            }
          />
          <Text style={styles.bottomMargin}>Already have an account? </Text>
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
  bottomContainer: {
    display: 'flex',
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 30,
    fontFamily: 'tahoma',
    fontWeight: 'bold',
    color: 'black',
  },
  para: {
    color: 'gray',
    fontSize: 16,
    textAlign: 'justify',
    marginTop: 10,
    marginBottom: 30,
    width: 300,
  },
  bottomMargin: {
    color: 'gray',
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default SignupLoginModule2;
