import React, {Component} from 'react';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import MainScreen from "./src/components/MainScreen/MainScreen";
import SecondScreen from "./src/components/SecondScreen/SecondScreen";

/**
 * @description Initializing the stack navigator.
 */

const container = createStackNavigator({
    MainScreen: { screen: MainScreen },
    SecondScreen: { screen: SecondScreen },

});

class App extends React.Component {
  render() {
    return <container />;
  }
}

export default createAppContainer(container);


