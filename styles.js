import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#EEE',
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
      fontFamily: 'HelveticaNeue-Medium',
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
      fontSize: 50,
      fontFamily: 'HelveticaNeue-Medium',
      color: "#222",
    },
    keypad: {
      flexDirection: 'column',
    },
    keypadRow: {
      flex: 1,
      flexDirection: 'row',
    },
    homeButton: {
      borderColor: 'black',
      borderWidth: 1.5,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'stretch',
      margin: 10,
      padding: 10,
      borderRadius: 4,
      backgroundColor: '#fcb26d',
    },
    homeButtonText: {
      fontSize: 38,
      fontFamily: 'HelveticaNeue-Light',
      color: "#222",
    },
    title: {
      fontSize: 50,
      fontFamily: 'HelveticaNeue-Bold',
      color: '#222',
    },
    memoriseText: {
      fontSize: 32, 
      fontFamily: 'HelveticaNeue'
    }
  });

export default styles;