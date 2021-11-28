/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Components/Home/Home';
import Analytics from './Components/Analytics/Analytics';
import Menu from './Components/Menu/Menu';
import Health from './Components/Health/Health';
import { useEffect } from 'react';
import { connect } from './database/index.db';
import { Provider } from 'react-redux';
import { store } from './store/store';

const Stack = createNativeStackNavigator();
const App = () => {
  useEffect(() => {
    connect();
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Analytics" component={Analytics} />
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="Heal" component={Health} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
