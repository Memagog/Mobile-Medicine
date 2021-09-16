import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './../components/Home/Home';
import Analytics from './../components/Analytics/Analytics';
import Menu from './../components/Menu/Menu';
import Health from './../components/Health/Health';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Analytics" component={Analytics} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Health" component={Health} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default Navigation;
