import 'react-native-gesture-handler';
import React from 'react';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import DrawerContainer from './routes/DrawerContainer';

const App = () => {
  enableScreens();
  return (
    <NavigationContainer>
    <DrawerContainer />
  </NavigationContainer>
  );
};

export default App;