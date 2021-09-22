import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import dataConnect from './../../database/index';

const Health = () => {
  // const [text, setText] = useState('');

  useEffect(() => {
    dataConnect();
  }, []);
  return (
    <View>
      <Text> Health </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Health;
