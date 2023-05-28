import React from 'react';
import Background from '../../components/Layout';
import {Image, Text, View, StyleSheet} from 'react-native';
import {useAppSelector, useAppDispatch} from '../../hooks/hooks';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {deleteItem} from '../../state/products/productsSlice';
import Button from '../../components/Button';
Button;

const CardScreen = ({navigation}) => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(state => state.home.cart);

  const onPressDeleteItem = id => {
    dispatch(deleteItem(id));
  };

  const onPressCheckout = () => {
    navigation.navigate('Checkout');
  };

  return (
    <Background>
      <View style={{flex: 1, alignSelf: 'flex-start'}}>
        {cart?.length > 0 &&
          cart.map(res => (
            <View
              key={res.id}
              style={{
                flexDirection: 'row',
                width: '100%',
                borderBottomWidth: 2,
                padding: 5,
                borderColor: 'gray',
              }}>
              <View style={{paddingLeft: 10, paddingRight: 10}}>
                <Image
                  source={{uri: res.thumbnail}}
                  style={{width: 50, height: 50}}
                />
              </View>
              <View>
                <Text>{res.name}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <Text style={{paddingRight: 20}}>Quantity: {res.qty}</Text>
                  <TouchableOpacity onPress={() => onPressDeleteItem(res.id)}>
                    <Text style={{color: 'red'}}>Delete</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                }}>
                <Text>${res.price * res.qty}</Text>
              </View>
            </View>
          ))}
      </View>
      <View style={styles.logout}>
        <Button mode="contained" onPress={onPressCheckout}>
          Checkout
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

export default CardScreen;
