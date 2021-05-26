import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { HOME_STACK } from "./screenNames";
import HomeStack from "./StackNavigators/HomeStack";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator initialRouteName={HOME_STACK}>
      <Screen
        name={HOME_STACK}
        component={HomeStack}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default RootNavigator;
