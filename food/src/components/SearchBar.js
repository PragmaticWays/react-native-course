import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const SearchBar = ({ searchValue, onSearchValueChange, onSearchSubmit }) => {
  return (
    <View style={styles.background}>
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
  background: {
    backgroundColor: '#DDD',
    height: 40,
    borderRadius: 4,
    margin: 15,
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
