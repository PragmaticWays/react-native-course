import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Constants } from '../styles/constants';

const SearchBar = ({ searchValue, onSearchValueChange, onSearchSubmit }) => {
  return (
    <View style={styles.container}>
      <MaterialIcons name='search' style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder='Search'
        value={searchValue}
        onChangeText={onSearchValueChange}
        onEndEditing={onSearchSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DDD',
    height: 40,
    borderRadius: 4,
    margin: Constants.DEFAULT_MARGIN,
    padding: 5,
    flexDirection: 'row',
  },
  icon: {
    fontSize: 30,
    alignSelf: 'center',
  },
  input: {
    flex: 1,
  },
});

export default SearchBar;
