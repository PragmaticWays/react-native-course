import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { Constants } from '../styles/constants';

const ResultCard = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.ratingReview}>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: Constants.DEFAULT_MARGIN,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
  },
  ratingReview: {
    color: '#777777',
  },
});

export default ResultCard;
