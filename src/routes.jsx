import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';

const Stack = createStackNavigator();

function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: props => <Header {...props} />,
        headerLeft: false,
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#141419',
        },
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
}

export default Routes;
