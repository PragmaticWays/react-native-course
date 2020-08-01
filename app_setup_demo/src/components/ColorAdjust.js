import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";

const ColorAdjust = ({ colorName, colorValue, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>
        {colorName}: ({colorValue})
      </Text>
      <Button title={`Increase ${colorName}`} onPress={() => onIncrease()} />
      <Button title={`Decrease ${colorName}`} onPress={() => onDecrease()} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorAdjust;
