import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const TextScreen = () => {
  const [password, setPassword] = useState("");
  const [isInvalidPassword, setIsInvalidPassword] = useState(true);
  const MIN_PASSWORD_LENGTH = 5;

  const updatePassword = (password) => {
    setIsInvalidPassword(password.length <= MIN_PASSWORD_LENGTH);
    setPassword(password);
  };

  return (
    <View>
      <Text>Enter password:</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={(password) => updatePassword(password)}
      />
      {isInvalidPassword ? (
        <Text>
          Password must be longer than {MIN_PASSWORD_LENGTH} characters.
        </Text>
      ) : null}
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
