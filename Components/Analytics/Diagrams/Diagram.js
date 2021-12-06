import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

export default function Diagram(props) {
  useEffect(() => {}, [props]);
  return (
    <View>
      <BarChart
        data={props.data}
        width={400}
        height={350}
        chartConfig={{
          backgroundColor: '#333',
          backgroundGradientFrom: '#333',
          backgroundGradientTo: '#900',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        }}
        style={props.view ? { display: 'flex' } : { display: 'none' }}
      />
    </View>
  );
}
