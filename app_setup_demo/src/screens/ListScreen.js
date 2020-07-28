import React from "react";
import { Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const players = [
    { id: "a", name: "Rodgers" },
    { id: "b", name: "Adams" },
    { id: "c", name: "Jones" },
    { id: "d", name: "Funches" },
    { id: "e", name: "Williams" },
  ];
  return (
    <FlatList
      keyExtractor={(player) => player.id}
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
