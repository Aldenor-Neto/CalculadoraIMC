import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/components/Home';
import Result from './src/components/Result';

export default function App() {

const Stak = createStackNavigator();

  return (
      <NavigationContainer>
        <Stak.Navigator>
        <Stak.Screen name='Home' component={ Home }/>
<Stak.Screen name='Result' component={ Result } />
        </Stak.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
