import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import ResultCard from './ResultCard';
import { Constants } from '../styles/constants';
import { withNavigation } from 'react-navigation';

const ResultsList = ({ title, results, navigation }) => {
  if (!results.length) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(results) => results.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ResultDetailScreen', { item: item })
              }
            >
              <ResultCard result={item} />
            </TouchableOpacity>
          );
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

export default withNavigation(ResultsList);
