/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import HomeScreen from '../screens/Home';
import LoginScreen from '../screens/Login';
import ProfileScreen from '../screens/Profile';
import CartScreen from '../screens/Cart';
import {createStackNavigator} from '@react-navigation/stack';
import {useAppSelector} from '../hooks/hooks';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  const isAuthenticatedUser = useAppSelector(
    state => state.auth.isAuthenticated,
  );

  const HomeTabScreen = () => {
    return (
      <Tab.Navigator>
        {isAuthenticatedUser && (
          <>
            <Tab.Screen
              name="Products"
              options={{
                headerLeft: () => null,
                tabBarIcon: ({color, size}) => (
                  <MaterialCommunityIcons
                    name="home"
                    color={color}
                    size={size}
                  />
                ),
              }}
              component={HomeScreen}
            />
            <Tab.Screen
              name="Cart"
              options={{
                title: 'Card',
                headerLeft: () => null,
                tabBarIcon: ({color, size}) => (
                  <MaterialCommunityIcons
                    name="cart"
                    color={color}
                    size={size}
                  />
                ),
              }}
              component={CartScreen}
            />
            <Tab.Screen
              name="Profile"
              options={{
                title: 'Profile',
                headerLeft: () => null,
                tabBarIcon: ({color, size}) => (
                  <MaterialCommunityIcons
                    name="account"
                    color={color}
                    size={size}
                  />
                ),
              }}
              component={ProfileScreen}
            />
          </>
        )}
      </Tab.Navigator>
    );
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Products"
        component={HomeTabScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default AppNavigation;
