/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import Analytics from './Components/Analytics/Analytics';
import Analyze from './Components/Analyze/Analyze';
import Health from './Components/Health/Health';
import Home from './Components/Home/Home';
import Menu from './Components/Menu/Menu';
import { connect } from './database/index.db';
import { store } from './store/store';

const Stack = createNativeStackNavigator();

const style = {
  headerStyle: {
    backgroundColor: '#333',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const App = () => {
  useEffect(() => {
    connect();
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={style} />
          <Stack.Screen
            name="Analytics"
            component={Analytics}
            options={style}
          />
          <Stack.Screen name="Menu" component={Menu} options={style} />
          <Stack.Screen name="Heal" component={Health} options={style} />
          <Stack.Screen name="Analyze" component={Analyze} options={style} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
