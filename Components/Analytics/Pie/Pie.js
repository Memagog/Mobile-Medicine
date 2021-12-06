import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

const Pie = props => {
  useEffect(() => {}, [props]);
  return (
    <View>
      <PieChart
        data={props.data}
        width={400}
        height={350}
        chartConfig={{
          // backgroundColor: '#333',
          // // backgroundGradientFrom: '#333',
          // backgroundGradientTo: '#900',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        }}
        accessor={'population'}
        backgroundColor={'#333'}
        backgroundGradientFrom={'#333'}
        backgroundGradientTo={'#900'}
        center={[15, 0]}
        style={props.view ? { display: 'flex' } : { display: 'none' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Pie;
