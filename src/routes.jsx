import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './pages/Home';
import Cart from './pages/Cart';

import Header from './components/Header';
import colors from './styles/colors';

const Stack = createStackNavigator();

function Routes() {
  return (
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
  );
}

export default Routes;
