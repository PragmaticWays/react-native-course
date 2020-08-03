import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const TextScreen = () => {
  const [name, setName] = useState("");

  return (
    <View>
      <Text>Enter name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(value) => setName(value)}
      />
      <Text>Your name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 10,
    borderBottomColor: "#cccccc",
    borderBottomWidth: 2,
  },
});

export default TextScreen;
