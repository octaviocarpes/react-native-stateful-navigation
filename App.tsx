/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Navigation } from './app/navigation';
import { Header } from 'app/components';
import { View } from 'react-native';

const App = () => {
  return (
    <>
      <View style={{
        flex: 1,
        width: '100%'
      }}>
        <Navigation />
      </View>
    </>
  );
};

export default App;
