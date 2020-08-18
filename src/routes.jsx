import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Home from './pages/Home';
import Cart from './pages/Cart';

import Header from './components/Header';
import colors from './styles/colors';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={navigation => ({
          headerTitle: () => <Header {...navigation} />,
          headerStyle: {
            backgroundColor: colors.dark,
          },
          headerLeft: null,
        })}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
