import React from "react";
import { Text, StyleSheet, View } from "react-native";

const TemplateScreen = () => {

  return (
    <View>
      <Text style={styles.text}>Hello TemplateScreen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  }
});

export default TemplateScreen;
