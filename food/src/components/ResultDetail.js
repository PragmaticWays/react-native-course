import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ResultDetail = ({ result }) => {
  return (
    <View>
      <Text style={styles.text}>{result.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {},
});

export default ResultDetail;
