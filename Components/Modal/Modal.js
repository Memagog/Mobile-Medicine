import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Alert,
  Text,
  Modal,
  TouchableOpacity,
} from 'react-native';
import { useSelector } from 'react-redux';
import { mainData } from '../../redux/dataSlice';

const ModalWindow = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const state = useSelector(mainData);
  useEffect(() => {
    setModalVisible(props.view);
  }, [props.view]);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableOpacity
          style={styles.centeredView}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{props.text}</Text>
            <View style={styles.textBlock}>
              <Text style={styles.modalText}>
                {state.data.medData.alat.name}
              </Text>
              <Text style={[styles.modalText, { marginLeft: 190 }]}>
                {state.data.medData.alat.result}
              </Text>
            </View>
            <View style={styles.textBlock}>
              <Text style={styles.modalText}>
                {state.data.medData.asat.name}
              </Text>
              <Text style={[styles.modalText, { marginLeft: 183 }]}>
                {state.data.medData.asat.result}
              </Text>
            </View>
            <View style={styles.textBlock}>
              <Text style={styles.modalText}>
                {state.data.medData.ggt.name}
              </Text>
              <Text style={[styles.modalText, { marginLeft: 190 }]}>
                {state.data.medData.ggt.result}
              </Text>
            </View>
            <View style={styles.textBlock}>
              <Text style={styles.modalText}>
                {state.data.medData.creatine.name}
              </Text>
              <Text style={[styles.modalText, { marginLeft: 67 }]}>
                {state.data.medData.creatine.result}
              </Text>
            </View>
            <View style={styles.textBlock}>
              <Text style={styles.modalText}>
                {state.data.medData.moche.name}
              </Text>
              <Text style={[styles.modalText, { marginLeft: 102 }]}>
                {state.data.medData.moche.result}
              </Text>
            </View>
            <View style={styles.textBlock}>
              <Text style={styles.modalText}>
                {state.data.medData.mocheKisl.name}
              </Text>
              <Text style={[styles.modalText, { marginLeft: 10 }]}>
                {state.data.medData.mocheKisl.result}
              </Text>
            </View>
            <View style={styles.textBlock}>
              <Text style={styles.modalText}>
                {state.data.medData.billAll.name}
              </Text>
              <Text style={[styles.modalText, { marginLeft: 98 }]}>
                {state.data.medData.billAll.result}
              </Text>
            </View>
            <View style={styles.textBlock}>
              <Text style={styles.modalText}>
                {state.data.medData.billIndir.name}
              </Text>
              <Text style={[styles.modalText, { marginLeft: 110 }]}>
                {state.data.medData.billIndir.result}
              </Text>
            </View>
            <View style={styles.textBlock}>
              <Text style={styles.modalText}>
                {state.data.medData.billStrai.name}
              </Text>
              <Text style={[styles.modalText, { marginLeft: 98 }]}>
                {state.data.medData.billStrai.result}
              </Text>
            </View>
            <View style={styles.textBlock}>
              <Text style={styles.modalText}>
                {state.data.medData.cholesterol.name}
              </Text>
              <Text style={[styles.modalText, { marginLeft: 88 }]}>
                {state.data.medData.cholesterol.result}
              </Text>
            </View>
            <View style={styles.textBlock}>
              <Text style={styles.modalText}>
                {state.data.medData.glucose.name}
              </Text>
              <Text style={[styles.modalText, { marginLeft: 114 }]}>
                {state.data.medData.glucose.result}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    fontSize: 18,
    textAlign: 'center',
  },
  textBlock: {
    // backgroundColor: '#444',
    minWidth: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
export default ModalWindow;
