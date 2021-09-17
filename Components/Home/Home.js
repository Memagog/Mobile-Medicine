import React from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
// import FeatherIcon from 'react-native-vector-icons/Feather';
const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <TouchableOpacity
          style={styles.size}
          onPress={() => navigation.navigate('Analytics')}
        >
          <IoniconsIcon name="md-pulse-outline" size={50} color="#900" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.size}
          onPress={() => navigation.navigate('Menu')}
        >
          <FontAwesome5Icon name="apple-alt" size={60} color="#900" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.size}
          onPress={() => navigation.navigate('Heal')}
        >
          <FontAwesome5Icon name="notes-medical" size={60} color="#900" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.size}
          onPress={() => navigation.navigate('Heal')}
        >
          <AwesomeIcon name="heart-o" size={60} color="#900" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4676c',
  },
  box: {
    width: '100%',
    height: '50%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  size: {
    width: 100,
    height: 100,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 15,
  },
  text: {
    color: '#333',
  },
});

export default Home;
