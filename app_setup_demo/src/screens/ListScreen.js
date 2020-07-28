import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const players = [
    { id: "a", name: "Rodgers", score: 95 },
    { id: "b", name: "Adams", score: 98 },
    { id: "c", name: "Jones", score: 97 },
    { id: "d", name: "Funches", score: 76 },
    { id: "e", name: "Williams", score: 83 },
  ];
  return (
    <FlatList
      keyExtractor={(player) => player.id}
      data={players}
      renderItem={({ item }) => {
        return (
          <View style={styles.container}>
            <View style={styles.view}>
              <Text style={styles.player}>Player {item.name}</Text>
            </View>
            <View style={styles.view}>
              <Text style={styles.score}>Score {item.score}</Text>
            </View>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  view: {
    flex: 1,
  },
  player: {
    textAlign: "left",
    fontSize: 20,
  },
  score: {
    textAlign: "right",
    fontSize: 20,
  },
});

export default ListScreen;
