import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import Toast from 'react-native-toast-message';
import React from 'react';
import { useState } from 'react';
import { Animated, Button, Image, Pressable, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { Audio } from 'expo-av';

function KeypadButton(props) {
  const { onPress, onPressIn, title } = props;

  return (
    <TouchableOpacity style={styles.button} onPress={onPress} onPressIn={onPressIn}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

export default function App() {
  const [text, setText] = useState(" ");
  const [sound, setSound] = React.useState();
  const pi = " 3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679";

  async function playClickSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("./assets/clickshort.mp3")
    );
    setSound(sound);

    await sound.playAsync(); 
  }

  async function playIncorrectSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("./assets/incorrect.mp3")
    );
    setSound(sound);

    await sound.playAsync(); 
  }

  async function playWinSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("./assets/correct.mp3")
    );
    setSound(sound);

    await sound.playAsync(); 
  }

  React.useEffect(() => {
    return sound 
      ? () => {
        sound.unloadAsync(); }
      : undefined;
  }, [sound]);

  function handleInput(value) {
    if (validateInput(text + value)) {
      setText(text + value);

      if (text.length == 102) {
        playWinSound();
        Toast.show({
          type: 'success',
          text1: 'Hundredaire',
          text2: `Congratulations on a hundred digits. Resetting`,
          autoHide: true,
          visibilityTime: 5000
        })
        clearInput();
      }
    } 
    else {
      playIncorrectSound();
      Toast.show({
        type: 'error',
        text1: 'Incorrect input',
        text2: `The right digit was: ${pi[text.length]}`,
        autoHide: true,
        visibilityTime: 1500
      })
      clearInput();
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
            <KeypadButton title="7" onPressIn={() => playClickSound()} onPress={() => handleInput("7")}></KeypadButton>
            <KeypadButton title="8" onPressIn={() => playClickSound()} onPress={() => handleInput("8")}></KeypadButton>
            <KeypadButton title="9" onPressIn={() => playClickSound()} onPress={() => handleInput("9")}></KeypadButton>
          </View>

          <View style={styles.keypadRow}>
            <KeypadButton title="4" onPressIn={() => playClickSound()} onPress={() => handleInput("4")}></KeypadButton>
            <KeypadButton title="5" onPressIn={() => playClickSound()} onPress={() => handleInput("5")}></KeypadButton>
            <KeypadButton title="6" onPressIn={() => playClickSound()} onPress={() => handleInput("6")}></KeypadButton>
          </View>

          <View style={styles.keypadRow}>
            <KeypadButton title="1" onPressIn={() => playClickSound()} onPress={() => handleInput("1")}></KeypadButton>
            <KeypadButton title="2" onPressIn={() => playClickSound()} onPress={() => handleInput("2")}></KeypadButton>
            <KeypadButton title="3" onPressIn={() => playClickSound()} onPress={() => handleInput("3")}></KeypadButton>
          </View>

          <View style={styles.keypadRow}>
            <KeypadButton title="." onPressIn={() => playClickSound()} onPress={() => handleInput(".")}></KeypadButton>
            <KeypadButton title="0" onPressIn={() => playClickSound()} onPress={() => handleInput("0")}></KeypadButton>
            <KeypadButton title="C" onPressIn={() => playClickSound()} onPress={() => clearInput()}></KeypadButton>
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
