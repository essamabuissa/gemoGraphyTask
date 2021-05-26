import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Home from "../../screens/Home";
import { HOME } from "../screenNames";

const { Navigator, Screen } = createStackNavigator();

const HomeStack = () => {
  return (
    <Navigator>
      <Screen name={HOME} component={Home} options={{ headerShown: false }} />
    </Navigator>
  );
};

export default HomeStack;
