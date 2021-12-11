import React, { useRef, useState } from 'react';
import {
  Button,
  DrawerLayoutAndroid,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Avatar, Card, ListItem } from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Analyze = () => {
  const [visible, setVisible] = useState(false);
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState('right');

  const navigationView = () => (
    <View style={[styles.navigationContainer]}>
      <Text style={styles.paragraph}>Documents</Text>
      <TouchableOpacity
        onPress={() => console.log()}
        style={{
          marginTop: 40,
          borderTopColor: '#333',
          borderTopWidth: 1,
        }}
      >
        <ListItem bottomDivider>
          <View style={{ paddingLeft: 20 }}>
            <Avatar source={require('./pigi.png')} size={50} />
          </View>
          {/* <AntDesign name="linechart" size={50} color="#333" /> */}
          <ListItem.Content>
            <ListItem.Title style={{ marginLeft: 100 }}>check</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log()}>
        <ListItem bottomDivider>
          <View style={{ paddingLeft: 20 }}>
            <Avatar source={require('./pigi.png')} size={50} />
          </View>
          {/* <AntDesign name="linechart" size={50} color="#333" /> */}
          <ListItem.Content>
            <ListItem.Title style={{ marginLeft: 100 }}>check</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log()}>
        <ListItem bottomDivider>
          <View style={{ paddingLeft: 20 }}>
            <Avatar source={require('./pigi.png')} size={50} />
          </View>
          {/* <AntDesign name="linechart" size={50} color="#333" /> */}
          <ListItem.Content>
            <ListItem.Title style={{ marginLeft: 100 }}>check</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log()}>
        <ListItem bottomDivider>
          <View style={{ paddingLeft: 20 }}>
            <Avatar source={require('./pigi.png')} size={50} />
          </View>
          {/* <AntDesign name="linechart" size={50} color="#333" /> */}
          <ListItem.Content>
            <ListItem.Title style={{ marginLeft: 100 }}>check</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log()}
        style={{
          marginBottom: 139,
          borderBottomColor: '#333',
          borderBottomWidth: 1,
        }}
      >
        <ListItem bottomDivider>
          <View style={{ paddingLeft: 20 }}>
            <Avatar source={require('./pigi.png')} size={50} />
          </View>
          {/* <AntDesign name="linechart" size={50} color="#333" /> */}
          <ListItem.Content>
            <ListItem.Title style={{ marginLeft: 100 }}>check</ListItem.Title>
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
      style={{ backgroundColor: '#900' }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
        }}
      >
        <Button
          title="Upload"
          onPress={() => drawer.current.openDrawer()}
          color="#333"
        />
        <Button
          title="Documents"
          onPress={() => drawer.current.openDrawer()}
          color="#333"
        />
      </View>
      <View
        style={{ backgroundColor: '#900', paddingBottom: 200, marginTop: 40 }}
      >
        <Card>
          <Card.Title>Create Photo</Card.Title>
          <TouchableOpacity onPress={() => setVisible(!visible)}>
            {visible ? (
              <Card.Image
                source={{
                  uri: 'https://img.myloview.com/stickers/camera-icon-element-of-zoo-for-mobile-concept-and-web-apps-icon-outline-thin-line-icon-for-website-design-and-development-app-development-700-165192541.jpg',
                }}
                style={{ height: 400 }}
              ></Card.Image>
            ) : (
              <Card.Image
                source={require('./pigi.png')}
                style={{ height: 400 }}
              ></Card.Image>
            )}
          </TouchableOpacity>
        </Card>
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    padding: 6,
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Analyze;
