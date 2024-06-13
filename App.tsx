import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PaperProvider} from 'react-native-paper';

// Splash Screen
import SplashScreen from './src/screens/SplashScreen';

// Login/Signup Module
import SignupLoginModule1 from './src/screens/Signup-Login/SignupLoginModule1';
import SignupLoginModule2 from './src/screens/Signup-Login/SignupLoginModule2';
import SignupLoginModule3 from './src/screens/Signup-Login/SignupLoginModule3';
import SignupLoginModule4 from './src/screens/Signup-Login/SignupLoginModule4';
import SingupLoginModule5 from './src/screens/Signup-Login/SingupLoginModule5';
import SignupLoginModule6 from './src/screens/Signup-Login/SignupLoginModule6';

export type RootStackParamList = {
  Splash: undefined;
  SignupLoginModule1: undefined;
  SignupLoginModule2: undefined;
  SignupLoginModule3: undefined;
  SignupLoginModule4: undefined;
  SignupLoginModule5: undefined;
  SignupLoginModule6: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export class App extends Component {
  render() {
    return (
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen
              name="Splash"
              component={SplashScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SignupLoginModule1"
              component={SignupLoginModule1}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SignupLoginModule2"
              component={SignupLoginModule2}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SignupLoginModule3"
              component={SignupLoginModule3}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SignupLoginModule4"
              component={SignupLoginModule4}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SignupLoginModule5"
              component={SingupLoginModule5}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SignupLoginModule6"
              component={SignupLoginModule6}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    );
  }
}

export default App;
