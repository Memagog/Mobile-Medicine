import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';

const Progress = props => {
  useEffect(() => {}, [props]);
  return (
    <View>
      <ProgressChart
        data={props.data}
        width={400}
        height={350}
        strokeWidth={16}
        radius={32}
        chartConfig={{
          backgroundColor: '#333',
          backgroundGradientFrom: '#333',
          backgroundGradientTo: '#900',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        }}
        hideLegend={false}
        style={props.view ? { display: 'flex' } : { display: 'none' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Progress;
