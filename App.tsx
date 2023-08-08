import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultSearchScreen from './src/screens/ResultsSearchScreen';
import styles from './src/styles/styles';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='SearchScreen'
        screenOptions={{
          headerStyle: styles.headerStyle,
          headerShadowVisible: false,
          headerTitleStyle: styles.headerTitleStyle,
          headerTitleAlign: styles.headerTitleStyle.textAlign,
          headerTintColor: styles.headerStyle.tintColor,
        }}
      >
        <Stack.Screen
          name='Business Search'
          component={SearchScreen}
        />
        <Stack.Screen
          name='Result Search Screen'
          component={ResultSearchScreen}
          options={({ route }: any) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
