import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { FlatList, State } from "react-native-gesture-handler";

const reducer = (state, action) => {
  return { count: state.count + action.payload };
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <View>
      <Button title="Increase" onPress={() => dispatch({ payload: 1 })} />
      <Button title="Decrease" onPress={() => dispatch({ payload: -1 })} />
      <Text style={styles.text}>Current Count:</Text>
      <Text style={styles.text}>{state.count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    textAlign: "center",
  },
});

export default CounterScreen;
