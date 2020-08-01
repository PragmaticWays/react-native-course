import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ColorAdjust from "../components/ColorAdjust";

const ColorAdjustScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  let colorStepSize = 10;

  return (
    <View>
      <ColorAdjust
        colorName="Red"
        colorValue={red}
        onIncrease={() => setRed(red + colorStepSize)}
        onDecrease={() => setRed(red - colorStepSize)}
      />
      <ColorAdjust
        colorName="Green"
        colorValue={green}
        onIncrease={() => setGreen(green + colorStepSize)}
        onDecrease={() => setGreen(green - colorStepSize)}
      />
      <ColorAdjust
        colorName="Blue"
        colorValue={blue}
        onIncrease={() => setBlue(blue + colorStepSize)}
        onDecrease={() => setBlue(blue - colorStepSize)}
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
