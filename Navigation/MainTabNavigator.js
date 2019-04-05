import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import OneMessage from '../screens/OneMessage';
import MultipleMessage from '../screens/MultipleMessage';


const OneMessageStack = createStackNavigator({
  OneMessage: OneMessage,
});

OneMessageStack.navigationOptions = {
  tabBarLabel: 'OneMessage',
};

const MultipleMessageStack = createStackNavigator({
  MultipleMessage: MultipleMessage,
});

LMultipleMessageStack.navigationOptions = {
  tabBarLabel: 'MultipleMessage',
};


export default createBottomTabNavigator({
  neMessageStack,
  MultipleMessageStack,
});