
import React from "react";
import { StyleSheet, View } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";


import Welcome from '../pages/welcome';
import Login from '../pages/login';
import { Provider } from 'react-redux';

import store from '../state/store';

export function Routing() {
  return (
    <Provider store={store}>
      <NativeRouter>
        <View style={styles.container}>
          <Route exact path="/" component={Login} />
          <Route path="/welcome" component={Welcome} />
          <Route path="/login" component={Login} />
        </View>
      </NativeRouter>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },
  header: {
    fontSize: 20
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  subNavItem: {
    padding: 5
  },
  topic: {
    textAlign: "center",
    fontSize: 15
  }
}); 