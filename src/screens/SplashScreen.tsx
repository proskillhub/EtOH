import {Image, StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';

// React Navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

// Images
const LogoImg = require('../assets/images/logo.png');
const BgImg = require('../assets/images/bg-Wine.png');

type SplashProps = NativeStackScreenProps<RootStackParamList, 'Splash'>;

export class SplashScreen extends Component<SplashProps> {
  constructor(props: SplashProps) {
    super(props);
    // this.state = {};
    setTimeout(() => {
      this.props.navigation.navigate('SignupLoginModule1');
    }, 3000);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoView}>
          <Image source={LogoImg} style={styles.logoImg} alt="EtOH Logo" />
        </View>
        <View style={styles.bgContainer}>
          <Image source={BgImg} style={styles.bgImg} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
  },
  logoView: {
    width: 'auto',
    height: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
  logoImg: {
    width: 400,
    objectFit: 'contain',
  },
  bgContainer: {
    marginTop: 20,
    width: 500,
    height: 'auto',
  },
  bgImg: {
    objectFit: 'cover',
    width: 500,
    height: 650,
  },
});

export default SplashScreen;
