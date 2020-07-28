import React from "react";
import { Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const players = [
    { name: "Rodgers" },
    { name: "Adams" },
    { name: "Jones" },
    { name: "Funches" },
    { name: "Williams" },
  ];
  return (
    <FlatList
      data={players}
      renderItem={({ item }) => {
        return <Text>{item.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default ListScreen;
