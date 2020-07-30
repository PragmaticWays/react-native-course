import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  const BEACH_IMG_SRC = "../../assets/images/beach.jpg";
  const FOREST_IMG_SRC = "../../assets/images/forest.jpg";
  const MOUNTAIN_IMG_SRC = "../../assets/images/mountain.jpg";

  return (
    <View>
      <ImageDetail title="Beach" imageSource={require(BEACH_IMG_SRC)} />
      <ImageDetail title="Forest" imageSource={require(FOREST_IMG_SRC)} />
      <ImageDetail title="Mountain" imageSource={require(MOUNTAIN_IMG_SRC)} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
