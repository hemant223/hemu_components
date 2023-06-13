import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SearchScreen from '../../components/Searching/SearchScreen';


const MainNavigationStack = () => {
  const Stack = createStackNavigator();

 
  return (
    <NavigationContainer>
      <Stack.Navigator /* screenOptions={horizontalAnimation} */  headerShown={false}>
       
         <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{headerShown: false}}
        />
       
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigationStack

const styles = StyleSheet.create({})