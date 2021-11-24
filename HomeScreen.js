import * as React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

function HomeScreen({ navigation }) {
    return (
      <>
        <View style={styles.container}>
          <Text style={styles.title}>Pi Trainer</Text>
          <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Memorise')}>
            <Text style={styles.homeButtonText}>Memorise</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Train')}>
            <Text style={styles.homeButtonText}>Train</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }

export default HomeScreen;