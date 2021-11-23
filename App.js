import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function KeypadButton(props) {
  const { onPress, title } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}

export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <Text style = {styles.screenText}>0</Text>
      </View>
      
      <View style={styles.keypad}>
        <View style={styles.keypadRow}>
          <KeypadButton title="7"></KeypadButton>
          <KeypadButton title="8"></KeypadButton>
          <KeypadButton title="9"></KeypadButton>
        </View>

        <View style={styles.keypadRow}>
          <KeypadButton title="4"></KeypadButton>
          <KeypadButton title="5"></KeypadButton>
          <KeypadButton title="6"></KeypadButton>
        </View>

        <View style={styles.keypadRow}>
          <KeypadButton title="1"></KeypadButton>
          <KeypadButton title="2"></KeypadButton>
          <KeypadButton title="3"></KeypadButton>
        </View>

        <View style={styles.keypadRow}>
          <KeypadButton title="."></KeypadButton>
          <KeypadButton title="0"></KeypadButton>
          <KeypadButton title="C"></KeypadButton>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DDD',
    width: "100%",
    height: "100%",
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 220,
    paddingHorizontal: 50,
  },
  screen: {
    backgroundColor: "#555",
    borderRadius: 4,
    alignSelf: 'stretch',
    marginVertical: 5,
    paddingRight: 10,
  },
  screenText: {
    textAlign: 'right',
    color: '#FFF',
    lineHeight: 90,
    fontSize: 60,
  },
  button: {
    borderColor: 'black',
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    margin: 5,
    borderRadius: 4,
    backgroundColor: '#fcb26d',
  },
  buttonText: {
    fontSize: 60,
    color: "#222",
  },
  keypad: {
    flexDirection: 'column',
  },
  keypadRow: {
    flex: 1,
    flexDirection: 'row',
  },
});
