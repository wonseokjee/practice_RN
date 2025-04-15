/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import AuthHomeScreen from './src/screens/AuthHomeScreen';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <AuthHomeScreen />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({container: {backgroundColor: 'red'}});

export default App;
