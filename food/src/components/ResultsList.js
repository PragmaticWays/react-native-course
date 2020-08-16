import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ResultDetail from './ResultDetail';
import { Constants } from '../styles/constants';

const ResultsList = ({ title, results }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(results) => results.id}
        renderItem={({ item }) => {
          return <ResultDetail result={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: Constants.DEFAULT_MARGIN,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: Constants.DEFAULT_MARGIN,
    marginBottom: 5,
  },
});

export default ResultsList;
