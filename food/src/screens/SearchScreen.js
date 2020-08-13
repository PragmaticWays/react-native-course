import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const [searchValue, setSearchValue] = useState('');

  const onSearchSubmit = () => {
    console.log(`searching for ${searchValue}...`);
  };

  return (
    <View>
      <SearchBar
        searchValue={searchValue}
        onSearchValueChange={(newValue) => setSearchValue(newValue)}
        onSearchSubmit={() => onSearchSubmit()}
      />
      <Text style={styles.text}>Hello SearchScreen!</Text>
      <Text>{searchValue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default SearchScreen;
