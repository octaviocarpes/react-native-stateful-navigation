import React, {ReactElement} from 'react';
import { View, Text, Button } from 'react-native';

export const Content = (props): ReactElement => {
  const { navigation } = props;

  const renderContent = (): ReactElement => (
    <>
      <View style={{
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>Content</Text>
        <Button
          onPress={() => navigation.goBack()}
          title='Go Back' />
      </View>
    </>
  );

  return renderContent();
};
