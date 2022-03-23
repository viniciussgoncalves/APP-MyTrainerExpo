import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import UserContextProvider from './src/contexts/UserContext';
import MainStack from './src/stacks/MainStack';


export default () => {
  return (
      <UserContextProvider>
          <NavigationContainer>
              <MainStack />
          </NavigationContainer>
      </UserContextProvider>
  );
}