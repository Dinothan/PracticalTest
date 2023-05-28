import Header from '../../components/Header';
import Background from '../../components/Layout';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useAppSelector, useAppDispatch} from '../../hooks/hooks';
import Button from '../../components/Button';
import {resetCart} from '../../state/products/productsSlice';

const Checkout = ({navigation}) => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(state => state.home.cart);
  const getTotalPrice = () => {
    let total = 0;
    cart?.length > 0 &&
      cart.forEach(res => (total = res.price * res.qty + total));
    return total;
  };

  const onPressPayNow = () => {
    dispatch(resetCart());
    navigation.navigate('Products');
  };
  return (
    <Background>
      <View style={{alignSelf: 'flex-start'}}>
        <View>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>Totel</Text>
        </View>
      </View>
      <View
        style={{alignSelf: 'center', alignItems: 'center', paddingBottom: 20}}>
        <Header>${getTotalPrice()}</Header>
      </View>
      <View style={{flex: 1, alignSelf: 'flex-start'}}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Payment Method</Text>
        <Text>Cash on delivery</Text>
      </View>
      <View style={styles.logout}>
        <Button mode="contained" onPress={() => onPressPayNow()}>
          Pay Now
        </Button>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  logout: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 5,
  },
});

export default Checkout;
