import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainNavigation from './navigation/Navigation'
import {enableScreens} from 'react-native-screens';

enableScreens();

export default function App() {
  return <MainNavigation/>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
