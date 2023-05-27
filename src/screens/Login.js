import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import Background from '../components/Layout';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import {theme} from '../core/theme';
import {useAppDispatch} from '../hooks/hooks';
import {getLogin} from '../state/login/loginThunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {userAuthentication} from '../state/login/loginSlice';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});

  const dispatch = useAppDispatch();

  const _onLoginPressed = () => {
    if (username.value === '' && password.value === '') {
      setUsername({...username, error: 'Please enter username'});
      setPassword({...password, error: 'Please enter password'});
      return;
    } else if (username.value === '') {
      setUsername({...username, error: 'Please enter username'});
    } else if (password.value === '') {
      setPassword({...password, error: 'Please enter password'});
    } else {
      dispatch(getLogin({username: username.value, password: password.value}))
        .unwrap()
        .then(async res => {
          await AsyncStorage.setItem('@security_Key', res.token);
          const user = res;
          delete user.token;
          dispatch(userAuthentication(user));
          navigation.navigate('Home');
        })
        .catch(e => {
          console.error(e);
        });
    }
  };

  return (
    <Background>
      <Header>Practical Test</Header>

      <TextInput
        label="Username"
        returnKeyType="next"
        value={username.value}
        onChangeText={text => setUsername({value: text, error: ''})}
        error={!!username.error}
        errorText={username.error}
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({value: text, error: ''})}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <View style={styles.forgotPassword}>
        <TouchableOpacity>
          <Text style={styles.label}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>

      <Button mode="contained" onPress={_onLoginPressed}>
        Login
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Don’t have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default LoginScreen;
