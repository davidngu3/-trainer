import { StatusBar } from 'expo-status-bar';
import Toast from 'react-native-toast-message';
import React from 'react';
import { useState } from 'react';
import { Animated, Button, Image, Pressable, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';

function KeypadButton(props) {
  const { onPress, title } = props;

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

export default function App() {
  const [text, setText] = useState(" ");
  const pi = " 3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679";

  function handleInput(value) {
    console.log(text + value);
    if (validateInput(text + value)) {
      setText(text + value);
    } 
    else {
      Toast.show({
        type: 'error',
        text1: 'Incorrect input',
        text2: `The right digit was: ${pi[text.length]}`,
        autoHide: true,
        visibilityTime: 1500
      })
      setTimeout(() => clearInput(), 1000);
    }
  }

  function validateInput(input) {
    return pi.startsWith(input);
  }
  
  function clearInput() {
    setText(" ");
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.screen}>
          <ScrollView horizontal 
            scrollEnabled = {false}
            ref = { ref => this.scrollView = ref}
            onContentSizeChange={() => {
              this.scrollView.scrollToEnd({animated: true});
            }}
            >
            <Text style = {styles.screenText}>{text}</Text>
          </ScrollView>
        </View>
        <View style={styles.keypad}>
          <View style={styles.keypadRow}>
            <KeypadButton title="7" onPress={() => handleInput("7")}></KeypadButton>
            <KeypadButton title="8" onPress={() => handleInput("8")}></KeypadButton>
            <KeypadButton title="9" onPress={() => handleInput("9")}></KeypadButton>
          </View>

          <View style={styles.keypadRow}>
            <KeypadButton title="4" onPress={() => handleInput("4")}></KeypadButton>
            <KeypadButton title="5" onPress={() => handleInput("5")}></KeypadButton>
            <KeypadButton title="6" onPress={() => handleInput("6")}></KeypadButton>
          </View>

          <View style={styles.keypadRow}>
            <KeypadButton title="1" onPress={() => handleInput("1")}></KeypadButton>
            <KeypadButton title="2" onPress={() => handleInput("2")}></KeypadButton>
            <KeypadButton title="3" onPress={() => handleInput("3")}></KeypadButton>
          </View>

          <View style={styles.keypadRow}>
            <KeypadButton title="." onPress={() => handleInput(".")}></KeypadButton>
            <KeypadButton title="0" onPress={() => handleInput("0")}></KeypadButton>
            <KeypadButton title="C" onPress={() => clearInput()}></KeypadButton>
          </View>

        </View>
      </View>
      <Toast />
    </>
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
