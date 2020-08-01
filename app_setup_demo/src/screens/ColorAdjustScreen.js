import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ColorAdjust from "../components/ColorAdjust";

const ColorAdjustScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  let colorStepSize = 10;

  const setColor = (color, change) => {
    const colorFactory = getColorFactory(color);
    const RGB_MAX = 255;
    const RGB_MIN = 0;
    if (isWithinRgbRange(colorFactory.color, RGB_MIN, RGB_MAX)) {
      let newColorValue = clamp(colorFactory.color + change, RGB_MIN, RGB_MAX);
      colorFactory.setColor(newColorValue);
    }
  };

  const getColorFactory = (color) => {
    switch (color) {
      case "red":
        return { color: red, setColor: setRed };
      case "green":
        return { color: green, setColor: setGreen };
      case "blue":
        return { color: blue, setColor: setBlue };
      default:
        return {};
    }
  };

  const isWithinRgbRange = (colorValue, RGB_MIN, RGB_MAX) => {
    return colorValue >= RGB_MIN && colorValue <= RGB_MAX;
  };

  const clamp = (number, min, max) => {
    return Math.min(Math.max(number, min), max);
  };

  return (
    <View>
      <ColorAdjust
        colorName="Red"
        colorValue={red}
        onIncrease={() => setColor("red", colorStepSize)}
        onDecrease={() => setColor("red", -1 * colorStepSize)}
      />
      <ColorAdjust
        colorName="Green"
        colorValue={green}
        onIncrease={() => setColor("green", colorStepSize)}
        onDecrease={() => setColor("green", -1 * colorStepSize)}
      />
      <ColorAdjust
        colorName="Blue"
        colorValue={blue}
        onIncrease={() => setColor("blue", colorStepSize)}
        onDecrease={() => setColor("blue", -1 * colorStepSize)}
      />
      <View
        style={{
          width: "100%",
          height: 100,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorAdjustScreen;
