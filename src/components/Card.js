import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, Text} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {getItemById} from '../state/products/productsThunk';

const CardComponent = ({title, content, imageUrl, id, navigation}) => {
  const dispatch = useDispatch();
  const onPressItem = () => {
    dispatch(getItemById(id));

    navigation.navigate('ProductDetails');
  };
  return (
    <Card style={styles.container} onPress={onPressItem}>
      <Card.Content>
        <Text variant="titleLarge">{title}</Text>
        <Text variant="bodyMedium" numberOfLines={1}>
          {content}
        </Text>
      </Card.Content>
      <Card.Cover source={{uri: imageUrl}} style={styles.imageStyle} />
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    marginTop: 15,
    backgroundColor: 'white',
  },
  imageStyle: {paddingTop: 5},
});

export default CardComponent;
