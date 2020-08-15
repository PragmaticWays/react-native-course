import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const onSearchSubmit = async () => {
    const response = await yelp.get('/search', {
      params: {
        limit: 50,
        term: searchValue,
        location: 'baltimore',
      },
    });
    setSearchResults(response.data.businesses);
  };

  return (
    <View>
      <SearchBar
        searchValue={searchValue}
        onSearchValueChange={setSearchValue}
        onSearchSubmit={onSearchSubmit}
      />
      <Text style={styles.text}>Hello SearchScreen!</Text>
      <Text>There are {searchResults.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default SearchScreen;
