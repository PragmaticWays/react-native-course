import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultDetailScreen from './src/screens/ResultDetailScreen';

const navigator = createStackNavigator(
  {
    SearchScreen: SearchScreen,
    ResultDetailScreen: ResultDetailScreen,
  },
  {
    initialRouteName: 'SearchScreen',
    defaultNavigationOptions: {
      title: 'Business Search',
    },
  }
);

export default createAppContainer(navigator);
