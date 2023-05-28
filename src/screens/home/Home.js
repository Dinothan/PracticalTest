/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {ScrollView} from 'react-native';
import CardComponent from '../../components/Card';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks';
import {getProducts} from '../../state/products/productsThunk';
import Background from '../../components/Layout';

const HomeScreen = ({navigation}) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts()).unwrap();
  }, []);

  const products = useAppSelector(state => state.home.products);
  return (
    <ScrollView>
      <Background>
        {products?.length > 0 &&
          products.map(res => (
            <CardComponent
              key={res.id}
              id={res.id}
              title={res.title}
              content={res.description}
              imageUrl={res.thumbnail}
              navigation={navigation}
            />
          ))}
      </Background>
    </ScrollView>
  );
};

export default HomeScreen;
