import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { SpeedDial } from 'react-native-elements';

const Speed = () => {
  const [open, setOpen] = useState(false);
  return (
    <SpeedDial
      isOpen={open}
      icon={{ name: 'edit', color: '#900' }}
      openIcon={{ name: 'close', color: '#900' }}
      onOpen={() => setOpen(!open)}
      onClose={() => setOpen(!open)}
      style={{ marginTop: 200, width: 140, backgroundColor: ""}}
      iconContainerStyle={{ backgroundColor: '#333' }}
    >
      <SpeedDial.Action
        icon={{ name: 'add', color: '#333' }}
        title="Add"
        onPress={() => console.log('Add Something')}
        iconContainerStyle={{ backgroundColor: '#900' }}
      />
      <SpeedDial.Action
        icon={{ name: 'delete', color: '#333' }}
        title="Delete"
        onPress={() => console.log('Delete Something')}
        iconContainerStyle={{ backgroundColor: '#900' }}
      />
    </SpeedDial>
  );
};

const styles = StyleSheet.create({});

export default Speed;
