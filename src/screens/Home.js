import React, {useEffect} from 'react';
import {ScrollView} from 'react-native';
import CardComponent from '../components/Card';
import {useAppDispatch, useAppSelector} from '../hooks/hooks';
import {getProducts} from '../state/products/productsThunk';
import Background from '../components/Layout';

const HomeScreen = () => {
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
              title={res.title}
              content={res.description}
              imageUrl={res.thumbnail}
            />
          ))}
      </Background>
    </ScrollView>
  );
};

export default HomeScreen;
