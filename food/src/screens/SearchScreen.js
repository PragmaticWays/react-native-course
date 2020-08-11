import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const SearchScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Hello SearchScreen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default SearchScreen;
