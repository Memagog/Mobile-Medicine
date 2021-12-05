import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { mainData } from '../../redux/dataSlice';
import ModalWindow from '../Modal/Modal';

const Health = () => {
  const [user, setUser] = useState({
    name: '',
    born: '',
    city: '',
    gender: '',
  });
  const [bloodBio, setBloodBio] = useState(false);
  const [bloodAll, setBloodAll] = useState(false);
  const [pancreas, setPancreas] = useState(false);
  const state = useSelector(mainData);
  useEffect(() => {
    setUser(state.data.userData);
  }, [state]);
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.text}>Имя пользователя</Text>
          <Text style={styles.text}>{user.name}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Дата рождения</Text>
          <Text style={styles.text}>{user.born}</Text>
        </View>
        <View style={styles.row2}>
          <Text style={styles.text}>Место проживания</Text>
          <Text style={styles.text}>{user.city}</Text>
        </View>
        <View style={styles.row2}>
          <Text style={styles.text}>Пол</Text>
          <Text style={styles.text}>{user.gender}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => setBloodAll(!bloodAll)}
        style={styles.analyze}
      >
        <Text style={[styles.text, { color: 'white' }]}>
          Общий развернутый анализ крови
        </Text>
      </TouchableOpacity>
      <View style={bloodAll ? styles.active : styles.disable}>
        <ModalWindow view={bloodAll} text={'Общий анализ крови'} />
      </View>
      <TouchableOpacity
        onPress={() => setBloodBio(!bloodBio)}
        style={styles.analyze}
      >
        <Text style={[styles.text, { color: 'white' }]}>
          Биохимический Анализ крови
        </Text>
      </TouchableOpacity>
      <View style={bloodBio ? styles.active : styles.disable}>
        <ModalWindow view={bloodBio} text={'Биохимический Анализ крови'} />
      </View>
      <TouchableOpacity
        onPress={() => setPancreas(!pancreas)}
        style={styles.analyze}
      >
        <Text style={[styles.text, { color: 'white' }]}>
          Анализ работы поджелудочной железы
        </Text>
      </TouchableOpacity>
      <View style={pancreas ? styles.active : styles.disable}>
        <ModalWindow
          view={pancreas}
          text={'Анализ работы поджелудочной железы'}
        />
      </View>
      <TouchableOpacity
        onPress={() => setPancreas(!pancreas)}
        style={styles.analyze}
      >
        <Text style={[styles.text, { color: 'white' }]}>
          Анализ на гормоны щитовидной железы
        </Text>
      </TouchableOpacity>
      <View style={pancreas ? styles.active : styles.disable}>
        <ModalWindow
          view={pancreas}
          text={'Анализ на гормоны щитовидной железы'}
        />
      </View>
      <TouchableOpacity
        onPress={() => setPancreas(!pancreas)}
        style={styles.analyze}
      >
        <Text style={[styles.text, { color: 'white' }]}>
          Анализ на содержание глюкозы в крови
        </Text>
      </TouchableOpacity>
      <View style={pancreas ? styles.active : styles.disable}>
        <ModalWindow
          view={pancreas}
          text={'Анализ на гормоны щитовидной железы'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '100%',
  },
  row: {
    backgroundColor: '#900',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row2: {
    backgroundColor: '#900',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
  analyze: {
    display: 'flex',
    marginTop: 20,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  disable: {
    display: 'none',
  },
  active: {
    display: 'flex',
  },
});

export default Health;
