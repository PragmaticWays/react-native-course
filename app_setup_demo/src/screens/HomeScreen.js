import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  function navigate(screen) {
    navigation.navigate(screen);
  }

  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <TouchableOpacity
        onPress={() => navigate("Components")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Components Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate("List")} style={styles.button}>
        <Text style={styles.buttonText}>List Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  button: {
    marginTop: 10,
  },
  buttonText: {
    textAlign: "center",
    color: "#007AFF",
    fontSize: 20,
  },
});

export default HomeScreen;
