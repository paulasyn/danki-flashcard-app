import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Or any icon library you prefer

export default function FloatingActionButton(){
  return (
    <TouchableOpacity
      style={styles.floatinBtn}
      activeOpacity={0.7}
      onPress={() => alert(`I'm being clicked!`)}
    >
      <Ionicons name="add-circle" size={75}/>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  floatinBtn: {
    // TODO: figure out why the button clickable area is bigger than the circle
    position: 'absolute',
    bottom: 10,
    right: 10,
    borderRadius: 28,
  }, 
  // button: {
  //   position: 'absolute',
  //   // bottom: 30,
  //   // right: 30,
  //   // width: 100,
  //   height: 50,
  //   borderRadius: 28,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   elevation: 8,
  // },
});
