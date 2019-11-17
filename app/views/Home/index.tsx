import React, { ReactElement } from 'react';
import {View, Button, Text, TextComponent} from 'react-native';

import { HelloWorld } from '../../components';

export const Home = (props): ReactElement => {
  const { navigation } = props;

  return (
    <>
      <View
        style={{
          flex: 1,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <HelloWorld />
        <Button
          onPress={() => navigation.navigate('Content')}
          title="Navigate"
        />
      </View>
    </>
  );
};
