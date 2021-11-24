import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen.js';
import MemoriseScreen from './MemoriseScreen.js';
import TrainingScreen from './TrainingScreen.js';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home', headerShown: false }}/>
        <Stack.Screen name="Train" component={TrainingScreen} options={{ title: 'Train' }}/>
        <Stack.Screen name="Memorise" component={MemoriseScreen} options={{ title: 'Memorise' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
