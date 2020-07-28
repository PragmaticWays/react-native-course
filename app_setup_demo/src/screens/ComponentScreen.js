import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ComponentScreen = () => {
  let name = "Adam";
  return (
    <View style={styles.view}>
      <Text style={styles.heading}>Getting started with React Native!</Text>
      <Text style={styles.subheading}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    padding: 20,
  },
  heading: {
    fontSize: 45,
  },
  subheading: {
    fontSize: 20,
  },
});

export default ComponentScreen;
