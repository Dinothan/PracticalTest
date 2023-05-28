import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import Button from '../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAppDispatch, useAppSelector} from '../hooks/hooks';
import {resetAuth} from '../state/login/loginSlice';
import {resetProducts} from '../state/products/productsSlice';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileScreen = ({navigation}) => {
  const dispatch = useAppDispatch();
  const onPressLogout = async () => {
    await AsyncStorage.clear();
    dispatch(resetAuth());
    dispatch(resetProducts());
    navigation.navigate('Login');
  };
  const user = useAppSelector(state => state.auth.user);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image style={styles.avatar} source={{uri: user?.image}} />

          <Text style={styles.name}>
            {user?.firstName + ' ' + user?.lastName}
          </Text>
          <Text style={styles.userInfo}>{user?.email} </Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.details}>
          <View style={styles.label}>
            <View style={styles.labelSection}>
              <MaterialCommunityIcons name="gender-male-female" />
              <Text style={styles.gender}>Gender</Text>
            </View>
          </View>
          <View style={styles.info}>
            <Text>{user?.gender}</Text>
          </View>
        </View>
        <View style={styles.logout}>
          <Button mode="contained" onPress={() => onPressLogout()}>
            Logout
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, height: '100%'},
  header: {
    backgroundColor: '#DCDCDC',
  },
  headerContent: {
    padding: 5,
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: '#000000',
    fontWeight: '600',
  },
  userInfo: {
    fontSize: 16,
    color: '#778899',
    fontWeight: '600',
    paddingBottom: 5,
  },
  body: {
    flex: 1,
    paddingTop: 10,
  },
  item: {
    flexDirection: 'row',
  },
  infoContent: {
    flex: 1,
    color: '#ffffff',
    paddingLeft: 5,
  },
  iconContent: {
    flex: 0.4,
    backgroundColor: '#708090',
  },
  icon: {
    width: 30,
    height: 30,
    marginTop: 20,
  },
  info: {paddingTop: 5, paddingBottom: 5, paddingLeft: 20},
  logout: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  details: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  label: {width: '50%', backgroundColor: '#DCDCDC'},
  labelSection: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingTop: 5,
    paddingBottom: 5,
  },
  gender: {fontSize: 12, fontWeight: 'bold'},
});

export default ProfileScreen;
