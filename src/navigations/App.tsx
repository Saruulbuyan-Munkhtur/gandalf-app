import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import SignInScreen from '../screens/sign-in-screen'
import NumberScreen from '../screens/number-screen'
import VerifyScreen from '../screens/verification-screen'
import BottomNavigation from './bottom-navigation'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {

  return (
      <NavigationContainer>
        <Stack.Navigator headerMode='none'>
          <Stack.Screen name="SignIn" component={SignInScreen}/>
          <Stack.Screen name="SignUp" component={NumberScreen}/>
          <Stack.Screen name="Verify" component={VerifyScreen}/>
          <Stack.Screen name="Home" component={BottomNavigation}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({
});

export default App;
