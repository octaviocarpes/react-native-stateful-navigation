import React, { ReactElement } from 'react';
import { View, Text } from 'react-native';

export const HelloWorld = (): ReactElement => {

  const renderHelloWorld = (): ReactElement => (
    <>
      <View>
        <Text>Hello World</Text>
      </View>
    </>
  );

  return renderHelloWorld();
};
