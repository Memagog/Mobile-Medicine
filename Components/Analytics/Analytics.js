import React, { useRef, useState } from 'react';
import {
  Button,
  DrawerLayoutAndroid,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Icon, ListItem, Overlay } from 'react-native-elements';
import Diagram from './Diagrams/Diagram';
import Line from './LineChart/LineChart';
import Pie from './Pie/Pie';
import Progress from './Progress/Progress';
import Stackbar from './StackBar/StackBar';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const data = {
  // labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // optional
      strokeWidth: 2, // optional
    },
  ],
  // legend: ['Rainy Days'], // optional
};

const data1 = {
  labels: ['Swim', 'Bike', 'Run'], // optional
  data: [0.4, 0.6, 0.8],
};

const data2 = {
  labels: ['Test1', 'Test2'],
  legend: ['L1', 'L2', 'L3'],
  data: [
    [60, 60, 60],
    [30, 30, 60],
  ],
  barColors: ['#dfe4ea', '#ced6e0', '#a4b0be'],
};

const data4 = [
  {
    name: 'Protein',
    population: 100,
    color: 'rgba(131, 167, 234, 1)',
    legendFontColor: '#7F7F7F',
    legendFontSize: 14,
  },
  {
    name: 'Carbohydrate',
    population: 200,
    color: '#900',
    legendFontColor: '#7F7F7F',
    legendFontSize: 14,
  },
  {
    name: 'Lipids',
    population: 80,
    color: '#444',
    legendFontColor: '#7F7F7F',
    legendFontSize: 14,
  },
];

const Analytics = () => {
  const [line, setLine] = useState(true);
  const [diagram, setDiagram] = useState(false);
  const [pie, setPie] = useState(false);
  const [progress, setProgress] = useState(false);
  const [stack, setStack] = useState(false);
  const [visible, setVisible] = useState(false);
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState('left');

  const selectLineChart = () => {
    setLine(true);
    setDiagram(false);
    setPie(false);
    setProgress(false);
    setStack(false);
    drawer.current.closeDrawer();
  };
  const selectDiagramChart = () => {
    setLine(false);
    setDiagram(true);
    setPie(false);
    setProgress(false);
    setStack(false);
    drawer.current.closeDrawer();
  };
  const selectPieChart = () => {
    setLine(false);
    setDiagram(false);
    setPie(true);
    setProgress(false);
    setStack(false);
    drawer.current.closeDrawer();
  };
  const selectProgChart = () => {
    setLine(false);
    setDiagram(false);
    setPie(false);
    setProgress(true);
    setStack(false);
    drawer.current.closeDrawer();
  };
  const selectStackChart = () => {
    setLine(false);
    setDiagram(false);
    setPie(false);
    setProgress(false);
    setStack(true);
    drawer.current.closeDrawer();
  };
  const navigationView = () => (
    <View style={[styles.navigationContainer]}>
      <Text style={styles.paragraph}>Выберите аналитику</Text>
      <TouchableOpacity
        onPress={() => selectLineChart()}
        style={{
          marginTop: 40,
          borderTopColor: '#333',
          borderTopWidth: 1,
        }}
      >
        <ListItem bottomDivider>
          <AntDesign name="linechart" size={35} color="#333" />
          <ListItem.Content>
            <ListItem.Title style={styles.text}>Graphics</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => selectDiagramChart()}>
        <ListItem bottomDivider>
          <AntDesign name="barchart" size={35} color="#333" />
          <ListItem.Content>
            <ListItem.Title style={styles.text}>Histograms</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => selectPieChart()}>
        <ListItem bottomDivider>
          <AntDesign name="piechart" size={35} color="#333" />
          <ListItem.Content>
            <ListItem.Title style={styles.text}>Diagrams</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => selectProgChart()}>
        <ListItem bottomDivider>
          <MaterialCommunityIcons
            name="chart-donut-variant"
            size={35}
            color="#333"
          />
          <ListItem.Content>
            <ListItem.Title style={styles.text}>Progress</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => selectStackChart()}
        style={{
          marginBottom: 200,
          borderBottomColor: '#333',
          borderBottomWidth: 1,
        }}
      >
        <ListItem bottomDivider>
          <MaterialIcons name="add-chart" size={35} color="#333" />
          <ListItem.Content>
            <ListItem.Title style={styles.text}>Add Chart</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </TouchableOpacity>
      <Button
        title="Close"
        color="#333"
        onPress={() => drawer.current.closeDrawer()}
      />
    </View>
  );
  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}
    >
      <View style={styles.container}>
        <TouchableOpacity style={{ backgroundColor: '#700', width: 500 }}>
          <Button
            color="#900"
            title="Open"
            onPress={() => drawer.current.openDrawer()}
          />
        </TouchableOpacity>
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={{ padding: 10, margin: 10, backgroundColor: '#333' }}
          >
            <Text style={{ color: 'white' }}>1d</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ padding: 10, margin: 10, backgroundColor: '#333' }}
          >
            <Text style={{ color: 'white' }}>7d</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ padding: 10, margin: 10, backgroundColor: '#333' }}
          >
            <Text style={{ color: 'white' }}>15d</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ padding: 10, margin: 10, backgroundColor: '#333' }}
          >
            <Text style={{ color: 'white' }}> 1m </Text>
          </TouchableOpacity>
        </View>
        <View style={{ paddingTop: 30 }}>
          <Line data={data} view={line} />
          <Diagram data={data} view={diagram} />
          <Pie data={data4} view={pie} />
          <Progress data={data1} view={progress} />
          <Stackbar data={data2} view={stack} />
        </View>
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 0,
  },
  navigationContainer: {
    // backgroundColor: '#ecf0f1',
    flexDirection: 'column',
    // alignItems: 'center',
    justifyContent: 'space-around',
  },
  paragraph: {
    padding: 8,
    fontSize: 20,
    color: '#333',
    textAlign: 'center',
  },
  text: {
    paddingLeft: 50,
    fontSize: 20,
    color: 'black',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  button: {
    margin: 5,
  },
});

export default Analytics;
