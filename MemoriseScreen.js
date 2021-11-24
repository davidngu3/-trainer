import * as React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

function MemoriseScreen() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.memoriseText}>3.1415 92653 58979 32384 62643 38327 95028 84197 16939 93751 05820 97494 45923 07816 40628 62089 98628 03482 53421 17067</Text>
      </View>
    </>
  );
}

export default MemoriseScreen;