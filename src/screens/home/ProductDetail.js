import React, {useState} from 'react';
import Background from '../../components/Layout';
import {useAppSelector, useAppDispatch} from '../../hooks/hooks';
import Slideshow from '../../modules/react-native-slideshow';
import {Text, View, StyleSheet} from 'react-native';
import {Rating} from 'react-native-ratings';
import Slider from '@react-native-community/slider';
import Button from '../../components/Button';
import {addtoCart} from '../../state/products/productsSlice';

const ProductDetail = ({navigation}) => {
  const dispatch = useAppDispatch();
  const [qty, setQty] = useState(0);
  const selectedItem = useAppSelector(state => state.home.selectedItem);
  const cartCount = useAppSelector(state => state.home.cartCount);

  const itemImages =
    selectedItem?.images?.map(res => {
      return {url: res};
    }) ?? [];

  const onPressAddtoCart = () => {
    dispatch(
      addtoCart({
        id: selectedItem.id,
        name: selectedItem.title,
        qty,
        price: selectedItem.price,
        thumbnail: selectedItem.thumbnail,
      }),
    );

    navigation.navigate('Products');
  };

  const onValueChange = value => {
    setQty(value);
  };

  return (
    <Background>
      <Slideshow dataSource={itemImages} />
      <View
        style={{
          flex: 1,
          paddingTop: 20,
          alignSelf: 'flex-start',
        }}>
        <Text style={styles.title}>{selectedItem?.title}</Text>
        <Text>{selectedItem?.description}</Text>

        <View style={{paddingTop: 25}}>
          <View style={styles.details}>
            <View style={styles.label}>
              <View style={styles.labelSection}>
                <Text style={styles.gender}>Price</Text>
              </View>
            </View>
            <View style={styles.info}>
              <Text>${selectedItem?.price}</Text>
            </View>
          </View>
          <View style={styles.details}>
            <View style={styles.label}>
              <View style={styles.labelSection}>
                <Text style={styles.gender}>Review</Text>
              </View>
            </View>
            <View style={styles.info}>
              <Rating
                readonly={true}
                jumpValue={selectedItem?.rating}
                imageSize={15}
                colo
              />
            </View>
          </View>
        </View>
        <View style={{flex: 1, alignItems: 'center', paddingTop: 10}}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>Quantity</Text>
          <Text style={{fontSize: 16, paddingTop: 5}}>{qty}</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text>0 </Text>
            <Slider
              style={{width: 200, height: 40}}
              minimumValue={0}
              maximumValue={10}
              onValueChange={onValueChange}
              step={1}
              value={qty}
            />
            <Text> 10</Text>
          </View>
        </View>
      </View>
      <View style={styles.logout}>
        <Button
          disabled={Number(qty) < 1}
          mode="contained"
          onPress={() => onPressAddtoCart()}>
          Add to Cart ({cartCount})
        </Button>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  label: {width: '50%', backgroundColor: '#DCDCDC'},
  labelSection: {
    paddingLeft: 20,
    paddingTop: 5,
    paddingBottom: 5,
  },
  gender: {fontSize: 12, fontWeight: 'bold'},
  info: {paddingTop: 5, paddingBottom: 5, paddingLeft: 20},
  title: {
    textAlign: 'left',
    fontSize: 20,
    fontWeight: 'bold',
  },
  logout: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 5,
  },
});

export default ProductDetail;
