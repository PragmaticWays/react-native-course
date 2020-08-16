import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useSearchResults';
import ResultsList from '../components/ResultsList';
import { Constants } from '../styles/constants';
import { ScrollView } from 'react-native-gesture-handler';

const SearchScreen = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, errorMessage, onSearchSubmit] = useResults();

  const filterSearchResults = (price) => {
    return searchResults.filter((result) => result.price == price);
  };

  return (
    <>
      <SearchBar
        searchValue={searchValue}
        onSearchValueChange={setSearchValue}
        onSearchSubmit={() => onSearchSubmit(searchValue)}
      />
      <Text style={styles.title}>Hello SearchScreen!</Text>
      {errorMessage ? <Text style={styles.text}>{errorMessage}</Text> : null}
      <Text style={styles.text}>There are {searchResults.length} results.</Text>
      <ScrollView>
        <ResultsList
          title='Cost Effective'
          results={filterSearchResults('$')}
        />
        <ResultsList title='Average' results={filterSearchResults('$$')} />
        <ResultsList title='Expensive' results={filterSearchResults('$$$')} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    marginLeft: Constants.DEFAULT_MARGIN,
  },
  text: {
    marginLeft: Constants.DEFAULT_MARGIN,
  },
});

export default SearchScreen;
