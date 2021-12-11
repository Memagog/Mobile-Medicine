import React, { useEffect, useRef, useState } from 'react';
import {
  Button,
  DrawerLayoutAndroid,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ListItem } from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Diagram from './Diagrams/Diagram';
import Line from './LineChart/LineChart';
import Pie from './Pie/Pie';
import Progress from './Progress/Progress';
import Stackbar from './StackBar/StackBar';
import { data1, data2, data4, data_1d, data_7d } from './testData/data';

const Analytics = () => {
  const [line, setLine] = useState(true);
  const [diagram, setDiagram] = useState(false);
  const [pie, setPie] = useState(false);
  const [progress, setProgress] = useState(false);
  const [stack, setStack] = useState(false);
  const [visible, setVisible] = useState(false);
  const [time, setTime] = useState('1d');
  const [chartData, setChartData] = useState(data_1d);
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState('left');

  useEffect(() => {
    switch (time) {
      case '1d':
        setChartData(data_1d);
        break;
      case '7d':
        setChartData(data_7d);
        break;
      case '15d':
        setChartData(data_1d);
        break;
      case '1m':
        setChartData(data_1d);
        break;
      default:
        setChartData(data_1d);
        break;
    }
  }, [time]);

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
            onPress={() => setTime('1d')}
          >
            <Text style={{ color: 'white' }}>1d</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ padding: 10, margin: 10, backgroundColor: '#333' }}
            onPress={() => setTime('7d')}
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
          <Line data={chartData} view={line} />
          <Diagram data={chartData} view={diagram} />
          <Pie data={data4} view={pie} />
          <Progress data={data1} view={progress} />
          <Stackbar data={data2} view={stack} />
        </View>
        <View style={styles.infoBlock}>
          <View style={styles.infoText}>
            <Text style={styles.text2}>Дополнительная информация</Text>
          </View>
          {/* <View style={styles.infoText}>
            <Text style={styles.text2}>описание</Text>
          </View> */}
          <View>
            <Text style={styles.text2}>описание</Text>
          </View>
        </View>
        <View style={styles.infoBlock}>
          <View style={styles.infoText2}>
            <Text style={styles.text2}>Дополнительная данные</Text>
          </View>
          {/* <View style={styles.infoText}>
            <Text style={styles.text2}>описание</Text>
          </View> */}
          <View>
            <Text style={styles.text2}>описание</Text>
          </View>
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
  infoBlock: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    padding: 20,
  },
  infoText: {
    paddingRight: 90,
  },
  infoText2: {
    paddingRight: 120,
  },
});

export default Analytics;
