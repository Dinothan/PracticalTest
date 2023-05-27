import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/state/store';
import AppNavigation from './src/route/AppNavigation';
import 'react-native-gesture-handler';
import {PaperProvider} from 'react-native-paper';

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <SafeAreaProvider>
          <SafeAreaView style={appStyles.container}>
            <NavigationContainer>
              <AppNavigation />
            </NavigationContainer>
          </SafeAreaView>
        </SafeAreaProvider>
      </PaperProvider>
    </Provider>
  );
};

const appStyles = StyleSheet.create({
  container: {flex: 1},
});

export default App;
