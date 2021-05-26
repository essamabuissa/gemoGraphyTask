import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigation";
import { Provider } from "react-redux";
import store from "./src/redux";
import { fetchRepos } from "./src/redux/actions";

export default function App() {
  useEffect(() => {
    store.dispatch(fetchRepos(1));
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}
