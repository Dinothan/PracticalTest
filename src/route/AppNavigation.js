import React from 'react';
import HomeScreen from '../screens/Home';
import LoginScreen from '../screens/Login';
import ProfileScreen from '../screens/Profile';
import CardScreen from '../screens/Card';
import {createStackNavigator} from '@react-navigation/stack';
import {useAppSelector} from '../hooks/hooks';

const Stack = createStackNavigator();

const AppNavigation = () => {
  const isAuthenticatedUser = useAppSelector(
    state => state.auth.isAuthenticated,
  );

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      {isAuthenticatedUser && (
        <>
          <Stack.Screen
            name="Home"
            options={{title: 'Home', headerLeft: () => null}}
            component={HomeScreen}
          />
          <Stack.Screen
            name="Card"
            options={{title: 'Card', headerLeft: () => null}}
            component={CardScreen}
          />
          <Stack.Screen
            name="Profile"
            options={{title: 'Profile', headerLeft: () => null}}
            component={ProfileScreen}
          />
        </>
      )}
    </Stack.Navigator>
  );
};
export default AppNavigation;
