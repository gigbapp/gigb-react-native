import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LeftDrawer from './LeftDrawer';


const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="LeftDrawer"
          component={LeftDrawer}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};