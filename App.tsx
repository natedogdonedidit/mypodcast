
import { NavigationContainer } from '@react-navigation/native';

import React from 'react';
import {UtilityThemeProvider, Text, Box} from 'react-native-design-utility';
import {theme} from './src/constants/theme';
import MainStackNavigator from './src/navigators/MainStackNavigator';

const App = () => {
  return (
    <UtilityThemeProvider theme={theme}>
        <NavigationContainer>
          <MainStackNavigator/>
        </NavigationContainer>
    </UtilityThemeProvider>
  )
}

export default App;