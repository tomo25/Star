import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import OneMessage from './screens/OneMessage';
import MultipleMessage from './screens/MultipleMessage';

class OneMessageScreen extends React.Component {
  render() {
    return (
      <OneMessage />
    );
  }
}

class MultipleMessageScreen extends React.Component {
  render() {
    return (
      <MultipleMessage />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  OneMessage: OneMessageScreen,
  MultipleMessage: MultipleMessageScreen,
});

export default createAppContainer(TabNavigator);


