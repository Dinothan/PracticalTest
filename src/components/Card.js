import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, Text} from 'react-native-paper';

const CardComponent = ({title, content, imageUrl}) => {
  return (
    <Card style={styles.container}>
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
