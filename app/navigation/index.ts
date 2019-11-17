import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Home, Content } from '../views';

const Stack = createStackNavigator(
  {
    Home,
    Content,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
  }
);

export const Navigation = createAppContainer(Stack);
