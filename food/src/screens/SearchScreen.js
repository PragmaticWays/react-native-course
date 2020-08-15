import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useSearchResults';

const SearchScreen = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, errorMessage, onSearchSubmit] = useResults();

  return (
    <View>
      <SearchBar
        searchValue={searchValue}
        onSearchValueChange={setSearchValue}
        onSearchSubmit={() => onSearchSubmit(searchValue)}
      />
      <Text style={styles.text}>Hello SearchScreen!</Text>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>There are {searchResults.length} results.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default SearchScreen;
